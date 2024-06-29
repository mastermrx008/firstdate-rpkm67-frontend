import React from 'react';

interface EmergencyCircleProps {
  size: number;
  backgroundColor: string;
  className?: string;
}

export default function EmergencyCircle({
  size,
  backgroundColor,
  className,
  children,
}: EmergencyCircleProps & {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`size-[${size}px] bg-${backgroundColor} ${className} rounded-full flex flex-col items-center justify-center`}
    >
      {children}
    </div>
  );
}
