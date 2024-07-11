import React from 'react';
import background from '@public/bar/sidebar-background.svg';
import UserInfo from './Sidebar/UserInfo';
function Sidebar() {
  return (
    <div className="z-10 w-full h-full absolute flex top-0">
      <div className="w-full h-full fixed" />
      <div
        className="w-[30.51vh] h-screen bg-contain bg-no-repeat opacity-100 z-10 flex justify-items-center justify-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="w-10/12  flex flex-col justify-items-center items-center pt-[11vh]">
          <UserInfo />
          <div className='w-full text-left text-[1.88vh] font-medium'>
            <h1>ลงทะเบียนเลือกบ้าน</h1>
            <h1>ลงทะเบียน Freshy Night</h1>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
