import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQRCode } from 'next-qrcode';

import ModalButton from '@/components/rpkm/freshy-night/ModalButton';
import modalStyles from '../Modal/ModalStyle';
import qrOuterBackground from '@public/rpkm/freshy-night/register-done/qr-outer-background.svg';
import qrInnerBackground from '@public/rpkm/freshy-night/register-done/qr-inner-background.svg';
import vector from '@public/rpkm/freshy-night/register-done/vector.svg';

interface QrCodeModalProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  userId: string;
}

export default function QrCodeModal({
  setOpen,
  open,
  userId,
}: QrCodeModalProps) {
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(0.25 * window.innerHeight);
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { Canvas } = useQRCode();

  if (!open) return null;

  return (
    <div className="z-10 inset-0 fixed flex justify-center bg-black bg-opacity-50 self-center">
      <div className="w-[calc(100vh*(72/156)*(9/10))] h-[64vh] relative self-center flex flex-col justify-center">
        <div
          className="w-4/5 h-full opacity-100 self-center flex justify-self-center justify-center bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${qrOuterBackground.src})` }}
        >
          <div
            className="w-11/12 h-[46vh] opacity-100 self-center justify-self-center bg-contain bg-no-repeat bg-center flex flex-col items-center justify-around py-[2vh]"
            style={{ backgroundImage: `url(${qrInnerBackground.src})` }}
          >
            <h5 className="font-athiti text-3xl font-medium">My QR</h5>
            <Image
              src={vector}
              alt="vector"
              className="w-3/5"
            />
            <Canvas
              text={userId}
              options={{
                width: viewportHeight,
              }}
            />
            <ModalButton
              callBackFunction={() => setOpen(false)}
              borderClassName={modalStyles['dark-blue'].button['accept-border']}
              backgroundClassName={
                modalStyles['dark-blue'].button['accept-background']
              }
              buttonWidth={modalStyles['dark-blue'].button.width}
            >
              ย้อนกลับ
            </ModalButton>
          </div>
        </div>
      </div>
    </div>
  );
}
