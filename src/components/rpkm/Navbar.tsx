import React, { useState } from 'react';
import Sidebar from '@/components/rpkm/Sidebar';
import { Icon } from '@iconify/react';

function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <div className="w-full h-16 bg-[#313131] flex justify-between items-center px-5">
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
        <div className="w-[155px] h-7 flex justify-between text-xl text-[#EAE3C3]">
          <div>จับคู่</div>
          <div className="w-[1px] h-full bg-[#EAE3C3]" />
          <div>การจัดอันดับ</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
