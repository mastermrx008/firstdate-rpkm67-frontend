'use client';
import Pin from './utils/Pin';
import { useState } from 'react';
import Image from 'next/image';
import line from '@/assets/line.svg';
import { PinDTO } from '@/dtos/pinDTO';

const testData: PinDTO[] = [
  { activity_id: 'workshop-1', code: '101186' },
  { activity_id: 'workshop-2', code: '222222' },
  { activity_id: 'workshop-3', code: '333333' },
  { activity_id: 'workshop-4', code: '444444' },
  { activity_id: 'workshop-5', code: '555555' },
];

function randomCode() {
  let value = '';
  for (let i = 0; i < 6; i++) {
    const rand = Math.floor(Math.random() * 10);
    value += rand;
  }
  return value;
}

export default function PinGroup() {
  const [pins, setPins] = useState<PinDTO[]>(testData);

  function handleReset(ind: number) {
    const updatedPins = [...pins];
    updatedPins[ind] = { ...updatedPins[ind], code: randomCode() };
    setPins(updatedPins);
  }

  return (
    <section className="py-3 w-full">
      <div className="py-3 flex flex-col justify-center items-center">
        <h1 className="font-season italic text-xl">Workshop</h1>
        <Image
          src={line}
          alt="line"
        />
      </div>
      <div className="relative group cursor-pointer w-full h-full">
        <div className="absolute -inset-1 bg-gray-300 rounded-lg blur"></div>
        <div className="relative px-7 py-6 bg-white h-full ring-1 ring-gray-900/5 rounded-lg flex flex-col items-center justify-center">
          {pins.map((data: PinDTO, index: number) => (
            <>
              <Pin
                key={index}
                otp={data}
                index={index}
                handleClick={handleReset}
              />
              {index !== 4 && <hr className="w-4/5" />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
