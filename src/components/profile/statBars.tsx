'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAuth } from "@/context/AuthContext";
import Aspect from '@public/stat/aspect.svg';
import Creative from '@public/stat/creative.svg';
import Doing from '@public/stat/doing.svg';
import Commu from '@public/stat/commu.svg';
import AspectFull from '@public/stat/aspect-white.svg';
import CreativeFull from '@public/stat/creative-white.svg';
import DoingFull from '@public/stat/doing-white.svg';
import CommuFull from '@public/stat/commu-white.svg';
import Sparkle from '@public/stat/sparkle.svg';

interface ProgressProps {
  point: number;
  type: 'pointA' | 'pointB' | 'pointC' | 'pointD';
}

interface StatConfig {
  icon: string[];
  color: string[];
  label: string;
  text: string;
  maxPoint: number;
}

const calculatePoint = (point: number, maxPoint: number): number => {
  return Math.min(1, point / maxPoint) * 100;
};

const statConfig: { [key: string]: StatConfig } = {
  pointA: {
    icon: [Aspect, AspectFull],
    color: [
      'bg-project-apricot',
      'from-project-apricot to-project-cream',
      'from-project-apricot via-90% via-project-cream to-white',
    ],
    label: 'A',
    text: 'เปิดมุมมองความคิด',
    maxPoint: 10,
  },
  pointB: {
    icon: [Creative, CreativeFull],
    color: [
      'bg-project-fuchsia',
      'from-project-fuchsia to-project-pink',
      'from-project-fuchsia via-90% via-project-pink to-white',
    ],
    label: 'B',
    text: 'ลงมือทำจริง',
    maxPoint: 8,
  },
  pointC: {
    icon: [Doing, DoingFull],
    color: [
      'bg-project-blue',
      'from-project-blue to-project-light-blue',
      'from-project-blue via-90% via-project-light-blue to-white',
    ],
    label: 'C',
    text: 'เพิ่มทักษะการสื่อสาร',
    maxPoint: 5,
  },
  pointD: {
    icon: [Commu, CommuFull],
    color: [
      'bg-project-brown',
      'from-project-brown to-project-apricot',
      'from-project-brown via-90% via-project-apricot to-white',
    ],
    label: 'D',
    text: 'เปิดความคิดสร้างสรรค์',
    maxPoint: 8,
  },
};

const ProgressBar = ({ point, type }: ProgressProps) => {
  const { icon, color, label, text, maxPoint } = statConfig[type];
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(calculatePoint(point, maxPoint));
  }, [point, maxPoint]);

  return (
    <div className="relative flex items-center flex-col w-[38px] h-[273px]">
      <div className={`${percentage === 100 ? '' : 'hidden'} absolute shadow-white shadow-xl w-full h-[229px] z-10 rounded-t-full`} />
      <div className={`relative flex justify-center w-full h-[229px] z-20 bg-white rounded-t-full drop-shadow`}>
        <div
          className={`transition-all ease-out duration-700 absolute bottom-0 w-full bg-gradient-to-t 
                      ${percentage === 100 ? color[2] : color[1]}
                      ${percentage === 100 ? 'rounded-t-full' : ''} `}
          style={{
              height: `${percentage}%`,
          }}
        />
        <div className="absolute flex flex-col justify-center items-center top-4 w-[30px] h-[30px] rounded-full">
          <Image
            src={percentage === 100 ? icon[1] : icon[0]}
            alt={label}
            className={`w-[30px] h-[30px] ${percentage === 100 ? color[0] : ''} ${percentage === 100 ? 'rounded-full' : ''} `}
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
      <span className="text-center text-[10px] z-30">{text}</span>
    </div>
  );
};

export default function StatBars() {
  const { user } = useAuth();
  const point = user?.stamp;

  const progressBars: ProgressProps[] = [
    { point: point?.pointA || 0, type: 'pointA' },
    { point: point?.pointB || 0, type: 'pointB' },
    { point: point?.pointC || 0, type: 'pointC' },
    { point: point?.pointD || 0, type: 'pointD' },
  ];

  return (
    <div className="flex justify-evenly gap-7">
      {progressBars.map((props, index) => (
        <ProgressBar key={index} {...props} />
      ))}
    </div>
  );
}
