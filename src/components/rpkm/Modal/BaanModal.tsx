import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

import modalStyles from './ModalStyle';

import BaseModal from '@/components/rpkm/Modal/BaseModal';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
import PersonIcon from '@public/rpkm/person-icon.svg';
import InstagramIcon from '@public/rpkm/instagram-icon.svg';

interface BaanModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  name: {
    th: string;
    en: string;
  };
  content: {
    th: string;
    en: string;
  };
  size: string;
  currentPeople: number;
  capacity: number;
  instagram: string;
  image: StaticImageData;
}

/**
 * BaanModal component
 * @param open - boolean
 * @param setOpen - function
 * @param name - { th: string, en: string }
 * @param content - { th: string, en: string }
 * @param size - string
 * @param currentPeople - number
 * @param capacity - number
 * @param instagram - string
 * @param image - StaticImageData (next/image)
 * @returns Styled baan modal component
 */
const BaanModal: React.FC<BaanModalProps> = ({
  open,
  setOpen,
  name,
  content,
  size,
  currentPeople,
  capacity,
  instagram,
  image,
}) => {
  const [mode, setMode] = useState<'th' | 'en'>('th');

  const handleSelection = () => {
    /* select this baan */
    console.log('select!');
    setOpen(false);
  };

  return (
    <BaseModal
      variant="blue"
      open={open}
    >
      <div className="w-[75vw]">
        <div className="flex flex-row justify-between w-full items-center">
          <p className="font-semibold p-2 size-max bg-[#EAE3C3] flex rounded-full text-[#183F86]">
            {size}
          </p>

          <div className="flex items-center">
            <p>
              <span className="text-[#EAE3C3]">{currentPeople}</span>
              <span className="text-white">/{capacity}</span>
            </p>
            <Image
              src={PersonIcon}
              alt="person icon"
            />
          </div>
          <div className="flex items-center">
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
          <p className="text-xl font-bold">{name[mode]}</p>
          <p className="text-sm">{content[mode]}</p>
        </div>
        <div className="flex flex-row justify-center w-full gap-x-1">
          <Image
            src={InstagramIcon}
            alt="instagram icon"
          />
          <p className="text-[#EAE3C3]">{instagram}</p>
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
            callBackFunction={() => handleSelection()}
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
