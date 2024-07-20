import React, { useCallback } from 'react';
import BaanCard from '../Card/BaanCard';
import { BaanSelection } from '@/types/BaanSelection';
import { useBaan } from '@/context/BaanContext';
import { baanInfos } from '../baanInfos';
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
  const { removeBaanSelection, setOrder } = useBaan();

  const handleOnClickBaan = useCallback(
    (order: number) => () => {
      setOrder(order);
      onClick && onClick();
    },
    [setOrder, onClick]
  );

  const renderCards = (selections: number[]) => {
    return selections.map((order) => {
      const baan = selectedBaan?.find((b) => b.order === order);
      const info = baanInfos.find((b) => b.name.en == baan?.baanId);

      return (
        <BaanCard
          key={order}
          number={order}
          imageSrc={info ? info.logo : undefined}
          title={info ? info.name.en : undefined}
          isEmpty={!baan}
          mode={mode}
          isConfirmed={isConfirmed}
          onDelete={() => baan && removeBaanSelection(baan.baanId)}
          onClick={handleOnClickBaan(order)}
        />
      );
    });
  };

  return (
    <div className="flex flex-col space-y-4 ">
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
