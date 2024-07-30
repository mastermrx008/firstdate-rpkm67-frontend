import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface CardProps {
  name: string;
  image: string;
  imageWidth?: string;
  imageHeight?: string;
  imageClassName?: string;
  description: string;
  href: string;
  className?: string;
  contentClassName?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  className,
  image,
  imageWidth,
  imageHeight,
  imageClassName,
  href,
  description,
  contentClassName,
}) => {
  return (
    <div className="drop-shadow-lg">
      <div
        className={cn(
          'bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131]',
          className
        )}
      >
        <p className="font-semibold text-center w-full">{name}</p>
        <div className="flex justify-center">
          <Image
            src={image}
            alt="activity image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: imageWidth ? imageWidth : '60vw',
              height: imageHeight ? imageHeight : '60vw',
            }}
            className={cn('w-full object-cover', imageClassName)}
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-y-[2px] mt-1">
          <hr className="h-[2px] bg-[#414643] w-full" />
          <hr className="h-[2px] bg-[#414643] w-full" />
        </div>
        <p className={cn('text-sm m-2', contentClassName)}>{description}</p>
        <Link
          className="flex w-full justify-end text-sm font-semibold underline"
          href={href}
        >
          ดูทั้งหมด
        </Link>
      </div>
    </div>
  );
};

export default Card;
