import CongratsPopup from '@/components/congratulation/CongratsPopup';
import NotificationPopup from '@/components/congratulation/NotificationPopup';

interface CongratsModalProps {
  isOpen: boolean,
  score: number;
  handleBack: () => void;
  handleSubmit: () => void;
}

const CongratsModal: React.FC<CongratsModalProps> = ({
  isOpen,
  score,
  handleBack,
  handleSubmit,
}) => {
  const isEnough = score >= 6;
  const modalClasses = `fixed inset-0 z-50 overflow-y-auto justify-center flex  bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`;

  const modalContentClasses = `relative w-80 h-80 bg-white rounded-lg shadow-lg`;
  return (
    <div className={`${modalClasses}`}>
      <div className={`w-[calc(100vh*(72/156)*(9/10))] h-full items-center flex`}>
        {isEnough ? (
          <CongratsPopup
            score={score}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
          />
        ) : (
          <NotificationPopup handleBack={handleBack} />
        )}
      </div>
    </div>

  );
};

export default CongratsModal;
