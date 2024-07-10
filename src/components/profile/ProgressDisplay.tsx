"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { statConfig } from './statConfig';
import Sparkle from '@public/stat/sparkle.svg';

export interface ProgressProps {
  point: number;
  type: 'pointA' | 'pointB' | 'pointC' | 'pointD';
}

const calculatePoint = (point: number, maxPoint: number): number => {
    return Math.min(1, point / maxPoint) * 100;
};

const ProgressDisplay = ({ point, type }: ProgressProps) => {
    const { icon, color, label, text, maxPoint } = statConfig[type];
    const [percentage, setPercentage] = useState(0);
  
    useEffect(() => {
      setPercentage(calculatePoint(point, maxPoint));
    }, [point, maxPoint]);
  
    return (
      <div className="relative flex items-center flex-col w-10 h-auto ">
        <div className={`${percentage === 100 ? '' : 'hidden'} absolute shadow-white shadow-xl w-full h-56 z-10 rounded-t-full`} />
        <div className={`relative flex justify-center w-full h-56 z-20 bg-white rounded-t-full drop-shadow`}>
          <div
            className={`transition-all ease-out duration-700 absolute bottom-0 w-full bg-gradient-to-t 
                        ${percentage === 100 ? color[2] : color[1]}
                        ${percentage === 100 ? 'rounded-t-full' : ''} `}
            style={{
                height: `${percentage}%`,
            }}
          />
          <div className="absolute flex flex-col justify-center items-center top-4 size-8 rounded-full">
            <Image
              src={percentage === 100 ? icon[1] : icon[0]}
              alt={label}
              className={`size-[30px] p-0.5 ${percentage === 100 ? color[0] : ''} ${percentage === 100 ? 'rounded-full' : ''} `}
            />
            <Image
              src={Sparkle}
              alt="Sparkle"
              className={percentage === 100 ? 'mt-1.5' : 'mt-1.5 opacity-0'}
            />
          </div>
          <div
            className={`absolute bottom-1 font-semibold text-2xl 
            ${percentage >= 20 ? 'text-white' : 'text-black'}`}
          >
            {label}.
          </div>
        </div>
        <span className="text-center text-[10px] leading-none mt-1.5 w-12 z-30">{text}</span>
      </div>
    );
};
  
export default ProgressDisplay;