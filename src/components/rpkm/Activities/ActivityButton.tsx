'use client';

import { cn } from '@/lib/utils';

interface ActivityButtonProps {
  href: string;
  borderClassName: string;
  backgroundClassName: string;
  children: React.ReactNode;
  target?: string;
}

const ActivityButton: React.FC<ActivityButtonProps> = ({
  href,
  borderClassName,
  backgroundClassName,
  children,
  target,
}) => {
  return (
    <button
      onClick={() => window.open(href, target || '_blank')}
      className={cn(
        'flex p-1 inv-rad inv-rad-2 justify-center',
        borderClassName
      )}
    >
      <div
        className={cn(
          'py-[0.3rem] px-2 inv-rad inv-rad-2',
          backgroundClassName
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default ActivityButton;
