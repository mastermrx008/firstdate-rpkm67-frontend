import React from 'react';
import Image from 'next/image';

interface StampCheckBoxProps {
  text: string;
  stampImage?: string;
  onChecked?: boolean;
}

const StampCheckBox: React.FC<StampCheckBoxProps> = ({ text, stampImage }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-1">
      {stampImage ? (
        <Image
          src={stampImage}
          alt="Stamp"
          className="w-12 h-12"
        />
      ) : (
        <div className="w-10 h-10 bg-white"></div>
      )}
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default StampCheckBox;
