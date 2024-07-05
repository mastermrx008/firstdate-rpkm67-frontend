import React from 'react';
import Image from 'next/image';

interface StampCheckBoxProps {
  text: string;
  stampImage: string;
  collected?: boolean;
}

const StampCheckBox: React.FC<StampCheckBoxProps> = ({
  text,
  stampImage,
  collected,
}) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      {collected ? (
        <Image
          src={stampImage}
          alt="Stamp"
        />
      ) : (
        <div className="w-14 h-14 bg-white shadow-md"></div>
      )}
      <p className="text-[0.55rem] max-w-16 text-center">{text}</p>
    </div>
  );
};

export default StampCheckBox;
