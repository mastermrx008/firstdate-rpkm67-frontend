import { cn } from '@/lib/utils';
import border from '@public/rpkm/freshy-night/border.svg';
interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Base(props: BaseProps) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        'flex flex-col items-center w-[85%] min-h-[calc(70vw*(801/371))] my-[5%] p-[10%] mx-auto [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)]',
        className
      )}
      style={{
        backgroundImage: `url(${border.src})`,
      }}
    >
      {children}
    </div>
  );
}
