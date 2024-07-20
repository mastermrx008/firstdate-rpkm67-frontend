'use client';

import Link from 'next/link';
import React from 'react';
import backIcon from '@public/rpkm/backIcon.svg';
import Image from 'next/image';

const BackToHomeBtn = () => {
  return (
    <div className="bg-rpkm-cream rounded-full w-[10vw] p-[2vw] aspect-square shadow-lg">
      <Link href={'/rpkm/baan/home'}>
        <Image
          src={backIcon}
          alt="back-icon"
          className="w-full"
        />
      </Link>
    </div>
  );
};

export default BackToHomeBtn;
