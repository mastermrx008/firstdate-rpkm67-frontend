'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

import BottomButton from '@/components/(main)/home/BottomButton';
import QrCodeModal from '@/components/rpkm/freshy-night/QrCodeModal';
import qrcodeIcon from '@public/home/icon/qrcode.svg';
import poster from '@public/rpkm/freshy-night/poster.jpg';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import ModalButton from '@/components/rpkm/freshy-night/ModalButton';

export default function RegisterDone() {
  const [qrModal, setQrModal] = useState<boolean>(false);

  const { user } = useAuth();

  return (
    <div className="py-[8%]">
      <div className="bg-[#FFFEF7E5] w-11/12 mx-auto py-[7%] flex flex-col items-center gap-y-[2em]  [box-shadow:_0px_0px_15px_0px_rgba(0_0_0_0.50)] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)]">
        <div className="text-center font-sopha font-outline">
          <p className="text-project-pastel-pink text-7xl/[3rem] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_30%)]">
            ลงทะเบียน
          </p>
          <p className="text-project-yellow text-8xl/[3.5rem] tracking-wide -mt-2 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_30%)]">
            <span className="-mr-4">ส</span> ำเร็จ!
          </p>
        </div>
        <Image
          src={poster}
          alt="Freshy night poster"
          className="w-[85%]"
        />
        <BottomButton
          onClick={() => setQrModal(true)}
          src={qrcodeIcon}
          text="My Qr"
        />
        <Link
          href="/home"
          className="w-full flex justify-center"
        >
          <ModalButton
            callBackFunction={() => {}}
            borderClassName={modalStyles['dark-blue'].button['accept-border']}
            backgroundClassName={
              modalStyles['dark-blue'].button['accept-background']
            }
            buttonWidth={modalStyles['dark-blue'].button.width}
          >
            <h1 className="font-athiti text-2xl font-medium">
              กลับสู่หน้าหลัก
            </h1>
          </ModalButton>
        </Link>
      </div>
      <QrCodeModal
        setOpen={setQrModal}
        open={qrModal}
        userId={user ? user.id : ''}
      />
    </div>
  );
}
