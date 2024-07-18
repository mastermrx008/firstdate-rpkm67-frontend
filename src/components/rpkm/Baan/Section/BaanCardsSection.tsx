import React from 'react';
import BaanCard from '../Card/BaanCard';
import { BaanSelection } from '@/types/BaanSelection';
import { useBaan } from '@/context/BaanContext';
import imagePlaceHolder from '@public/bg-1.svg';
interface BaanCardsSectionProps {
  allSelections: number[];
  selectedBaan: BaanSelection[] | null;
  mode: 'select' | 'edit';
  isConfirmed: boolean;
  onClick?: () => void;
}

const BaanCardsSection: React.FC<BaanCardsSectionProps> = ({
  allSelections,
  selectedBaan,
  mode,
  isConfirmed,
  onClick,
}) => {
  const { removeBaanSelection } = useBaan();

  const renderCards = (selections: number[]) => {
    return selections.map((order) => {
      const baan = selectedBaan?.find((b) => b.order === order);
      return (
        <BaanCard
          key={order}
          number={order}
          imageSrc={baan ? imagePlaceHolder : undefined}
          title={baan ? `บ้านที่ ${order}` : undefined}
          isEmpty={!baan}
          mode={mode}
          isConfirmed={isConfirmed}
          onDelete={() => baan && removeBaanSelection(baan.baanId)}
          onClick={onClick}
        />
      );
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-center space-x-4">
        {renderCards(allSelections.slice(0, 3))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        {renderCards(allSelections.slice(3))}
      </div>
    </div>
  );
};

export default BaanCardsSection;
