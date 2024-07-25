import React from 'react';
import Image from 'next/image';
import successicon from '@public/success.svg';
import spear from '@public/rpkm/staff/spear.svg';
import { CheckIn } from '@/types/checkIn';
interface ConfirmModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  userData: CheckIn | null;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  userData,
}) => {
  const modalClasses = `fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const modalContentClasses = `flex flex-col justify-center items-center justify-around relative w-80 h-96 bg-contain bg-no-repeat bg-center bg-[url('/rpkm/staff/modal-background.svg')] pt-5 pb-10`;
  return (
    <div
      className={modalClasses + ' flex justify-center items-center text-center'}
    >
      <div className={modalContentClasses}>
        <h2 className="text-3xl font-semibold mt-6 mb-4">Confirmation!</h2>

        <Image
          src={spear}
          alt="spear"
        />
        <Image
          src={successicon}
          width="45"
          height="45"
          alt="success"
        />

        <h1 className="text-center mt-5">สแกนสำเร็จ ยินดีต้อนรับ</h1>
        <h1 className="text-center text-project-fuchsia">
          {userData?.firstName} {userData?.lastName}{' '}
          {userData?.checkIn.email.split('@').at(0)}
        </h1>
        <div className="flex flex-col items-center mx-auto justify-center">
          <button
            onClick={onClose}
            className="drop-shadow-lg mt-5 w-32 h-10 text-white bg-[url('/rpkm/staff/button.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center"
          >
            สแกนต่อ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
