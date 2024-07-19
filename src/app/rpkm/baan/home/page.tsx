'use client';

import UserCard from '@/components/UserCard';
import React, { useEffect } from 'react';
import logo from '@public/rpkm/baan/home/logo.svg';
import Image from 'next/image';
import GroupFinder from '@/components/rpkm/group-finder/GroupFinder';
import BaanSelect from '@/components/rpkm/Baan/BaanSelect';
import { useSearchParams } from 'next/navigation';

const page = () => {
  const searchParams = useSearchParams()
  const initToken = searchParams.get("token") ?? undefined
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
        <GroupFinder groupToken={initToken}/>
      </div>
    </main>
  );
};

export default page;
