'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/rpkm/Sidebar';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import personIcon from '@public/rpkm/staff/person-icon.svg';
import { useAuth } from '@/context/AuthContext';

function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const { user } = useAuth();
  const currentPath = usePathname();
  const [content, setContent] = useState<JSX.Element>(
    <div className="w-[155px] h-7 flex justify-between text-xl text-rpkm-cream">
      <div>จับคู่</div>
      <div className="w-[1px] h-full bg-rpkm-cream" />
      <div>การจัดอันดับ</div>
    </div>
  );
  useEffect(() => {
    if (currentPath.startsWith('/rpkm/activities'))
      setContent(
        <div className="font-sopha absolute text-project-cream text-3xl text-center left-1/2 -translate-x-1/2">
          รับเพื่อนก้าวใหม่ 67
        </div>
      );
    if (currentPath.startsWith('/rpkm/staff/home'))
      setContent(
        <Link
          href="/rpkm/staff/profile"
          className="w-11 h-11 rounded-full bg-white flex justify-center  items-center"
        >
          <Image
            src={personIcon.src}
            width="16"
            height="16"
            alt="person-icon"
            className="invert-[.8] sepia-[.2]"
          />
        </Link>
      );
    if (currentPath.startsWith('/rpkm/staff/profile'))
      setContent(
        <Link
          href="/rpkm/staff/home"
          className="w-11 h-11 rounded-full bg-white flex justify-center  items-center"
        >
          <Icon
            icon="material-symbols:home"
            className="w-[6vw] h-[6vw]"
          />
        </Link>
      );
  }, [currentPath]);

  return (
    <div className="z-10 relative w-full">
      <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <div className="w-full h-16 bg-rpkm-gray flex items-center px-5 relative justify-between">
        {user?.role === 'user' && (
          <button
            className="w-7 h-6 bg-white flex flex-col justify-evenly items-center"
            onClick={() => setSidebar(true)}
          >
            <Icon
              icon="cil:hamburger-menu"
              width="20px"
              height="20px"
            />
          </button>
        )}
        {content}
      </div>
    </div>
  );
}

export default Navbar;
