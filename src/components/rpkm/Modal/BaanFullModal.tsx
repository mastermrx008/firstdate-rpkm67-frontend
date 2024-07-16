import BaseModal from '@/components/rpkm/Modal/BaseModal';
import ModalButton from '@/components/rpkm/Modal/ModalButton';

import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import { useEffect } from 'react';

interface BaanFullModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

/**
 * BaanFullModal component
 * @param open - boolean
 * @param setOpen - function
 */
export default function FullBannModal({ open, setOpen }: BaanFullModalProps) {
  useEffect(() => {
    console.log('KJINKJIHKOJI', open);
  }, [open]);
  return (
    <BaseModal
      variant={'black'}
      open={open}
    >
      <div className="flex flex-col items-center text-white font-athiti text-2xl font-semibold">
        <p>คุณเลือกบ้านครบแล้ว</p>
        <p>กรุณานำบ้านออกเพื่อเลือกใหม่</p>
      </div>
      <div className="flex flex-row gap-x-3 justify-center mt-7">
        <ModalButton
          callBackFunction={() => setOpen(false)}
          borderClassName={modalStyles.blue.button['cancel-border']}
          backgroundClassName={modalStyles.blue.button['cancel-background']}
        >
          ยกเลิก
        </ModalButton>
        <ModalButton
          callBackFunction={() => setOpen(false)}
          borderClassName={modalStyles.blue.button['accept-border']}
          backgroundClassName={modalStyles.blue.button['accept-background']}
        >
          ตกลง
        </ModalButton>
      </div>
    </BaseModal>
  );
}
