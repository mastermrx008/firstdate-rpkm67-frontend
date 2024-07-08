import React from 'react';
import TextModal from '@/components/stamp/modal/TextModal';

interface OpinionModalProps {
  onClose: () => void;
}

const OpinionModal: React.FC<OpinionModalProps> = ({ onClose }) => {
  return (
    <TextModal
      title="“คุณคิดว่าการทำกิจกรรมในมหาวิทยาลัยจะช่วยส่งเสริมทักษะให้กับตนเองได้อย่างไร?”"
      placeholder="คำตอบ"
      onClose={onClose}
    />
  );
};

export default OpinionModal;
