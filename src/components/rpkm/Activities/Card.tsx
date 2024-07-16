import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  image: StaticImageData;
  imageClassName?: string;
  content: string;
  href: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  className,
  image,
  imageClassName,
  href,
  content,
}) => {
  return (
    <div className="drop-shadow-lg">
      <div
        className={cn(
          'bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131]',
          className
        )}
      >
        <p className="font-semibold text-center w-full">{title}</p>
        <Image
          src={image}
          alt="activity image"
          className={cn('w-full', imageClassName)}
        />
        <div className="flex flex-col gap-y-[2px] mt-1">
          <hr className="h-[2px] bg-[#414643] w-full" />
          <hr className="h-[2px] bg-[#414643] w-full" />
        </div>
        <p className="text-sm m-2">{content}</p>
        <a
          className="flex w-full justify-end text-sm font-semibold underline"
          href={href}
        >
          ดูทั้งหมด
        </a>
      </div>
    </div>
  );
};

export default Card;
