import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <div className="w-full h-[63px] bg-[#313131] flex justify-between items-center px-5">
        <button
          className="w-[28px] h-[26px] bg-white flex flex-col justify-evenly items-center"
          onClick={() => setSidebar(true)}
        >
          <div className="w-[16px] h-[2.6px] bg-black" />
          <div className="w-[16px] h-[2.6px] bg-black" />
          <div className="w-[16px] h-[2.6px] bg-black" />
        </button>
        <div className="w-[155px] h-[28px] flex justify-between text-xl text-[#EAE3C3]">
          <div>จับคู่</div>
          <div className="w-[1px] h-full bg-[#EAE3C3]" />
          <div>การจัดอันดับ</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
