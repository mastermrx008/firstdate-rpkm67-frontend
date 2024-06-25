import React from 'react';
import darkPinkBorder from '../../public/border/darkPinkBorder.webp';
import lightPinkBorder from '../../public/border/lightPinkBorder.webp';
import whiteBrownBorder from '../../public/border/whiteBrownBorder.webp';
import transparentBorder from '../../public/border/transparentBorder.webp';

interface BorderProps {
    variant: 
        | 'dark-pink'
        | 'light-pink'
        | 'white-brown'
        | 'transparent';
    className?: string;
    children?: React.ReactNode;
}

const borderStyles = {
    'dark-pink': {
        base: 'bg-cover bg-center',
        style: {
            backgroundImage: `url(${darkPinkBorder.src})`,
        },
    },
    'light-pink': {
        base: 'bg-cover bg-center opacity-70',
        style: {
            backgroundImage: `url(${lightPinkBorder.src})`,
        },
    },
    'white-brown': {
        base: 'bg-cover bg-center',
        style: {
            backgroundImage: `url(${whiteBrownBorder.src})`,
        },
    },
    'transparent': {
        base: 'bg-cover bg-center opacity-70',
        style: {
            backgroundImage: `url(${transparentBorder.src})`,
        },
    },
};

const Border: React.FC<BorderProps> = ({ variant = 'dark-pink', className, children }) => {

    const { base, style } = borderStyles[variant];

    return (
        <div 
            className={`flex pt-24 p-10 items-center flex-col w-[360px] h-[799px]  ${base} ${className}`} 
            style={style}
        >
            {children}
        </div>
    );
}

export default Border;
