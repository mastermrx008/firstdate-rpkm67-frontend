'use client';
import Border from '@/components/Border';
import FDLogo from '@public/FIrst Date Logo.svg';
import MapImage from '@public/map.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Map() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <Border
        variant="white"
        className="gap-4 !pb-[30%]"
      >
        <div className="flex w-full justify-center">
          <Image
            src={FDLogo}
            alt="logo"
            className="w-44"
          />
        </div>
        <div className="font-season italic text-2xl">Map</div>

        <Image
          src={MapImage}
          alt="map"
          className="w-full aspect-[274/342] object-cover"
        />

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
    </main>
  );
}
