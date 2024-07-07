'use client';
import Border from '@/components/Border';
import TwoCircleMenu from '@/components/TwoCircleMenu';
import Mode from '@/components/staff/home/Mode';
import PinGroup from '@/components/staff/home/otp/PinGroup';
import { useCallback, useState } from 'react';

export default function Staff() {
  const [isQrPage, setIsQrPage] = useState<boolean>(true);

  const handleClick = useCallback((value: boolean) => {
    setIsQrPage(() => value);
  }, []);

  return (
    <main className="w-full h-screen flex justify-center bg-2 p-5">
      <Border variant="white">
        <section className="font-season italic text-4xl grid place-items-center py-8">
          <h1>Welcome,</h1>
          <h1>Staff</h1>
        </section>
        <section className="pb-3 w-full h-7 rounded-3xl bg-black flex justify-between">
          <Mode
            message="QR-Reader"
            reference={true}
            status={isQrPage}
            handleClick={handleClick}
          />
          <Mode
            message="OTP"
            reference={false}
            status={isQrPage}
            handleClick={handleClick}
          />
        </section>
        {isQrPage ? <></> : <PinGroup />}
      </Border>
      <TwoCircleMenu />
    </main>
  );
}
