import React, { ReactNode } from 'react';

import background from '@public/rpkm/freshy-night/background/bg.svg';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: '100%',
      }}
      className='bg-rpkm-cream'
    >
      {children}
    </div>
  );
};

export default layout;
