import CongratsPopup from '@/components/congratulation/CongratsPopup';
import NotificationPopup from '@/components/congratulation/NotificationPopup';

interface CongratsModalProps {
  isOpen: boolean;
  score: number;
}

const CongratsModal: React.FC<CongratsModalProps> = ({
  isOpen,
  score,
}) => {
  const isEnough = score >= 6;
  const modalClasses = `fixed inset-0 z-50 overflow-y-auto justify-center flex  bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  return (
    <div className={`${modalClasses}`}>
      <div
        className={`w-[calc(100vh*(72/156)*(9/10))] h-full items-center flex shadow-lg`}
      >
        {isEnough ? (
          <CongratsPopup
            score={score}
          />
        ) : (
          <NotificationPopup/>
        )}
      </div>
    </div>
  );
};

export default CongratsModal;
