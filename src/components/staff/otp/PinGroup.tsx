'use client';
import Pin from './utils/Pin';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import line from '@/assets/line.svg';
import { PinDTO } from '@/dtos/pinDTO';
import { getAllPins, resetPin } from '@/utils/pin';

export default function PinGroup() {
  const [pins, setPins] = useState<PinDTO[] | null>(null);

  useEffect(() => {
    const fetchUserEstamp = async (): Promise<void> => {
      const pins = await getAllPins();
      setPins(pins ?? null);
    };

    fetchUserEstamp();
  }, []);

  const handleReset = async (ind: number) => {
    if (!pins) return;
    const status = await resetPin(pins[ind].activity_id);
    let updatedPins: PinDTO[] | null = null;
    if (status) {
      updatedPins = await getAllPins();
    }
    setPins(updatedPins);
  };

  return (
    <section className="py-3 w-full">
      <div className="py-3 flex flex-col justify-center items-center">
        <h1 className="font-season italic text-xl">Workshop</h1>
        <Image
          src={line}
          alt="line"
        />
      </div>
      <div className="relative group cursor-pointer w-full h-3/5 z-50">
        <div className="absolute -inset-1 bg-gray-300 rounded-lg blur" />
        <div className="relative px-7 py-6 bg-white h-full ring-1 overflow-scroll ring-gray-900/5 rounded-lg flex flex-col items-center">
          {pins ? (
            pins.map((data: PinDTO, index: number) => (
              <>
                <Pin
                  key={index}
                  otp={data}
                  index={index}
                  handleClick={handleReset}
                />
                {index !== 8 && <hr className="w-4/5" />}
              </>
            ))
          ) : (
            <h1 className="font-season font-bold text-2xl">No Data</h1>
          )}
        </div>
      </div>
    </section>
  );
}
