import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

import Modal from './modal';

interface BaanModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  callBackFunction: () => void;
  name: {
    th: string;
    en: string;
  };
  content: {
    th: string;
    en: string;
  };
  size: string;
  image: StaticImageData;
}

const BaanModal: React.FC<BaanModalProps> = ({
  open,
  setOpen,
  callBackFunction,
  name,
  content,
  size,
  image,
}) => {
  const [mode, setMode] = useState<'th' | 'en'>('th');
  return (
    <Modal
      variant="blue"
      open={open}
      setOpen={setOpen}
      callBackFunction={callBackFunction}
    >
      <div className="flex justify-between">
        <p className=" p-2 size-max bg-[#EAE3C3] flex rounded-full">{size}</p>
        <div>
          <button
            onClick={() => setMode('th')}
            className={cn(
              'px-3 rounded-l-full',
              mode == 'th' ? 'bg-[#EB9096] text-white' : 'bg-white text-black'
            )}
          >
            TH
          </button>
          <button
            onClick={() => setMode('en')}
            className={cn(
              'px-3 rounded-r-full',
              mode == 'th' ? 'bg-white text-black' : 'bg-[#EB9096] text-white'
            )}
          >
            EN
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full my-4">
        <Image
          src={image}
          alt="baan image"
          className="w-44 p-1 border-[#F5F5F5] border-2"
        />
      </div>
      <div className="text-center text-[#EAE3C3]">
        <p className="text-xl font-semibold">{name[mode]}</p>
        <p className="text-sm">{content[mode]}</p>
      </div>
    </Modal>
  );
};

export default BaanModal;
