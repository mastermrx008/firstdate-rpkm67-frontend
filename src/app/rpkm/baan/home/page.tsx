'use client';

import UserCard from '@/components/UserCard';
import React from 'react';
import GroupFinder from '@/components/rpkm/group-finder/GroupFinder';
import BaanSelect from '@/components/rpkm/Baan/BaanSelect';
import { useBaan } from '@/context/BaanContext';
import Logo from '@/components/rpkm/Baan/Logo';

const Page = () => {
  const { isConfirmed, groupData } = useBaan();

  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col items-center justify-center px-[5%] pb-[20%]">
        <Logo />
        <UserCard />
        <div className="mt-[10vw] w-full">
          <BaanSelect mode="select" />
        </div>
        <div className="w-full mt-[15vw]">
          {((groupData && groupData.members?.length > 1) || !isConfirmed) && (
            <GroupFinder />
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
