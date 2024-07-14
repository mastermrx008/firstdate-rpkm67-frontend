'use client';
import Button from '@/components/rpkm/BaanSelect/Button/BaanButton';
import BaanEmpty from '@/components/rpkm/BaanSelect/BaanEmpty';
import BaanCard from '@/components/rpkm/BaanSelect/BaanCard';
import BaanEditButton from '@/components/rpkm/BaanSelect/Button/BaanEditButton';
import { useBaan } from '@/context/BaanContext';
import { useAuth } from '@/context/AuthContext';
import Spinner from '@/components/Spinner';
import { getGroundByUserId } from '@/utils/group';
import { useEffect, useState } from 'react';

const BaanSelect = () => {
  const { selectedBaan, isLoading } = useBaan();
  const { user, resetContext } = useAuth();

  const [isLeader, setIsLeader] = useState<boolean>(false);

  useEffect(() => {
    const checkLeader = async () => {
      if (user) {
        const myGroup = await getGroundByUserId(user.id);
        if (myGroup instanceof Error) {
          resetContext();
        } else if (myGroup) {
          const leaderStatus = myGroup.leaderId === user.id;
          setIsLeader(leaderStatus);
        }
      }
    };

    checkLeader();
  }, [user, resetContext]);

  if (isLoading) {
    return <Spinner />;
  }

  const allSelections = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex flex-col items-center bg-zinc-800 w-80 h-auto p-5 space-y-10">
      <h1 className="text-xl text-amber-100 font-bold">บ้านที่เลือกไว้</h1>
      <div className="flex items-center justify-center flex-col space-y-8">
        {!selectedBaan || selectedBaan.length === 0 ? (
          <BaanEmpty />
        ) : (
          <div className="flex items-center justify-center flex-col space-y-4">
            <div className="flex items-center justify-center space-x-4">
              {allSelections.slice(0, 3).map((order) => {
                const baan = selectedBaan.find((b) => b.order === order);
                return (
                  <BaanCard
                    key={order}
                    number={order}
                    imageSrc={baan ? 'bg-1.svg' : undefined}
                    title={baan ? `บ้านที่ ${order}` : undefined}
                    isEmpty={!baan}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-center space-x-4">
              {allSelections.slice(3).map((order) => {
                const baan = selectedBaan.find((b) => b.order === order);
                return (
                  <BaanCard
                    key={order}
                    number={order}
                    imageSrc={baan ? 'bg-1.svg' : undefined}
                    title={baan ? `บ้านที่ ${order}` : undefined}
                    isEmpty={!baan}
                  />
                );
              })}
            </div>
          </div>
        )}
        {!selectedBaan || selectedBaan.length === 0 ? (
          <Button
            content="เลือกบ้าน"
            onClick={() => {
              console.log('บ้านถูกเลือกแล้ว');
            }}
          />
        ) : isLeader ? (
          <BaanEditButton
            onClick={() => {
              console.log('บ้านถูกเลือกแล้ว');
            }}
          />
        ) : (
          <div className="text-rpkm-cream text-md">
            *คุณไม่สามารถแก้ไขบ้านที่เลือกได้
          </div>
        )}
      </div>
    </div>
  );
};

export default BaanSelect;
