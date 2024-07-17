import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

import modalStyles from './ModalStyle';
import '@/components/rpkm/Modal/style.css';

import BaseModal from '@/components/rpkm/Modal/BaseModal';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
import PersonIcon from '@public/rpkm/person-icon.svg';
import InstagramIcon from '@public/rpkm/instagram-icon.svg';
import Star from '@public/rpkm/star.svg';

interface BaanModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  name: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  size: string;
  currentPeople: number;
  max: number;
  ig: string;
  logo: StaticImageData;
  message: {
    th: string;
    en: string;
  };
  callBackFunction: (params: unknown) => void;
}

/**
 * BaanModal component
 * @param open - boolean
 * @param setOpen - function
 * @param name - { th: string, en: string }
 * @param description - { th: string, en: string }
 * @param size - string
 * @param currentPeople - number
 * @param max - number
 * @param instagram - string
 * @param logo - StaticImageData (next/image)
 * @param message - { th: string, en: string }
 * @param callBackFunction - function => void
 * @returns Styled baan modal component
 */
const BaanModal: React.FC<BaanModalProps> = ({
  open,
  setOpen,
  name,
  description,
  size,
  currentPeople,
  max,
  ig,
  logo,
  message,
  callBackFunction,
}) => {
  const [mode, setMode] = useState<'th' | 'en'>('th');

  return (
    <BaseModal
      variant="blue"
      open={open}
    >
      <div className="w-[75vw]">
        <div className="flex flex-row justify-between w-full items-center">
          <div
            className={cn(
              'flex justify-center items-center',
              size.length === 1 && 'ml-1'
            )}
          >
            <Image
              src={Star}
              alt="star"
              className="absolute -z-10"
            />
            <p className="font-semibold text-[#183F86]">{size}</p>
          </div>

          <div className="absolute left-[50%] -translate-x-[50%]">
            <div className="flex items-center">
              <p>
                <span className="text-[#EAE3C3]">{currentPeople}</span>
                <span className="text-white">/{max}</span>
              </p>
              <Image
                src={PersonIcon}
                alt="person icon"
              />
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setMode('th')}
              className={cn(
                'px-[0.6rem] rounded-l-full text-sm',
                mode == 'th' ? 'bg-[#EB9096] text-white' : 'bg-white text-black'
              )}
            >
              TH
            </button>
            <button
              onClick={() => setMode('en')}
              className={cn(
                'px-[0.6rem] rounded-r-full text-sm',
                mode == 'th' ? 'bg-white text-black' : 'bg-[#EB9096] text-white'
              )}
            >
              EN
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full my-4">
          <Image
            src={logo}
            alt="baan image"
            className="w-44 p-1 border-[#F5F5F5] bg-[#F5F5F5] border-2"
          />
        </div>
        <div className="text-center text-white">
          <p className="text-xl font-bold">
            {mode === 'th' ? 'บ้าน' : 'Baan '}
            {name[mode]}
          </p>
          <div className="flex justify-center">
            <p className="w-4/5 text-sm max-h-20 overflow-y-scroll pr-[2%]">
              {description[mode]}
            </p>
          </div>
          <p className="mt-4 text-xl font-bold">ฝากถึงน้อง ๆ</p>
          <div className="flex justify-center">
            <p className="mb-2 w-4/5 text-sm max-h-20 overflow-y-scroll pr-[2%]">
              {message[mode]}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full gap-x-1 mt-2">
          <Image
            src={InstagramIcon}
            alt="instagram icon"
          />
          <p className="text-white">{ig}</p>
        </div>
        <div className="flex flex-row gap-x-3 justify-center mt-3">
          <ModalButton
            callBackFunction={() => setOpen(false)}
            borderClassName={modalStyles.blue.button['cancel-border']}
            backgroundClassName={modalStyles.blue.button['cancel-background']}
          >
            กลับ
          </ModalButton>
          <ModalButton
            callBackFunction={callBackFunction}
            borderClassName={modalStyles.blue.button['accept-border']}
            backgroundClassName={modalStyles.blue.button['accept-background']}
          >
            เพิ่มบ้านนี้
          </ModalButton>
        </div>
      </div>
    </BaseModal>
  );
};

export default BaanModal;
