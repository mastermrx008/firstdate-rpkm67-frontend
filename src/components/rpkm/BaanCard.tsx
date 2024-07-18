import Image, { StaticImageData } from 'next/image';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

import Badge from '@/components/rpkm/SizeBadge';
import BaanModal from '@/components/rpkm/Modal/BaanModal';
import BaanFullModal from '@/components/rpkm/Modal/BaanFullModal';
import { useBaan } from '@/context/BaanContext';

interface BaanCardProps {
  logo: StaticImageData;
  name: {
    th: string;
    en: string;
  };
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  currentPeople: number;
  max: number | 500;
  description: {
    th: string;
    en: string;
  };
  ig: string;
  message: {
    th: string;
    en: string;
  };
  isShake: boolean;
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
 * @param ig - string
 * @param message - { th: string, en: string }
 * @param logo - StaticImageData (next/image)
 * @returns Full baan modal component
 */
export default function BaanCard({
  logo,
  name,
  size,
  currentPeople,
  max,
  description,
  ig,
  message,
  isShake,
}: BaanCardProps) {
  const [openBaanModal, setOpenBaanModal] = useState(false);
  const [openBaanFullModal, setOpenBaanFullModal] = useState(false);
  const { addBaanSelection, selectedBaan } = useBaan();

  const handleOnSubmit = () => {
    setOpenBaanModal(false);
    if (selectedBaan && selectedBaan?.length < 5) {
      addBaanSelection(name.en);
    } else {
      handleBaanFull();
    }
  };

  const handleBaanFull = () => {
    setOpenBaanFullModal(true);
  };

  return (
    <>
      <div
        className={cn(
          'w-[100px] h-[140px] bg-white p-1 flex flex-col gap-y-1 shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]',
          { 'animate-shake': isShake }
        )}
        onClick={() => {
          setOpenBaanModal(true);
          console.log(openBaanModal);
          console.log(openBaanFullModal);
        }}
      >
        {logo ? (
          <Image
            src={logo}
            alt="Baan image"
            className="w-[90px] aspect-square"
          ></Image>
        ) : (
          <div className="w-[90px] aspect-square bg-[#414643] grid place-items-center">
            <Icon
              icon="eva:image-fill"
              className="text-white size-7"
            ></Icon>
          </div>
        )}
        <div className="flex flex-row justify-between items-center">
          <div className="text-project-light-gray font-medium text-xs truncate">
            {name['en']}
          </div>
          <Badge baanSize={size}></Badge>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-x-[2px] items-center">
            <div className="text-[9px]">
              <span className="text-[#68A987]">{currentPeople}</span>/{max}
            </div>
            <Icon
              icon="ic:round-person"
              width={12}
              height={12}
            ></Icon>
          </div>
          <Icon icon="mingcute:arrows-right-line"></Icon>
        </div>
      </div>
      <BaanModal
        open={openBaanModal}
        setOpen={setOpenBaanModal}
        name={name}
        description={description}
        size={size}
        currentPeople={currentPeople}
        max={max}
        ig={ig}
        message={message}
        logo={logo}
        callBackFunction={handleOnSubmit}
      />
      <BaanFullModal
        open={openBaanFullModal}
        setOpen={setOpenBaanFullModal}
      />
    </>
  );
}
