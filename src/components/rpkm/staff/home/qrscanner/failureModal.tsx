import React, { ReactNode } from 'react';
import Image from 'next/image';
import Failicon from '@public/home/icon/alert.svg';
import spear from '@public/rpkm/staff/spear.svg';
interface FailModalProps {
  isOpen: boolean;
  message: string | ReactNode;
  topic: string;
  onClose: () => void;
  taken?: boolean;
}

const FailModal: React.FC<FailModalProps> = ({
  isOpen,
  onClose,
  message,
  topic,
  taken = false,
}) => {
  const modalClasses = `fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const modalContentClasses = `flex flex-col justify-center items-center justify-around relative w-80 h-96 bg-contain bg-no-repeat bg-center bg-[url('/rpkm/staff/modal-background.svg')] pt-5 pb-10 `;
  const button = taken ? (
    <button
      onClick={onClose}
      className="drop-shadow-lg mt-5 w-32 h-10 text-white bg-[url('/rpkm/staff/black-button.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center"
    >
      กลับ
    </button>
  ) : (
    <button
      onClick={onClose}
      className="drop-shadow-lg mt-5 w-32 h-10 text-white bg-[url('/rpkm/staff/button.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center"
    >
      สแกนต่อ
    </button>
  );
  return (
    <div
      className={modalClasses + ' flex justify-center items-center text-center'}
    >
      <div className={modalContentClasses}>
        <h2 className="text-3xl font-semibold mt-6 mb-4">{topic}</h2>
        <Image
          src={spear}
          alt="spear"
        />
        <Image
          src={Failicon}
          width="45"
          height="45"
          alt="Fail"
        />

        <h1 className="text-center mt-5">{message}</h1>
        <div className="flex flex-col items-center mx-auto justify-center">
          {button}
        </div>
      </div>
    </div>
  );
};

export default FailModal;
