'use client';
import { OtpPin } from '@/types/staff/pins';
import Pin from './Pin';
import { useState } from 'react';

const testData: OtpPin[] = [
  { activity_id: 'workshop-1', code: '101186' },
  { activity_id: 'workshop-2', code: '222222' },
  { activity_id: 'workshop-3', code: '333333' },
  { activity_id: 'workshop-4', code: '444444' },
  { activity_id: 'workshop-5', code: '555555' },
];

export default function PinGroup() {
  const [pins, setPins] = useState<OtpPin[]>(testData);
  return (
    <section className="relative group cursor-pointer w-full">
      <div className="absolute -inset-1 bg-gray-300 rounded-lg blur"></div>
      <div className="relative px-7 py-6 bg-white h-full ring-1 ring-gray-900/5 rounded-lg flex flex-col items-center justify-center">
        {pins.map((data: OtpPin, index: number) => (
          <>
            <Pin
              key={index}
              otp={data}
              index={index}
            />
            <hr className="w-3/5" />
          </>
        ))}
      </div>
    </section>
  );
}
