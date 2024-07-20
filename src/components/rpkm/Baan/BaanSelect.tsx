'use client';

import React, { useMemo } from 'react';
import BaanEmpty from '@/components/rpkm/Baan/BaanEmpty';
import { useBaan } from '@/context/BaanContext';
import { useAuth } from '@/context/AuthContext';
import BaanCardsSection from './Section/BaanCardsSection';
import BaanButtonsSection from './Section/BaanButtonsSection';
import { ConfirmGroupSelection } from '@/utils/group';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import BackToHomeBtn from '../BackToHomeBtn';

interface BaanSelectProps {
  mode: 'select' | 'edit';
  onClick?: () => void;
}

const BaanSelect: React.FC<BaanSelectProps> = ({ mode, onClick }) => {
  const { selectedBaan, isConfirmed, setIsConfirmed, isLeader } = useBaan();
  const { user } = useAuth();

  const onConfirm = async () => {
    if (user) {
      const confirmedGroup = await ConfirmGroupSelection(user.id);
      if (confirmedGroup instanceof Error) {
        toast.error('ไม่สามารถยืนยันการเลือกบ้านได้');
      } else {
        setIsConfirmed(true);
      }
    }
  };

  const allSelections = Array.from({ length: 5 }, (_, i) => i + 1);

  const isShowBaanEmpty = useMemo(
    () => selectedBaan?.length === 0 && mode == 'select' && isLeader,
    [selectedBaan, mode, isLeader]
  );

  return (
    <div
      className={cn(
        'relative flex flex-col items-center w-full h-auto p-[2vw]',
        {
          'mb-[10vw] mt-[8vw]': isShowBaanEmpty,
        }
      )}
    >
      <div className="absolute inset-0 bg-rpkm-gray opacity-90 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-2xl text-center text-amber-100 font-bold">
          บ้านที่เลือกไว้
        </h1>
        <div
          className={cn(
            'flex items-center justify-center flex-col my-[2vw] space-y-[4vw]',
            {
              'my-[18vw]': isShowBaanEmpty,
            }
          )}
        >
          {isShowBaanEmpty ? (
            <BaanEmpty />
          ) : (
            <BaanCardsSection
              allSelections={allSelections}
              selectedBaan={selectedBaan}
              isConfirmed={isConfirmed}
              mode={mode}
              onClick={onClick}
            />
          )}
          <div className="flex justify-center items-center gap-[5vw]">
            {mode == 'edit' && <BackToHomeBtn />}
            <BaanButtonsSection
              mode={mode}
              isLeader={isLeader}
              isConfirmed={isConfirmed}
              selectedBaan={selectedBaan}
              onConfirm={onConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaanSelect;
