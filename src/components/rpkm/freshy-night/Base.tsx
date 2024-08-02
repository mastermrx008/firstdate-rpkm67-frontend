import { cn } from '@/lib/utils';
import border from '@public/rpkm/freshy-night/border.svg';
import Image from 'next/image';
import NEWSPAPER from '@public/rpkm/freshy-night/newspaper.svg';
import NEWSPAPER_1 from '@public/rpkm/freshy-night/newspaper_1.svg';
import BUS_LEFT from '@public/rpkm/freshy-night/truck_left.svg';
import BUS_RIGHT from '@public/rpkm/freshy-night/truck_right.svg';

interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  withBus: boolean;
}

export default function Base(props: BaseProps) {
  const { className, children, withBus } = props;
  return (
    <>
      <div
        className={cn(
          'bg-[#FFFEF7E5] flex flex-col items-center w-[85%] min-h-[calc(70vw*(801/371))] my-[5%] p-[10%] mx-auto [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)]',
          className
        )}
      >
        {children}
      </div>
      {withBus && (
        <>
          <div className="absolute bottom-20 left-6 md:hidden">
            <Image
              src={NEWSPAPER_1}
              alt="newspaper_1"
              width={80}
              height={60}
            />
          </div>
          <div className="absolute bottom-0 left-0 md:hidden">
            <Image
              src={BUS_LEFT}
              alt="left_bus"
              width={130}
              height={100}
            />
          </div>
          <div className="absolute bottom-0 right-0 md:hidden">
            <Image
              src={BUS_RIGHT}
              alt="left_bus"
              width={130}
              height={85}
            />
          </div>
          <div className="absolute bottom-[90px] right-6 md:hidden">
            <Image
              src={NEWSPAPER}
              alt="man_newspaper"
              width={90}
              height={100}
            />
          </div>
        </>
      )}
    </>
  );
}
