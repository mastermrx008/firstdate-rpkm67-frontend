import { Icon } from '@iconify/react/dist/iconify';
import Link from 'next/link';
import React from 'react';

const BackToHomeBtn = () => {
  return (
    <div className="bg-rpkm-cream rounded-full w-[10vw] p-[1vw] aspect-square shadow-lg">
      <Link href={'/rpkm/baan/home'}>
        <Icon
          icon="material-symbols:arrow-back"
          className="text-rpkm-blue w-full h-full"
        />
      </Link>
    </div>
  );
};

export default BackToHomeBtn;
