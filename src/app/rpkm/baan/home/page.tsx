'use client';

import UserCard from '@/components/UserCard';
import React from 'react';
import logo from '@public/rpkm/baan/home/logo.svg';
import Image from 'next/image';
import GroupFinder from '@/components/rpkm/group-finder/GroupFinder';
import BaanSelect from '@/components/rpkm/Baan/BaanSelect';
import { useBaan } from '@/context/BaanContext';

const page = () => {
  const { isConfirmed } = useBaan();

  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col items-center justify-center px-[5%] pb-[20%]">
        <div className="w-[60vw] mx-auto -mb-[30vw]">
          <Image
            src={logo}
            alt="logo"
            width={307}
            height={366}
            className="w-full"
          />
          <div className="flex flex-col items-center -translate-y-[30vw] -space-y-[15vw]">
            <h1
              className="font-sopha text-[25vw] text-project-yellow tracking-[2vw]"
              style={{
                textShadow:
                  '1.5px 1.5px 0 #183F86, -1.5px -1.5px 0 #183F86, 1.5px -1.5px 0 #183F86, -1.5px 1.5px 0 #183F86',
              }}
            >
              รับเพื่อน
            </h1>
            <h2
              className="font-sopha text-[14vw] text-project-yellow tracking-[1vw]"
              style={{
                textShadow:
                  '1.5px 1.5px 0 #183F86, -1.5px -1.5px 0 #183F86, 1.5px -1.5px 0 #183F86, -1.5px 1.5px 0 #183F86',
              }}
            >
              ก้าวใหม่
            </h2>
            <h2
              className="font-sopha text-[20vw] text-rpkm-red"
              style={{
                textShadow:
                  '1.5px 1.5px 0 #EAE3C3, -1.5px -1.5px 0 #EAE3C3, 1.5px -1.5px 0 #EAE3C3, -1.5px 1.5px 0 #EAE3C3',
              }}
            >
              67
            </h2>
          </div>
        </div>
        <UserCard />
        <div className="mt-[10vw] w-full">
          <BaanSelect mode="select" />
        </div>
        <div className='w-full mt-[15vw]'>{!isConfirmed && <GroupFinder />}</div>
      </div>
    </main>
  );
};

export default page;
