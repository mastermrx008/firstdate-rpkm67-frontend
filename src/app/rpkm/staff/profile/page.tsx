'use client';
import React from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import placeholder from '@public/placeholder.svg';
import { Icon } from '@iconify/react/dist/iconify.js';
import Navbar from '@/components/rpkm/Navbar';
function Page() {
  const { user, logout } = useAuth();
  return (
    <div className="bg-[#EAE3C3] h-screen">
      <div className="bg-[url('/rpkm/staff/background.svg')] w-full h-full bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-row justify-items-center justify-center w-full h-[90%] py-6 overflow-hidden">
          <div className="[clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col justify-items-center items-center bg-[#FFFEF7E5] w-11/12 gap-y-10">
            <div
              className="font-sopha text-8xl text-[#EB9096]"
              style={{
                textShadow:
                  '-1px 1px 0 #183F86, 1px 1px 0 #183F86, 1px -1px 0 #183F86, -1px -1px 0 #183F86',
              }}
            >
              สตาฟ
            </div>
            <div className="relative w-32 h-44 rounded-t-full overflow-hidden p-1">
              <Image
                src={user?.photoUrl || placeholder.src}
                alt="profile picture"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-y-2 justify-items-center items-center">
              <div className="flex gap-x-4">
                <h1 className="text-2xl font-semibold text-center text-black">
                  {user?.firstname} {user?.lastname} #{user?.year}
                </h1>
                <h1 className="text-2xl font-semibold text-center text-black">
                  {user?.faculty}
                </h1>
              </div>
              <h1 className="text-base font-normal text-[#8D8D8D]">
                {user?.email.split('@')[0]}
              </h1>
            </div>
            <div className="absolute bottom-[min(12vh,112px)] flex flex-col items-center">
              <Icon
                icon="humbleicons:logout"
                className="cursor-pointer w-12 h-12 p-3 rounded-full bg-white text-black shadow-lg"
                onClick={() => {
                  logout();
                }}
              />
              <span className="font-athiti font-medium">ออกจากระบบ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
