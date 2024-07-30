import React, { ReactNode } from 'react';

import background from '@public/rpkm/freshy-night/background/bg.svg';
import Navbar from '@/components/rpkm/Navbar';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: '100%',
      }}
      className="bg-rpkm-cream overflow-hidden"
    >
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
