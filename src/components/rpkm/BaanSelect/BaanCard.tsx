import React from 'react';
import Image from 'next/image';

interface BaanCardProps {
  number: number;
  imageSrc: string;
  title: string;
}

const BaanCard: React.FC<BaanCardProps> = ({ number, imageSrc, title }) => {
  return (
    <div className="relative flex flex-col items-center px-1 bg-white w-20 h-28">
      <div className="absolute -top-3 flex items-center justify-center w-8 h-8">
        <Image
          src={`/select/star/${number}.svg`}
          alt={title}
          width={32}
          height={32}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-1">
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className="max-h-20"
        />
        <span className="text-sm font-normal">{title}</span>
      </div>
    </div>
  );
};

export default BaanCard;
