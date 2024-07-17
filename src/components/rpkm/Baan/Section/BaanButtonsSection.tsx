import React, { useState } from 'react';
import Button from '@/components/rpkm/Baan/Button/BaanButton';
import BaanEditButton from '@/components/rpkm/Baan/Button/BaanEditButton';
import { BaanSelection } from '@/types/BaanSelection';
import { useBaan } from '@/context/BaanContext';
import Modal from '@/components/rpkm/Modal/Modal';
import { useRouter } from 'next/navigation';

interface BaanButtonsSectionProps {
  mode: 'select' | 'edit';
  isLeader: boolean;
  isConfirmed: boolean;
  selectedBaan: BaanSelection[] | null;
  onConfirm: () => void;
}

const BaanButtonsSection: React.FC<BaanButtonsSectionProps> = ({
  mode,
  isLeader,
  isConfirmed,
  selectedBaan,
  onConfirm,
}) => {
  const { removeAllBaanSelection } = useBaan();
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const handleConfirm = () => setModalOpen(true);
  const handleModalConfirm = () => {
    setModalOpen(false);
    onConfirm();
  };

  if (isConfirmed) return null;

  return (
    <>
      {mode === 'select' &&
        (!selectedBaan || selectedBaan.length === 0 ? (
          <Button
            content="เลือกบ้าน"
            onClick={() => router.push('/select-baan')}
          />
        ) : isLeader ? (
          <BaanEditButton onClick={() => router.push('/select-baan')} />
        ) : (
          <div className="text-rpkm-cream text-md">
            *คุณไม่สามารถแก้ไขบ้านที่เลือกได้
          </div>
        ))}
      {mode === 'edit' && (
        <>
          {selectedBaan && selectedBaan.length < 5 && (
            <div className="text-xs text-rpkm-cream">
              *กรุณาเลือกให้ครบ 5 บ้าน
            </div>
          )}
          {selectedBaan && selectedBaan.length > 0 && (
            <div className="text-xs text-rpkm-cream">
              <button
                className="underline"
                onClick={removeAllBaanSelection}
              >
                ล้างทั้งหมด
              </button>
            </div>
          )}
          <Button
            content="ยืนยันการเลือกบ้าน"
            onClick={handleConfirm}
          />
          <Modal
            variant="red"
            open={isModalOpen}
            setOpen={setModalOpen}
            callBackFunction={handleModalConfirm}
          >
            <div className="flex items-center justify-center flex-col space-y-2 p-4">
              <h1 className="text-3xl font-semibold text-white">
                ยืนยันการเลือกบ้าน
              </h1>
              <p className="text-white text-xs">
                *คุณแน่ใจที่จะยืนยันการเลือกบ้านนี้ใช่หรือไม่?
              </p>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default BaanButtonsSection;
