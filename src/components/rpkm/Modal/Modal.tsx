import BaseModal from '@/components/rpkm/Modal/BaseModal';
import ModalButton from '@/components/rpkm/Modal/ModalButton';

import modalStyles from './ModalStyle';

interface ModalProps {
  variant: 'red' | 'blue';
  open: boolean;
  setOpen: (open: boolean) => void;
  callBackFunction: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  variant,
  open,
  setOpen,
  callBackFunction,
  children,
}) => {
  const { button } = modalStyles[variant];

  if (!open) return null;

  return (
    <BaseModal
      variant={variant}
      open={open}
    >
      {children}
      <div className="flex flex-row gap-x-3 justify-center mt-3">
        <ModalButton
          callBackFunction={() => setOpen(false)}
          borderClassName={button['cancel-border']}
          backgroundClassName={button['cancel-background']}
        >
          ยกเลิก
        </ModalButton>
        <ModalButton
          callBackFunction={callBackFunction}
          borderClassName={button['accept-border']}
          backgroundClassName={button['accept-background']}
        >
          ยืนยัน
        </ModalButton>
      </div>
    </BaseModal>
  );
};

export default Modal;
