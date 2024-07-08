'use client';
import Border from '@/components/Border';
import FDLogo from '@public/FIrst Date Logo.svg';
import line from '../../../public/line.png';
import gift from '../../../public/gift.svg';
import Image from 'next/image';
import TwoCircleMenu from '@/components/TwoCircleMenu';
import Link from 'next/link';
import React, { useState } from 'react';
import ConfirmationModal from '../../components/confirmationModal';
import { useRouter } from 'next/navigation';

export default function Reward() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    router.push('/rewarddone');
  };
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <Border
        variant="white-brown"
        className="flex flex-col"
      >
        <Image
          src={FDLogo}
          alt="logo"
          className="w-44 mb-2"
        />
        <h1 className="text-3xl text-center font-semibold text-project-light-gray mb-1">
          แลกรับของรางวัล
        </h1>{' '}
        <h1 className="text-xl text-center font-semibold text-project-light-gray mb-3">
          กรุณาแสดงหน้านี้กับเจ้าหน้าที่
        </h1>
        <div className="border border-black rounded-2xl w-60 h-48"></div>
        <h1 className="text-center font-bold text-xs mt-2">
          รายละเอียด เงื่อนไขต่างๆ
        </h1>
        <div className="text-center font-semibold text-xs mt-1 mx-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          placeat?
        </div>
        <h1 className="text-center font-bold text-xs mt-2">สถานที่รับรางวัล</h1>
        <div className="text-center font-semibold text-xs mt-1 mx-5">
          Lorem ipsum dolor
        </div>
        <Image
          src={line}
          alt="Line"
          className="w-56 h-3 mb-3"
        />
        <h1 className="text-center font-semibold text-project-fuchsia">
          *สำหรับเจ้าหน้าที่
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          // href="rewarddone"
          className="mt-3 w-64 h-12 font-medium text-white text-xl rounded-lg bg-project-fuchsia flex justify-center items-center"
        >
          <Image
            src={gift}
            alt="gift"
            className="mr-2 w-6 h-6"
          />
          แลกรับเลย!
        </button>
        <Link
          href=""
          className="mt-4 w-64 h-12 font-medium text-black text-xl rounded-lg border-black border flex justify-center items-center"
        >
          กลับ
        </Link>
        <ConfirmationModal
          isOpen={isOpen}
          title="ยืนยันการแลกรับของรางวัล"
          message="ยืนยันการแลกรับของรางวัล"
          onConfirm={handleClick}
          onClose={() => setIsOpen(false)}
        />
      </Border>
      <TwoCircleMenu />
    </main>
  );
}
