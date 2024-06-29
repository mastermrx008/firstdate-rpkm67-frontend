'use client';
import Border from '@/components/Border';
import FDLogo from '@public/FIrst Date Logo.svg';
import line from '../../../public/line.png';
import Image from 'next/image';
import TwoCircleMenu from '@/components/TwoCircleMenu';
import Link from 'next/link';
import React, { useState } from 'react';
import ConfirmationModal from '../../components/confirmationModal'; // Adjust the path accordingly
import { useRouter } from 'next/navigation';

export default function Map() {
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M11.25 3V7.046C10.6866 6.50687 9.9355 6.20827 9.15575 6.21348C8.376 6.21869 7.62892 6.5273 7.07282 7.07392C6.51671 7.62053 6.19529 8.36219 6.17666 9.14173C6.15802 9.92128 6.44365 10.6774 6.973 11.25H1.5V5.25C1.5 4.65326 1.73705 4.08097 2.15901 3.65901C2.58097 3.23705 3.15326 3 3.75 3H11.25ZM12.75 3V7.011C13.3196 6.48675 14.0698 6.20297 14.8438 6.21901C15.6178 6.23504 16.3556 6.54964 16.903 7.09704C17.4504 7.64444 17.765 8.38225 17.781 9.15622C17.797 9.93019 17.5133 10.6804 16.989 11.25H22.5V5.25C22.5 4.65326 22.2629 4.08097 21.841 3.65901C21.419 3.23705 20.8467 3 20.25 3H12.75ZM22.5 12.75H13.517C13.6106 13.7749 14.0838 14.7277 14.8439 15.4215C15.6039 16.1154 16.5959 16.5 17.625 16.5C17.8239 16.5 18.0147 16.579 18.1553 16.7197C18.296 16.8603 18.375 17.0511 18.375 17.25C18.375 17.4489 18.296 17.6397 18.1553 17.7803C18.0147 17.921 17.8239 18 17.625 18C16.6365 18.0007 15.6652 17.7406 14.8093 17.246C13.9534 16.7514 13.243 16.0398 12.75 15.183V21H20.25C20.8467 21 21.419 20.7629 21.841 20.341C22.2629 19.919 22.5 19.3467 22.5 18.75V12.75ZM11.25 21V15.183C10.757 16.0398 10.0466 16.7514 9.19071 17.246C8.33479 17.7406 7.36355 18.0007 6.375 18C6.17609 18 5.98532 17.921 5.84467 17.7803C5.70402 17.6397 5.625 17.4489 5.625 17.25C5.625 17.0511 5.70402 16.8603 5.84467 16.7197C5.98532 16.579 6.17609 16.5 6.375 16.5C7.40405 16.4998 8.39588 16.1151 9.15589 15.4213C9.9159 14.7275 10.3892 13.7748 10.483 12.75H1.5V18.75C1.5 19.3467 1.73705 19.919 2.15901 20.341C2.58097 20.7629 3.15326 21 3.75 21H11.25Z"
              fill="white"
            />
            <path
              d="M11.086 10.354C11.116 10.651 11.123 10.929 11.121 11.159C10.8522 11.1605 10.5836 11.1485 10.316 11.123C9.483 11.039 8.639 10.798 8.121 10.28C7.84789 9.99697 7.69688 9.61799 7.70048 9.2247C7.70408 8.8314 7.86201 8.45526 8.14026 8.17727C8.4185 7.89929 8.7948 7.74172 9.1881 7.73848C9.58139 7.73525 9.96023 7.88663 10.243 8.16C10.76 8.677 11.002 9.52 11.085 10.354M12.877 10.354C12.847 10.651 12.839 10.929 12.841 11.159C13.071 11.161 13.349 11.153 13.646 11.123C14.479 11.039 15.323 10.798 15.841 10.28C16.1093 9.99617 16.2564 9.61885 16.2509 9.22829C16.2453 8.83773 16.0877 8.46472 15.8114 8.18859C15.5352 7.91246 15.1621 7.75498 14.7715 7.74964C14.381 7.7443 14.0037 7.89152 13.72 8.16C13.202 8.678 12.96 9.522 12.877 10.354Z"
              fill="white"
            />
          </svg>
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
