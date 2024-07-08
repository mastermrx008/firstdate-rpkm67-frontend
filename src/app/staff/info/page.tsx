'use client';
import Border from '@/components/Border';
import FDLogo from '@public/FIrst Date Logo.svg';
import placeholder from '../../../../public/placeholder.svg';
import Image from 'next/image';
import TwoCircleMenu from '@/components/TwoCircleMenu';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function AdminInfo() {
  const [activeIcon, setActiveIcon] = useState<'profile' | 'home'>('profile');
  const { user, logout } = useAuth();
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <Border
        variant="light-pink"
        className="flex flex-col"
      >
        <Image
          src={FDLogo}
          alt="logo"
          className="w-44 mt-5 mb-5"
        />
        <div className="w-36 h-48 rounded-t-full bg-white drop-shadow-xl flex items-center justify-center">
          <Image
            src={user?.photoUrl || placeholder}
            alt="profile"
            className="w-full p-1"
          />
        </div>

        <div className="flex justify-center items-center text-2xl gap-2 font-semibold mt-4">
          <div>{user?.firstname}</div>
          <div>#{user?.year}</div>
          <div>{user?.faculty}</div>
        </div>
        <div className="text-lg mt-2 text-gray-500">
          {user?.email.split('@')[0]}
        </div>
        <div className="mt-2 w-36 font-medium text-black rounded-3xl border border-black bg-white flex justify-center items-center gap-2">
          <div>{user?.title}</div>
        </div>
      </Border>
      <div className="absolute bottom-28 flex flex-col items-center">
        <Icon
          icon="humbleicons:logout"
          className="w-12 h-12 p-3 rounded-full bg-white text-black shadow-lg"
          onClick={() => {
            logout();
          }}
        />
        <span className="font-athiti font-medium">ออกจากระบบ</span>
      </div>
      <TwoCircleMenu
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        hrefs={{
          profile: '/staff/firstdate/profile',
          home: '/staff/firstdate/home',
        }}
      />
    </main>
  );
}
