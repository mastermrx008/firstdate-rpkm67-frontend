import React from 'react';
import Image from 'next/image';

interface StampCheckBoxProps {
  text: string;
  stampImage: string;
  collected?: boolean;
  onClick?: () => void;
}

const StampCheckBox: React.FC<StampCheckBoxProps> = ({
  text,
  stampImage,
  collected,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col items-center space-y-1"
      onClick={onClick}
    >
      {collected ? (
        <Image
          src={stampImage}
          alt="Stamp"
          className="min-w-12 min-h-12 max-h-12 max-w-12"
        />
      ) : (
        <div className="min-w-12 min-h-12 max-h-12 max-w-12 bg-white shadow-md"></div>
      )}
      <p className="text-[0.55rem] max-w-16 text-center">{text}</p>
    </div>
  );
};

export default StampCheckBox;
