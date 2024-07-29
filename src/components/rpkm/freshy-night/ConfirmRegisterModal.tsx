import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';
import modalBg from '@public/rpkm/freshy-night/confirm-register/modal-bg.svg';
import Image from 'next/image';

interface ConfirmRegisterModalProps {
  open: boolean;
  onChange: (open: boolean) => void;
  onCallback?: () => void;
}

const ConfirmRegisterModal = ({
  onChange,
  open,
  onCallback,
}: ConfirmRegisterModalProps) => {
  const handleOnClose = useCallback(() => {
    onChange(false);
  }, [onChange]);

  return (
    <div
      className={cn(
        'fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[999]',
        {
          'opacity-0 pointer-events-none': !open,
        }
      )}
    >
      <div className="relative w-[80vw] aspect-[319/250]">
        <Image
          src={modalBg}
          alt="modal-bg"
          fill
          className="z-[-1]"
        />
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full text-xl">
          <div className="text-center font-semibold">
            ยืนยันข้อมูลเข้าร่วมงาน <br />
            Freshy night
          </div>
          <div className="space-x-2  font-medium">
            <button
              className="bg-rpkm-yellow px-1 py-1 inv-rad inv-rad-1"
              onClick={handleOnClose}
            >
              <div className="bg-white inv-rad inv-rad-1 px-6 text-rpkm-blue">
                ยกเลิก
              </div>
            </button>
            <button
              className="bg-rpkm-yellow px-1 py-1 inv-rad inv-rad-1"
              onClick={onCallback}
            >
              <div className="inv-rad inv-rad-1 px-6 bg-rpkm-blue text-white">
                ยืนยัน
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRegisterModal;
