import React from 'react';
import TextModal from '@/components/stamp/modal/TextModal';

interface FavoriteClubModalProps {
  onClose: () => void;
}

const FavoriteClubModal: React.FC<FavoriteClubModalProps> = ({ onClose }) => {
  return (
    <TextModal
      title="คุณสนใจชมรมไหน?"
      placeholder="คำตอบ"
      onClose={onClose}
    >
      <h2 className="text-xl font-normal text-center mb-4">ชมรมภายใต้ อบจ.</h2>
    </TextModal>
  );
};

export default FavoriteClubModal;
