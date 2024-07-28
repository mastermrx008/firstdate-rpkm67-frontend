import { cn } from '@/lib/utils';

interface ModalButtonProps {
  callBackFunction: (params: unknown) => void;
  borderClassName: string;
  backgroundClassName: string;
  buttonWidth?: string | 'w-2/5';
  children: React.ReactNode;
}

/**
 * ModalButton component
 * @param callBackFunction - function
 * @param borderClassName - string
 * @param backgroundClassName - string
 * @param children - ReactNode
 * @returns Styled button component
 */
const ModalButton: React.FC<ModalButtonProps> = ({
  callBackFunction,
  borderClassName,
  backgroundClassName,
  buttonWidth,
  children,
}) => {
  return (
    <button
      onClick={callBackFunction}
      className={cn('p-1 inv-rad inv-rad-2', borderClassName, buttonWidth)}
    >
      <div
        className={cn(
          'py-[0.3rem] px-2 inv-rad inv-rad-2',
          backgroundClassName
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default ModalButton;
