'use client';

import UserCard from '@/components/UserCard';
import React from 'react';
import logo from '@public/rpkm/baan/home/logo.svg';
import Image from 'next/image';
import GroupFinder from '@/components/rpkm/group-finder/GroupFinder';
import BaanSelect from '@/components/rpkm/Baan/BaanSelect';

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col items-center justify-center gap-8 px-[10%] pb-[20%]">
        <div className="w-[70%] mx-auto">
          <Image
            src={logo}
            alt="logo"
            width={307}
            height={366}
            className="w-full"
          />
        </div>
        <UserCard />
        <BaanSelect mode="select" />
        <GroupFinder />
      </div>
    </main>
  );
};

export default page;
