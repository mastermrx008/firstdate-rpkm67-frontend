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
        'flex flex-col items-center w-[85%] min-h-[calc(70vw*(801/371))] my-[5%] p-[10%] mx-auto',
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
