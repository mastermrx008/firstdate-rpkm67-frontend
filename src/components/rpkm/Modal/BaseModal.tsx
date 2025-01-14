import { cn } from '@/lib/utils';

import modalStyles from './ModalStyle';

interface ModalProps {
  variant: 'red' | 'blue' | 'black' | 'green';
  open: boolean;
  children: React.ReactNode;
}

/**
 * BaseModal component
 * @param variant - red | blue
 * @param open - boolean
 * @param children - ReactNode
 * @returns Styled modal component
 */
const BaseModal: React.FC<ModalProps> = ({ variant, open, children }) => {
  const { background } = modalStyles[variant];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="p-1 inv-rad inv-rad-3 bg-[#EAE3C3] min-w-[60%]">
        <div className={cn('inv-rad inv-rad-3 p-3', background)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
