'use client';
import Button from '@/components/rpkm/BaanSelect/Button/BaanButton';
import BaanEmpty from '@/components/rpkm/BaanSelect/BaanEmpty';
import BaanCard from '@/components/rpkm/BaanSelect/BaanCard';
import BaanEditButton from '@/components/rpkm/BaanSelect/Button/BaanEditButton';
import { useBaan } from '@/context/BaanContext';
import Spinner from '@/components/Spinner';

const BaanSelect = () => {
  const { selectedBaan, isLoading } = useBaan();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading) {
    console.log('BaanSelect selectedBaan:', selectedBaan);
  }

  return (
    <div className="flex flex-col items-center bg-zinc-800 w-80 h-auto p-5 space-y-10">
      <h1 className="text-xl text-amber-100 font-bold">บ้านที่เลือกไว้</h1>
      <div className="flex items-center justify-center flex-col space-y-8">
        {!selectedBaan || selectedBaan.length === 0 ? (
          <BaanEmpty />
        ) : (
          <div className="flex items-center justify-center flex-col space-y-4">
            <div className="flex items-center justify-center space-x-2">
              {selectedBaan.slice(0, 3).map((baan, index) => (
                <BaanCard
                  key={baan.baanId}
                  number={index + 1}
                  imageSrc="bg-1.svg"
                  title={`บ้านที่ ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-center space-x-2">
              {selectedBaan.slice(3).map((baan, index) => (
                <BaanCard
                  key={baan.baanId}
                  number={index + 4}
                  imageSrc="bg-1.svg"
                  title={`บ้านที่ ${index + 4}`}
                />
              ))}
            </div>
          </div>
        )}
        {!selectedBaan || selectedBaan.length === 0 ? (
          <Button
            content="เลือกบ้าน"
            onClick={() => {
              console.log('บ้านถูกเลือกแล้ว');
            }}
          />
        ) : (
          <BaanEditButton
            onClick={() => {
              console.log('บ้านถูกเลือกแล้ว');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BaanSelect;
