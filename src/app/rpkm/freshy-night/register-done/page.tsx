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
    <div className="flex flex-col items-center">
      <div className="text-center font-sopha font-outline">
        <p className="text-project-pastel-pink text-[64px]/[2.8rem] drop-shadow-xl ">
          ลงทะเบียน
        </p>
        <p className="text-project-yellow text-8xl/[2.9rem] drop-shadow-text2 tracking-wide">
          สำเร็จ
        </p>
      </div>
      <BottomButton
        onClick={() => setQrModal(true)}
        src={qrcodeIcon}
        text="My Qr"
      />
      <QrCodeModal
        setOpen={setQrModal}
        open={qrModal}
        userId={user ? user.id : ''}
      />
    </div>
  );
}
