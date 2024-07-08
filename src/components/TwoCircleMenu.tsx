'use client';
import { useAuth } from '@/context/AuthContext';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TwoCircleMenu() {
  const { user } = useAuth();
  const router = useRouter();
  const [profileActive, setProfileActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string>('');

  const handleNavigate = (path: string) => {
    router.push(`${user?.role === 'staff' ? '/staff' : ''}${path}`);
    setSelectedPath(path);
  };

  const handleClick = (iconName: 'home' | 'profile') => {
    setProfileActive(iconName === 'profile');
    setHomeActive(iconName === 'home');
  };

  return (
    <div>
      <div className="absolute top-6 right-4 flex flex-col items-center">
        <Icon
          icon="icon-park-solid:people"
          className={`w-11 h-11 p-3 rounded-full ${
            profileActive
              ? 'bg-project-fuchsia text-white'
              : 'bg-white text-black'
          }`}
          onClick={() => {
            handleClick('profile');
            handleNavigate('/firstdate/profile');
          }}
        />
        <span className="font-athiti font-medium">โปรไฟล์</span>
      </div>
      <div className="absolute top-6 left-4 flex flex-col items-center">
        <Icon
          icon="icon-park-solid:home"
          className={`w-11 h-11 p-3 rounded-full ${
            homeActive ? 'bg-project-fuchsia text-white' : 'bg-white text-black'
          }`}
          onClick={() => {
            handleClick('home');
            handleNavigate('/firstdate/home');
          }}
        />
        <span className="font-athiti font-medium">หน้าหลัก</span>
      </div>
    </div>
  );
}
