import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BaanCardProps {
  number: number;
  imageSrc?: string;
  title?: string;
  isEmpty?: boolean;
}

const BaanCard: React.FC<BaanCardProps> = ({
  number,
  imageSrc,
  title,
  isEmpty = false,
}) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center px-1 bg-white w-20 h-28',
        isEmpty && 'border-2 border-dashed border-green-300 bg-opacity-0'
      )}
    >
      <div className="absolute -top-3 flex items-center justify-center w-8 h-8">
        <Image
          src={`/select/star/${number}.svg`}
          alt={title ?? `Empty ${number}`}
          width={32}
          height={32}
        />
      </div>
      {!isEmpty && (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-1">
          <Image
            src={imageSrc ?? '/placeholder.png'}
            alt={title ?? `Empty ${number}`}
            width={80}
            height={80}
            className="max-h-20"
          />
          <span className="text-sm font-normal">{title}</span>
        </div>
      )}
    </div>
  );
};

export default BaanCard;
