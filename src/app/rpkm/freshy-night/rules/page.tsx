'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
const setOfRules = [
  { image: '', detail: 'details' },
  { image: '', detail: 'details' },
  { image: '', detail: 'details' },
  { image: '', detail: 'details' },
  { image: '', detail: 'details' },
  { image: '', detail: 'details' },
];
export default function Rules() {
  const { button } = modalStyles['blue'];

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base className="p-[10%] h-[calc(60vw*(801/371))] gap-6">
        <h1>กฏกติกาภายในงาน</h1>
        <ModalButton
          callBackFunction={() => console.log('Fuck you')}
          borderClassName={button['accept-border']}
          backgroundClassName={button['accept-background']}
        >
          ลทบ
        </ModalButton>
      </Base>
    </div>
  );
}
