"use client";

import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import Aspect from "@public/stat/aspect.svg";
import Creative from "@public/stat/creative.svg";
import Doing from "@public/stat/doing.svg";
import Commu from "@public/stat/commu.svg";

interface ProgressProps {
  point: number;
  type: "pointA" | "pointB" | "pointC" | "pointD";
}

interface StatConfig {
  icon: string;
  color: [string, string];
  label: string;
  maxPoint: number;
}

const calculatePoint = (point: number, maxPoint: number): number => {
  return (point / maxPoint) * 100;
};

const statConfig: {[key: string]: StatConfig} = {
  pointA: {
    icon: Aspect,
    color: ["from-project-apricot", "to-project-cream"],
    label: "เปิดมุมมองความคิด",
    maxPoint: 10
  },
  pointB: {
    icon: Creative,
    color: ["from-project-fuchsia", "to-project-pink"],
    label: "ลงมือทำจริง",
    maxPoint: 8
  },
  pointC: {
    icon: Doing,
    color: ["from-project-blue", "to-project-light-blue"],
    label: "เพิ่มทักษะการสื่อสาร",
    maxPoint: 5
  },
  pointD: {
    icon: Commu,
    color: ["from-project-brown", "to-project-apricot"],
    label: "เปิดความคิดสร้างสรรค์",
    maxPoint: 8
  },
};

const ProgressBar = ({ point, type }: ProgressProps) => {
  const { icon, color, label, maxPoint } = statConfig[type];
  const percentage = calculatePoint(point, maxPoint);

  return (
    <div className="flex items-center flex-col w-[38px] h-[273px]">
      <div className="relative flex justify-center w-full h-[229px] bg-white rounded-t-full">
        <div
          className={`bg-gradient-to-t ${color[0]} ${color[1]} absolute bottom-0 w-full`}
          style={{
            height: `${percentage}%`,
          }}
        />
        <div className="absolute top-2 w-[30px] h-[30px] rounded-full">
          <Image src={icon} alt={label} className="w-[30px]" />
        </div>
      </div>
      <span className="text-center text-[10px]">{label}</span>
    </div>
  );
};

export default function StatBars() {
  const { user } = useAuth();
  const point = user?.stamp;


  const progressBars: ProgressProps[] = [
    { point: point?.pointA || 0, type: "pointA" },
    { point: point?.pointB || 0, type: "pointB" },
    { point: point?.pointC || 0, type: "pointC" },
    { point: point?.pointD || 0, type: "pointD" },
  ];

  return (
    <div className="flex justify-evenly gap-5">
      {progressBars.map((props, index) => (
        <ProgressBar key={index} {...props} />
      ))}
    </div>
  );
}