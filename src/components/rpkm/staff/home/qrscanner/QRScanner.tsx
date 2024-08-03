'use client';
import React from 'react';
import { QrReader } from 'react-qr-reader';
import { motion } from 'framer-motion';

interface ScanProps {
  sendCheckInRequest: (
    mode: 'userId' | 'studentId',
    id: string
  ) => Promise<void>;
}

const Scan = ({ sendCheckInRequest }: ScanProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScanResult = (scanRawData: any) => {
    if (!scanRawData || !scanRawData.text) {
      return;
    }
    sendCheckInRequest('userId', scanRawData.text);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full h-full">
        <div className="overflow-hidden aspect-square">
          <QrReader
            scanDelay={0}
            className="bg-black w-[100vw] aspect-square -mt-[13vw] -ml-[14vw]"
            onResult={handleScanResult}
            constraints={{ facingMode: 'environment' }}
          />
        </div>

        <motion.div
          className="absolute left-1/2 top-1/2 h-[50vw] w-[50vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-3xl border-4 border-white"
          animate={{ opacity: [0.25, 0.5, 1, 0.5, 0.25] }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
      </div>
      <div className="flex w-full items-center justify-center bg-black">
        <div className="w-full bg-white text-center">
          <p className="break-all text-black pt-2">Please scan a QR code</p>
        </div>
      </div>
    </div>
  );
};

export default Scan;
