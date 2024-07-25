'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

import BottomButton from '@/components/(main)/home/BottomButton';
import QrCodeModal from '@/components/rpkm/freshy-night/QrCodeModal';
import qrcodeIcon from '@public/home/icon/qrcode.svg';

export default function RegisterDone() {
  const [qrModal, setQrModal] = useState<boolean>(false);

  const { user } = useAuth();

  return (
    <>
      <div className="bg-[#FFFEF7E5] w-11/12 mx-auto py-[5%] flex flex-col gap-y-5 [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)]">
        <div className="text-center font-sopha font-outline">
          <p className="text-project-pastel-pink text-[64px]/[2.8rem] drop-shadow-xl">
            ลงทะเบียน
          </p>
          <p className="text-project-yellow text-8xl/[2.9rem] drop-shadow-text2 tracking-wide">
            สำเร็จ
          </p>
        </div>
        <div className="w-full h-[50vh] flex justify-center items-center">
          <p className="text-4xl font-mono font-bold">Waited...</p>
        </div>
        <BottomButton
          onClick={() => setQrModal(true)}
          src={qrcodeIcon}
          text="My Qr"
        />
      </div>
      <QrCodeModal
        setOpen={setQrModal}
        open={qrModal}
        userId={user ? user.id : ''}
      />
    </>
  );
}
