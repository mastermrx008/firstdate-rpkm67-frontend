import React from 'react';
import Image from 'next/image';

interface BaanEditButtonProps {
  onClick: () => void;
}

const BaanEditButton: React.FC<BaanEditButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        'flex items-center justify-center w-28 h-10 inv-rad inv-rad-2 border-8 border-rpkm-cream'
      }
    >
      <div
        className={
          'flex items-center justify-center space-x-1 bg-rpkm-red text-rpkm-cream text-lg w-44 h-8 inv-rad inv-rad-1'
        }
      >
        <Image
          src="/select/icon/edit.svg"
          alt="แก้ไข"
          width={20}
          height={20}
        />
        <span>แก้ไข</span>
      </div>
    </button>
  );
};

export default BaanEditButton;
