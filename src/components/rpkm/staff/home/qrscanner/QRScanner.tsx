'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Html5Qrcode } from 'html5-qrcode';
import './style.css';
interface ScanProps {
  sendCheckInRequest: (
    mode: 'userId' | 'studentId',
    id: string
  ) => Promise<void>;
}

const id = 'reader';

const Scan = ({ sendCheckInRequest }: ScanProps) => {
  useEffect(() => {
    const reader = new Html5Qrcode(id);
    reader
      .start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 500, height: 500 },
          aspectRatio: 1,
        },
        (decodedText) => {
          if (localStorage.getItem('enable') === 'false') return;
          sendCheckInRequest('userId', decodedText);
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      )
      .then(() => {
        reader.applyVideoConstraints({
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          advanced: [{ zoom: 2.5, focusMode: 'continuous' } as any],
        });
      });

    return () => reader.clear();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full h-full">
        <div
          id={id}
          className="w-full aspect-auto"
        ></div>

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
