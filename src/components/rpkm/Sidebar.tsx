import React from 'react';
import background from '@public/bar/sidebar-background.svg';
import UserInfo from '@/components/rpkm/Sidebar/UserInfo';
import crossIcon from '@public/bar/icon/cross.svg';
import Image from 'next/image';
import Menu from '@/components/rpkm/Sidebar/Menu';

interface SidebarProps {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ sidebar, setSidebar }) => {
  if (!sidebar) return null;
  return (
    <div className="z-10 w-full h-full absolute flex top-0">
      <div
        className="w-full h-full fixed"
        onClick={() => setSidebar(false)}
      />
      <div
        className="w-[30.51vh] h-screen bg-contain bg-no-repeat opacity-100 z-10 flex justify-items-center justify-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="w-10/12  flex flex-col justify-items-center items-center pt-[11vh]">
          <div className="flex flex-col items-center text-center w-full relative">
            <button
              className="w-[2.82vh] h-[2.82vh] absolute top-0 right-0 flex items-center justify-center z-10"
              onClick={() => setSidebar(false)}
            >
              <Image
                src={crossIcon}
                alt="cross"
                width={10}
                height={10}
                style={{ width: '1.76vh', height: '1.76vh' }}
              />
            </button>
            <UserInfo />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
