import { useRouter } from 'next/navigation';
import React from 'react';

interface CustomButtonProps {
  varient: 'first-date' | 'rub-peun' | 'e-book' | 'contact-list';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  varient = 'first-date',
  className,
  children,
  disabled = false,
}) => {
  const router = useRouter();
  const fd = () => {
    router.push('/register');
  };
  const rp = () => {
    console.log('rp');
  };
  const eb = () => {
    window.open('https://th.y8.com/', '_blank');
  };
  const cl = () => {
    router.push('/emergency-contact');
  };
  const buttonProps = {
    'first-date': {
      color: 'bg-[#FFBBD2]',
      onClick: fd,
    },
    'rub-peun': {
      color: 'bg-[#E9A49B]',
      onClick: rp,
    },
    'e-book': {
      color: 'bg-[#F1DFC1]',
      onClick: eb,
    },
    'contact-list': {
      color: 'bg-[#313131]',
      onClick: cl,
    },
  };
  const { color, onClick } = buttonProps[varient];
  return (
    <button
      className={`${color} w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center hover:brightness-105`}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={`flex space-x-1 justify-center items-center ${className}`}
      >
        {children}
      </div>
    </button>
  );
};

export default CustomButton;
