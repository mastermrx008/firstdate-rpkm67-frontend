'use client';
import Border from '@/components/Border';
import TwoCircleMenu from '@/components/TwoCircleMenu';
import PinGroup from '@/components/staff/otp/PinGroup';
import { useState } from 'react';

export default function Staff() {
  const [isQrCode, setIsQrCode] = useState<boolean>(true);
  return (
    <main className="w-full h-screen flex justify-center bg-2">
      <Border variant="white">
        <section className="font-season italic text-5xl grid place-items-center">
          <h1>Welcome,</h1>
          <h1>Staff</h1>
        </section>
        {isQrCode ? <></> : <PinGroup />}
        <PinGroup />
      </Border>
      <TwoCircleMenu />
    </main>
  );
}
