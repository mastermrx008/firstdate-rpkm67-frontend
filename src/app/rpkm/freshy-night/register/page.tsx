'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import { cn } from '@/lib/utils';

export default function Register() {
  const { button } = modalStyles['red'];

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base
        className="p-[10%] h-[calc(70vw*(801/371))] gap-6"
        withBus={true}
      >
        <span className="font-sopha text-6xl text-rpkm-yellow">
          FRESHY NIGHT
        </span>
        <main className="bg-rpkm-silver h-full w-full rounded-xl"></main>
        <button
          onClick={() => console.log('Fuck you')}
          className="p-1 inv-rad inv-rad-2 bg-rpkm-yellow"
        >
          <div
            className={cn(
              'py-[0.3rem] inv-rad px-6 inv-rad-2',
              button['accept-background']
            )}
          >
            ลงทะเบียนเข้าร่วมงาน
          </div>
        </button>
      </Base>
    </div>
  );
}
