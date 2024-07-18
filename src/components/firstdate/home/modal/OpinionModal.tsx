import React, { useState } from 'react';
import TextModal from '@/components/firstdate/home/modal/TextModal';
import toast from 'react-hot-toast';

interface OpinionModalProps {
  activityId: string;
  onClose: () => void;
  onSubmit: (activityId: string, userInput: string) => void; // Add onSubmit prop
}

const OpinionModal: React.FC<OpinionModalProps> = ({
  activityId,
  onClose,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    if (inputValue.length < 1) {
      return toast.error('กรุณากรอกข้อมูล');
    }
    onSubmit(activityId, inputValue);
    onClose();
  };

  return (
    <TextModal
      title="คุณคิดว่าการทำกิจกรรมในมหาวิทยาลัยจะช่วยส่งเสริมทักษะให้กับตนเองได้อย่างไร?"
      placeholder="คำตอบ"
      onClose={onClose}
      value={inputValue}
      onChange={handleInputChange}
      onClick={handleConfirm}
    />
  );
};

export default OpinionModal;
