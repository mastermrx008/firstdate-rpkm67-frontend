'use client';

import React, { useEffect, useState } from 'react';
import BaanEmpty from '@/components/rpkm/Baan/BaanEmpty';
import { useBaan } from '@/context/BaanContext';
import { useAuth } from '@/context/AuthContext';
import { getGroupByUserId } from '@/utils/group';
import BaanCardsSection from './Section/BaanCardsSection';
import BaanButtonsSection from './Section/BaanButtonsSection';
import { ConfirmGroupSelection } from '@/utils/group';
import toast from 'react-hot-toast';

interface BaanSelectProps {
  mode: 'select' | 'edit';
  onClick?: () => void;
}

const BaanSelect: React.FC<BaanSelectProps> = ({ mode, onClick }) => {
  const { selectedBaan } = useBaan();
  const { user, resetContext } = useAuth();
  const [isLeader, setIsLeader] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  useEffect(() => {
    const checkGroupStatus = async () => {
      if (user) {
        const myGroup = await getGroupByUserId(user.id);

        if (myGroup instanceof Error) {
          toast.error('ไม่สามารถเช็คสถานะของกลุ่มได้');
        } else if (myGroup) {
          setIsLeader(myGroup.leaderId === user.id);
          setIsConfirmed(myGroup.isConfirmed);
        }
      }
    };

    checkGroupStatus();
  }, [user, resetContext]);

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

  return (
    <div className="relative flex flex-col items-center w-80 h-auto p-5">
      <div className="absolute inset-0 bg-rpkm-gray opacity-90 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-xl text-center text-amber-100 font-bold">
          บ้านที่เลือกไว้
        </h1>
        <div className="flex items-center justify-center flex-col mt-10 space-y-8">
          {(!selectedBaan || selectedBaan.length === 0) && mode == 'select' ? (
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
  );
};

export default BaanSelect;
