'use client'
import FDLogo from '@public/FIrst Date Logo.svg';
import MapImage from '@public/map.svg';
import Image from 'next/image';
import Border from '@/components/firstdate/Border';
import Zoom from "next-image-zoom";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Map() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const [isZoomed, setIsZoomed] = useState(false);
  const handleZoomChange = () => {
    setIsZoomed(prev => !prev)
  }

  return (
    <Border
      variant="white"
      className="gap-4 pt-[5%] px-[8%]"
    >
      <div className="flex w-full justify-center">
        <Image
          src={FDLogo}
          alt="logo"
          className="w-44"
        />
      </div>
      <div className="font-season italic text-2xl">Map</div>

      <div className='flex w-full items-center'>
        <Zoom src={MapImage} alt='map' className='object-cover'>
          {/* <Image
          src={MapImage}
          alt="map"
          className="object-cover"
        /> */}
        </Zoom>
      </div>


      <div className="font-season italic text-2xl text-center p-4 w-full bg-project-fuchsia">
        Lorem ipsum dolor sit
      </div>

      <button
        onClick={handleBack}
        className="w-3/4 h-12 font-medium text-black text-xl rounded-lg border-black border flex justify-center items-center"
      >
        กลับ
      </button>
    </Border>
  );
}
