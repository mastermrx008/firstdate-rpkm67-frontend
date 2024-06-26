import React from 'react';
import darkPinkBorder from '../../public/border/darkPinkBorder.svg';
import lightPinkBorder from '../../public/border/lightPinkBorder.svg';
import whiteBrownBorder from '../../public/border/whiteBrownBorder.svg';
import transparentBorder from '../../public/border/transparentBorder.svg';

interface BorderProps {
  variant: 'dark-pink' | 'light-pink' | 'white-brown' | 'transparent';
  className?: string;
  children?: React.ReactNode;
}

const borderStyles = {
  'dark-pink': {
    base: '',
    style: {
      backgroundImage: `url(${darkPinkBorder.src})`,
    },
  },
  'light-pink': {
    base: 'opacity-70',
    style: {
      backgroundImage: `url(${lightPinkBorder.src})`,
    },
  },
  'white-brown': {
    base: '',
    style: {
      backgroundImage: `url(${whiteBrownBorder.src})`,
    },
  },
  transparent: {
    base: 'opacity-70',
    style: {
      backgroundImage: `url(${transparentBorder.src})`,
    },
  },
};

const Border: React.FC<BorderProps> = ({
  variant = 'dark-pink',
  className,
  children,
}) => {
  const { base, style } = borderStyles[variant];

  return (
    <div
      className={`flex my-[4%] pt-24 p-10 items-center flex-col w-[90%] h-full bg-contain bg-no-repeat bg-top  ${base} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Border;
