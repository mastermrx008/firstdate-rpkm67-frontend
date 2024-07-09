'use client';

import { useAuth } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import MenuIcon from './MenuIcon';

export default function TwoCircleMenu() {
  const { user } = useAuth();
  const router = useRouter();
  const currentPath = usePathname().split('/').at(-1);

  const handleNavigate = useCallback(
    (path: string): void => {
      router.push(
        `${user?.role === 'staff' ? '/staff' : ''}/firstdate/${path}`
      );
    },
    [router, user?.role]
  );

  const isPath = useCallback(
    (path: string): boolean => {
      return currentPath == path;
    },
    [currentPath]
  );

  return (
    <div>
      <div className="absolute top-6 right-4 flex flex-col items-center">
        <MenuIcon
          name="โปรไฟล์"
          isActive={isPath('profile')}
          handleOnClick={() => handleNavigate('profile')}
          iconify="icon-park-solid:people"
        />
      </div>
      <div className="absolute top-6 left-4 flex flex-col items-center">
        <MenuIcon
          name="หน้าหลัก"
          isActive={isPath('home')}
          handleOnClick={() => handleNavigate('home')}
          iconify="icon-park-solid:home"
        />
      </div>
    </div>
  );
}
