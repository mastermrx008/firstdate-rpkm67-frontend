import React from 'react';
import { Icon } from '@iconify/react';

interface EmergencyCallProps {
  text: string;
  phoneNumber: string;
}

const EmergencyCallBlock: React.FC<EmergencyCallProps> = ({
  text,
  phoneNumber,
}) => {
  return (
    <div className="shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-xl w-60 h-16 flex items-center flex-row justify-between px-3 py-1">
      <div className="flex flex-col gap-y-1">
        <p className="font-athiti text-base	font-medium text-black">{text}</p>
        <p className="text-black text-base opacity-50">{phoneNumber}</p>
      </div>
      <div className="flex items-center">
        <button className="shadow flex rounded-full flex-cols w-11 h-11 bg-project-fuchsia  justify-center items-center">
          <Icon
            icon="fluent:call-connecting-20-filled"
            className="text-white"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default EmergencyCallBlock;
