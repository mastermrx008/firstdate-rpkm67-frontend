'use client';
import FDLogo from '@public/FIrst Date Logo.svg';
import MapImage from '@public/mapPR.png';
import Image from 'next/image';
import Border from '@/components/firstdate/Border';
import Zoom from "next-image-zoom";
import Link from 'next/link';

export default function Map() {
  return (
    <Border
      variant="white"
      className="gap-4 pt-[5%] pb-[30%] px-[8%] justify-between"
    >
      <div className='flex flex-col gap-4'>
        <div className="flex w-full justify-center">
          <Image
            src={FDLogo}
            alt="logo"
            className="w-44"
          />
        </div>
        <div className="font-season italic text-2xl text-center">Map</div>
      </div>

      <div className='flex w-full items-center'>
        <Zoom src={MapImage} alt='map' className='object-cover w-full aspect-[1524/1080]'>
        </Zoom>
      </div>

      <Link
        href="/firstdate/profile"
        className="w-3/4 h-12 font-medium text-black text-xl rounded-lg border-black border flex justify-center items-center"
      >
        กลับ
      </Link>
    </Border>
  );
}
