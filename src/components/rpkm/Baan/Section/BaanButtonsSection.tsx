// BaanButtonsSection.tsx
import React from 'react';
import Button from '@/components/rpkm/Baan/Button/BaanButton';
import BaanEditButton from '@/components/rpkm/Baan/Button/BaanEditButton';
import { BaanSelection } from '@/types/BaanSelection';

interface BaanButtonsSectionProps {
  mode: 'select' | 'edit';
  isLeader: boolean;
  selectedBaan: BaanSelection[] | null;
}

const BaanButtonsSection: React.FC<BaanButtonsSectionProps> = ({
  mode,
  isLeader,
  selectedBaan,
}) => {
  if (mode === 'select') {
    return !selectedBaan || selectedBaan.length === 0 ? (
      <Button
        content="เลือกบ้าน"
        onClick={() => {
          console.log('บ้านถูกเลือกแล้ว');
        }}
      />
    ) : isLeader ? (
      <BaanEditButton
        onClick={() => {
          console.log('บ้านถูกเลือกแล้ว');
        }}
      />
    ) : (
      <div className="text-rpkm-cream text-md">
        *คุณไม่สามารถแก้ไขบ้านที่เลือกได้
      </div>
    );
  }

  if (mode === 'edit') {
    return (
      <>
        {selectedBaan && selectedBaan.length < 5 && (
          <div className="text-xs text-rpkm-cream">
            *กรุณาเลือกให้ครบ 5 บ้าน
          </div>
        )}
        <Button
          content="ยืนยันการเลือกบ้าน"
          onClick={() => {
            console.log('บ้านถูกเลือกแล้ว');
          }}
        />
      </>
    );
  }

  return null;
};

export default BaanButtonsSection;
