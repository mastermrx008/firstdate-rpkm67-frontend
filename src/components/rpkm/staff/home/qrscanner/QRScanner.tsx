'use client';
import React, { ReactNode, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import ConfirmationModal from './confirmationModal';
import FailureModal from './failureModal';
import { createCheckIn } from '@/utils/checkin';
import { CheckIn } from '@/types/checkIn';
import dayjs from 'dayjs';

function Scan() {
  const [checkInData, setCheckInData] = useState<CheckIn | null>(null);
  const [taken, setTaken] = useState<boolean>(false);
  const [status, setStatus] = useState<'success' | 'error' | 'idle'>('idle');
  const { user } = useAuth();
  const [error, setError] = useState<string | ReactNode>('');
  const [errorTopic, setErrorTopic] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScanResult = async (scanRawData: any) => {
    if (!scanRawData || !user) {
      return;
    }

    const userId = scanRawData.text;
    const newCheckInData: CheckIn | null = await createCheckIn(
      userId,
      user.email,
      'firstdate'
    );

    if (newCheckInData) {
      if (newCheckInData.checkIn.isDuplicate) {
        const date = dayjs(newCheckInData.checkIn.timestamp);
        setStatus('error');
        setError(
          <div>
            ผู้ใช้สแกน QR-code นี้แล้ว
            <br />
            {`เมื่อเวลา ${date.format('HH:mm')} น.`}
          </div>
        );
        setErrorTopic('Already taken!');
        setTaken(true);
        return;
      }

      setCheckInData(newCheckInData);
      setStatus('success');
    } else {
      setStatus('error');
      setError('แสกนไม่สำเร็จ โปรดลองอีกครั้ง');
      setErrorTopic('Invalid QR-code');
      setTaken(false);
    }
  };

  const handleCloseModal = () => {
    setStatus('idle');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full h-full">
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
      </div>
      <div className="flex w-full items-center justify-center bg-black">
        <div className="w-full bg-white text-center">
          <ConfirmationModal
            isOpen={status == 'success'}
            userData={checkInData}
            message="The check-in was successful."
            onClose={handleCloseModal}
          />

          <FailureModal
            isOpen={status == 'error'}
            message={error}
            topic={errorTopic}
            onClose={handleCloseModal}
            taken={taken}
          />

          {status == 'idle' && (
            <p className="break-all text-black pt-2">Please scan a QR code</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scan;
