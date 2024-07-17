import React from 'react';

import background from '@public/rpkm/baan/background/bg.svg';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: '100%',
      }}
      className="bg-rpkm-green"
    >
      {children}
    </div>
  );
};

export default layout;
