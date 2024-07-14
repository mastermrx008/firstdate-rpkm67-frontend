// BaanCardsSection.tsx
import React from 'react';
import BaanCard from '../Card/BaanCard';
import { BaanSelection } from '@/types/BaanSelection';

interface BaanCardsSectionProps {
  allSelections: number[];
  selectedBaan: BaanSelection[] | null;
  mode: 'select' | 'edit';
}

const BaanCardsSection: React.FC<BaanCardsSectionProps> = ({
  allSelections,
  selectedBaan,
  mode,
}) => {
  const topSelections = allSelections.slice(0, 3);
  const bottomSelections = allSelections.slice(3);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-center space-x-4">
        {topSelections.map((order) => {
          const baan = selectedBaan?.find((b) => b.order === order);
          return (
            <BaanCard
              key={order}
              number={order}
              imageSrc={baan ? 'bg-1.svg' : undefined}
              title={baan ? `บ้านที่ ${order}` : undefined}
              isEmpty={!baan}
              mode={mode}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center space-x-4">
        {bottomSelections.map((order) => {
          const baan = selectedBaan?.find((b) => b.order === order);
          return (
            <BaanCard
              key={order}
              number={order}
              imageSrc={baan ? 'bg-1.svg' : undefined}
              title={baan ? `บ้านที่ ${order}` : undefined}
              isEmpty={!baan}
              mode={mode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BaanCardsSection;
