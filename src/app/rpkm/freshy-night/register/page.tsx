'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import ModalButton from '@/components/rpkm/Modal/ModalButton';

export default function Register() {
  const { button } = modalStyles['blue'];

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base className="p-[10%] h-[calc(60vw*(801/371))] gap-6">
        <h1>FRESHY NIGHT</h1>
        <main className="bg-rpkm-grey h-full w-4/5 rounded-xl"></main>
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
