import { cn } from '@/lib/utils';

interface ModalButtonProps {
  callBackFunction: (params: unknown) => void;
  borderClassName: string;
  backgroundClassName: string;
  children: React.ReactNode;
}

const ModalButton: React.FC<ModalButtonProps> = ({
  callBackFunction,
  borderClassName,
  backgroundClassName,
  children,
}) => {
  return (
    <button
      onClick={callBackFunction}
      className={cn('p-1 inv-rad inv-rad-2 w-2/5', borderClassName)}
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
