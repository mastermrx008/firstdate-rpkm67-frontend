'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import pencilIcon from '@public/bar/icon/pencil.svg';
import placeholder from '@public/placeholder.svg';
import LineIcon from '@public/LineIcon.svg';
import qrCodeIcon from '@public/home/icon/qrcode.svg';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { baanInfos } from '../Baan/baanInfos';
import { getCurrentTime } from '@/utils/time';

function UserInfo() {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const findBaan = (result: string) => {
    return baanInfos.find((baan) => baan.name.en === result);
  };

  useEffect(() => {
    const initialize = async () => {
      const now = await getCurrentTime();
      if (now) {
        setCurrentTime(now.currentTime);
      }
    };

    initialize();
  }, []);

  const isShowBaan = useMemo(() => {
    if (!user?.baan || !currentTime) {
      return false;
    }

    const annouceBaanDate = new Date(
      process.env.NEXT_PUBLIC_BAAN_ANNOUCE_DATE as string
    );
    if (currentTime >= annouceBaanDate) {
      return true;
    }

    return false;
  }, [currentTime, user?.baan]);

  if (!user) return;
  const baan = findBaan(user?.baan);

  return (
    <div className="flex flex-col items-center text-center w-full h-[38vh] self-center relative gap-y-[0.47vh]">
      <div className="relative w-[15.25vh] h-[19.59vh] rounded-t-full shadow-[0px_0px_4px_.4px_#00000036] overflow-hidden">
        <Image
          src={user?.photoUrl ? user?.photoUrl : placeholder.src}
          alt="profile picture"
          fill
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <h1 className="text-lg font-semibold text-center text-black">
        {user?.firstname} {user?.lastname}
      </h1>

      <h1 className="text-xs font-semibold text-center text-black">
        {isShowBaan &&
          baanInfos.find((baan) => baan.name.en == user?.baan)?.name.th}
      </h1>
      {isShowBaan && baan?.line ? (
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center text-xs font-semibold text-center text-black items-center w-full gap-1">
            <Image
              src={LineIcon}
              alt="lineIcon"
            />
            <div className="">line group:</div>
            <Link
              href={baan.line}
              className="text-center truncate underline underline-offset-auto decoration-from-font w-[50%]"
            >
              {baan.line}
            </Link>
          </div>
          <div className="w-[60%] h-px bg-black mt-2 mb-1"></div>
        </div>
      ) : null}
      <Link
        href={'/rpkm/edit'}
        className="flex flex-col"
      >
        <div className="flex justify-center justify-items-center items-center gap-x-0.5">
          <h1 className="text-sm font-semibold text-center text-black underline">
            แก้ไขข้อมูลส่วนตัว
          </h1>
          <Image
            src={pencilIcon}
            alt="pencil"
            width={10}
            height={10}
            style={{ width: '8px', height: '8px' }}
          />
        </div>
      </Link>
      <button
        className="w-[4.8vh] h-[4.8vh] rounded-full flex justify-center items-center shadow-[0px_3px_4px_.5px_#00000048] hover:scale-105 bg-[#F1DFC1] opacity-30"
        onClick={() => console.log('qrcode')}
      >
        <Image
          src={qrCodeIcon}
          alt="QR-Code Icon"
          style={{ width: '2.63vh', height: '2.63vh' }}
        />
      </button>
    </div>
  );
}

export default UserInfo;
