import Image from 'next/image';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

import Badge from '@/components/rpkm/SizeBadge';
import BaanModal from '@/components/rpkm/Modal/BaanModal';
import BaanFullModal from '@/components/rpkm/Modal/BaanFullModal';

interface BaanCardProps {
  image?: string;
  name: {
    th: string;
    en: string;
  };
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  currentPeople: number;
  capacity: number | 500;
  content: {
    th: string;
    en: string;
  };
  instagram: string;
  isShake: boolean;
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
 * @returns Full baan modal component
 */
export default function BaanCard({
  image,
  name,
  size,
  currentPeople,
  capacity,
  content,
  instagram,
  isShake,
}: BaanCardProps) {
  const [openBaanModal, setOpenBaanModal] = useState(false);
  const [openBaanFullModal, setOpenBaanFullModal] = useState(false);

  const handleBaanFull = () => {
    setOpenBaanModal(false);
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
        {image ? (
          <Image
            src={image}
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
          <div className="text-project-light-gray font-medium text-xs">
            {name['en']}
          </div>
          <Badge baanSize={size}></Badge>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-x-[2px] items-center">
            <div className="text-[9px]">
              <span className="text-[#68A987]">{currentPeople}</span>/{capacity}
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
        content={content}
        size={size}
        currentPeople={currentPeople}
        capacity={capacity}
        instagram={instagram}
        image={image}
        callBackFunction={() => console.log('To be implemented')}
      />
      <BaanFullModal
        open={openBaanFullModal}
        setOpen={setOpenBaanFullModal}
      />
    </>
  );
}
