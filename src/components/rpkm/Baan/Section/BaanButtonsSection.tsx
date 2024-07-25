import React, { useState } from 'react';
import Button from '@/components/rpkm/Baan/Button/BaanButton';
import BaanEditButton from '@/components/rpkm/Baan/Button/BaanEditButton';
import { BaanSelection } from '@/types/BaanSelection';
import { useBaan } from '@/context/BaanContext';
import Modal from '@/components/rpkm/Modal/Modal';
import { useRouter } from 'next/navigation';
import alertImg from '@public/alert.svg';
import Image from 'next/image';
import BackToHomeBtn from '../../BackToHomeBtn';
import BaseModal from '../../Modal/BaseModal';
import ModalButton from '../../Modal/ModalButton';
import modalStyles from '../../Modal/ModalStyle';

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
  const [modalState, setModalState] = useState<
    'first-confirm' | 'second-confirm' | 'none'
  >('none');
  const router = useRouter();
  const handleConfirm = () => setModalState('first-confirm');
  const handleLastConfirm = () => {
    setModalState('none');
    onConfirm();
  };
  const handleFirstConfirm = () => {
    setModalState('second-confirm');
  };

  if (isConfirmed) return null;

  return (
    <>
      {mode === 'select' &&
        (!isLeader ? (
          <div className="text-rpkm-cream text-md">
            *คุณไม่สามารถแก้ไขบ้านที่เลือกได้
          </div>
        ) : !selectedBaan || selectedBaan.length === 0 ? (
          <Button
            content="เลือกบ้าน"
            onClick={() => router.push('/rpkm/baan/baan-select')}
          />
        ) : (
          <BaanEditButton
            onClick={() => router.push('/rpkm/baan/baan-select')}
          />
        ))}
      {mode === 'edit' && (
        <>
          {selectedBaan && selectedBaan.length < 5 && (
            <div className="text-xs text-rpkm-cream">
              *กรุณาเลือกให้ครบ 5 บ้าน
            </div>
          )}
          <div className="text-rpkm-green">*ระบบจะทำการบันทึกบ้านอัตโนมัติ</div>
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
          <div className="flex gap-[4vw] items-center">
            {mode == 'edit' && <BackToHomeBtn />}
            <Button
              content="ยืนยันการเลือกบ้าน"
              onClick={handleConfirm}
              disabled={!!(selectedBaan && selectedBaan.length < 5)}
            />
          </div>
          <Modal
            variant="red"
            open={modalState == 'first-confirm'}
            setOpen={() => setModalState('none')}
            callBackFunction={handleFirstConfirm}
          >
            <div className="flex items-center justify-center max-w-80 flex-col space-y-2 p-4">
              <Image
                src={alertImg}
                alt="alert-img"
                className="aspect-auto"
              />
              <h1 className="text-3xl font-semibold text-white">
                ยืนยันการเลือกบ้าน
              </h1>
              <p className="text-white text-sm text-center">
                *เมื่อยืนยันแล้วจะไม่สามารถแก้ไขรายการของบ้าน
                และจะไม่สามารถจับคู่กับเพื่อนได้อีก
              </p>
            </div>
          </Modal>
          <BaseModal
            variant="red"
            open={modalState == 'second-confirm'}
          >
            <div className="flex items-center justify-center max-w-80 flex-col space-y-2 p-4">
              <Image
                src={alertImg}
                alt="alert-img"
                className="aspect-auto"
              />
              <h1 className="text-3xl font-semibold text-white">
                โปรดอ่านอีกครั้ง!!!
              </h1>
              <p className="text-white text-sm text-center">
                *เมื่อยืนยันแล้วจะไม่สามารถแก้ไขรายการของบ้าน
                และจะไม่สามารถจับคู่กับเพื่อนได้อีก
              </p>
            </div>
            <div className="flex flex-row gap-x-3 justify-center mt-3">
              {(() => {
                const { button } = modalStyles['red'];
                return (
                  <>
                    <ModalButton
                      callBackFunction={handleLastConfirm}
                      borderClassName={button['accept-border']}
                      backgroundClassName={button['accept-background']}
                    >
                      ยืนยัน
                    </ModalButton>
                    <ModalButton
                      callBackFunction={() => setModalState('none')}
                      borderClassName={button['cancel-border']}
                      backgroundClassName={button['cancel-background']}
                    >
                      ยกเลิก
                    </ModalButton>
                  </>
                );
              })()}
            </div>
          </BaseModal>
        </>
      )}
    </>
  );
};

export default BaanButtonsSection;
