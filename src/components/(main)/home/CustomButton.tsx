import { useBaan } from '@/context/BaanContext';
import { cn } from '@/lib/utils';
import { createEbookCount } from '@/utils/count';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CustomButtonProps {
  varient: 'first-date' | 'rub-peun' | 'e-book' | 'contact-list';
  className?: string;
  children: React.ReactNode;
  registered?: boolean;
  currentDate: Date;
  isCheckedIn?: boolean;
  baanResult?: boolean;
  setAnnounce?: (value: boolean) => void;
  setBaanResultModal?: (value: boolean) => void;
  setWaitModal?: (value: boolean) => void;
  setEvent?: (value: 'first-date' | 'rup-peun') => void;
  setJoinModal?: (value: boolean) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  varient = 'first-date',
  className,
  children,
  registered,
  currentDate,
  isCheckedIn,
  baanResult,
  setAnnounce,
  setBaanResultModal,
  setWaitModal,
  setEvent,
  setJoinModal,
}) => {
  const router = useRouter();
  const { isConfirmed } = useBaan();
  const firstdate = async () => {
    let firstDateDate = currentDate;
    const firstDate = process.env.NEXT_PUBLIC_FIRST_DATE_DATE;
    if (firstDate) {
      firstDateDate = new Date(firstDate);
    }
    console.log(currentDate.toISOString(), firstDateDate.toISOString());
    if (currentDate >= firstDateDate) {
      if (registered) {
        router.push('/firstdate/home');
      } else {
        router.push('/register');
      }
    } else if (setWaitModal && setEvent) {
      setEvent('first-date');
      setWaitModal(true);
    }
  };
  const rubpeun = async () => {
    let rupPeunDate = currentDate;
    let closedSelectionDate = currentDate;
    let baanAnnounceDate = currentDate;
    const rupPeun = process.env.NEXT_PUBLIC_RUP_PEUN_DATE;
    const closedSelection = process.env.NEXT_PUBLIC_CLOSED_BAAN_SELECTION_DATE;
    const announce = process.env.NEXT_PUBLIC_BAAN_ANNOUCE_DATE;
    if (rupPeun) {
      rupPeunDate = new Date(rupPeun);
    }
    if (closedSelection && announce) {
      closedSelectionDate = new Date(closedSelection);
      baanAnnounceDate = new Date(announce);
    }
    console.log(
      currentDate.toISOString(),
      rupPeunDate.toISOString(),
      closedSelectionDate.toISOString(),
      baanAnnounceDate.toISOString()
    );
    if (currentDate >= baanAnnounceDate) {
      if (setJoinModal && setAnnounce && setBaanResultModal) {
        if (isCheckedIn) {
          if (baanResult) {
            router.push('/rpkm/activities/home');
          } else {
            setAnnounce(true);
            setBaanResultModal(true);
          }
        } else {
          setAnnounce(true);
          setJoinModal(true);
        }
      }
    } else if (
      currentDate >= closedSelectionDate &&
      currentDate < baanAnnounceDate
    ) {
      if (!isConfirmed) {
        router.push('/rpkm/activities/home');
      } else if (setJoinModal) {
        if (isCheckedIn) {
          router.push('/rpkm/activities/home');
        } else {
          setJoinModal(true);
        }
      }
    } else if (
      currentDate >= rupPeunDate &&
      currentDate < closedSelectionDate
    ) {
      if (registered) {
        router.push('/rpkm/baan/home');
      } else {
        router.push('/register');
      }
    } else if (setWaitModal && setEvent) {
      setEvent('rup-peun');
      setWaitModal(true);
    }
  };
  const ebook = () => {
    window.open(
      'https://drive.google.com/file/d/1NfAWKq_QwAnELLt7CNOxyqOO2ZJ3NgD-/view',
      '_blank'
    );
    createEbookCount();
  };
  const contactlist = () => {
    router.push('/emergency-contact');
  };
  const buttonProps = {
    'first-date': {
      color: 'bg-project-pink',
      onClick: firstdate,
    },
    'rub-peun': {
      color: 'bg-project-apricot',
      onClick: rubpeun,
    },
    'e-book': {
      color: 'bg-project-cream',
      onClick: ebook,
    },
    'contact-list': {
      color: 'bg-[#313131]',
      onClick: contactlist,
    },
  };
  const { color, onClick } = buttonProps[varient];
  return (
    <button
      className={`${color} w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center hover:brightness-105`}
      onClick={onClick}
    >
      <div
        className={cn('flex space-x-1 justify-center items-center', className)}
      >
        {children}
      </div>
    </button>
  );
};

export default CustomButton;
