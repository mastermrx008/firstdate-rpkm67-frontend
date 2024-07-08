'use client';
import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { createCheckIn } from '../../utils/checkin'; // Update the path as needed
import { useAuth } from '@/context/AuthContext'; // Update the path as needed
import ConfirmationModal from './confirmationModal'; // Import the ConfirmationModal
import FailureModal from './failureModal'; // Import the FailureModal
import { CheckInDTO } from '@/dtos/checkInsDTO';
import toast from 'react-hot-toast';
import { CheckIn } from '@/types/checkIn1211';

function Scan() {
  const [isScanned, setIsScanned] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);
  const [checkInData, setCheckInData] = useState<CheckIn | null>(null);
  const [status, setStatus] = useState<'success' | 'error' | 'idle'>('idle');
  const router = useRouter();
  const { user } = useAuth(); // Get the user from the AuthContexts

  const handleScanResult = async (
    scanRawData: any,
    error: Error | null | undefined
  ) => {
    if (scanRawData) {
      console.log(scanRawData);
      const userId = scanRawData.text;
      setData(userId);

      if (user && user.email && !checkInData) {
        // Send the scanned student ID and user email to the API
        const userData = await createCheckIn(userId, user.email, 'firstdate');
        if (userData) {
          toast.success('Check-in successful');
          setCheckInData(userData);
          setStatus('success');
        } else {
          console.error('Check-in failed');
          setStatus('error');
        }
      }
    }
    if (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    if (data && !isScanned) {
      setIsScanned(true);
      setData(null);
    }
  }, [data]);

  const handleCloseModal = () => {
    setStatus('idle');
    setIsScanned(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative w-72 h-72">
        <QrReader
          className="bg-black"
          onResult={handleScanResult}
          constraints={{ facingMode: 'environment' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-48 w-48 max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-3xl border-4 border-white"
          animate={{ opacity: [0.25, 0.5, 1, 0.5, 0.25] }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
        <button
          className="absolute right-0 top-0 mr-4 mt-4"
          onClick={() => router.back()}
        ></button>
      </div>
      <div className="flex w-full items-center justify-center bg-black">
        <div className="h-64 w-full bg-white p-8 text-center">
          <ConfirmationModal
            isOpen={status == 'success'}
            title="Success"
            message="The check-in was successful."
            onConfirm={handleConfirm}
            onClose={handleCloseModal}
          />

          <FailureModal
            isOpen={status == 'error'}
            title="Failure"
            message="The check-in failed. Please try again."
            onClose={handleCloseModal}
            onConfirm={handleConfirm}
          />
          {status == 'idle' && (
            <p className="break-all text-black">Please scan a QR code</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scan;
