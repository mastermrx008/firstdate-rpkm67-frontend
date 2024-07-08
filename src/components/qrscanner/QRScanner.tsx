'use client';
import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { getCheckIn } from '../../utils/checkin'; // Update the path as needed
import { useAuth } from '@/context/AuthContext'; // Update the path as needed
import ConfirmationModal from './confirmationModal'; // Import the ConfirmationModal
import FailureModal from './failureModal'; // Import the FailureModal

function Scan() {
  const [isScanned, setIsScanned] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showFailureModal, setShowFailureModal] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useAuth(); // Get the user from the AuthContext

  const handleScanResult = async (token: any, error: any) => {
    if (token) {
      const scannedData = token.text;
      setData(scannedData);

      if (user && user.email) {
        // Send the scanned student ID and user email to the API
        const response = await getCheckIn(scannedData, user.email);
        if (response) {
          // Handle the response as needed
          console.log('Check-in successful:', response);
          setShowSuccessModal(true);
        } else {
          console.error('Check-in failed');
          setShowFailureModal(true);
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
    setShowSuccessModal(false);
    setShowFailureModal(false);
    setIsScanned(false);
  };

  const handleConfirm = () => {
    // Perform any confirmation actions if needed
    handleCloseModal();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative w-full">
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
        >
          {/* <XMarkIcon className="h-6 w-6 rounded-sm bg-white bg-opacity-50 text-white" /> */}
        </button>
      </div>
      <div className="flex w-full items-center justify-center bg-black">
        <div className="h-64 w-full bg-white p-8 text-center">
          {showSuccessModal ? (
            <ConfirmationModal
              isOpen={showSuccessModal}
              title="Success"
              message="The check-in was successful."
              onConfirm={handleConfirm}
              onClose={handleCloseModal}
            />
          ) : showFailureModal ? (
            <FailureModal
              isOpen={showFailureModal}
              title="Failure"
              message="The check-in failed. Please try again."
              onClose={handleCloseModal}
              onConfirm={handleConfirm}
            />
          ) : (
            <p className="break-all text-black">Please scan a QR code</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scan;
