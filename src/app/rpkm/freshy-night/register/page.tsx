'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import FRESHY_POSTER from '@public/rpkm/freshy-night/freshy_poster.svg';

export default function Register() {
  const { button } = modalStyles['red'];

  return (
    <div className="min-h-screen w-full grid place-items-center relative">
      <Base
        className="p-[10%] h-[calc(50vw*(801/371))] gap-4"
        withBus={true}
      >
        <span className="drop-shadow-md font-sopha text-6xl text-rpkm-yellow text-stroke text-stroke-rpkm-blue -my-3">
          FRESHY NIGHT
        </span>
        <main className="h-full w-full rounded-xl">
          <Image
            src={FRESHY_POSTER}
            alt="poster"
            width={0}
            height={0}
            layout="responsive"
            objectFit="contain"
            className="rounded-xl"
          />
        </main>
        <button
          onClick={() => console.log('Fuck you')}
          className="p-1 inv-rad inv-rad-2 bg-rpkm-yellow"
        >
          <Link href="/rpkm/freshy-night/rules">
            <div
              className={cn(
                'py-[0.3rem] inv-rad px-6 inv-rad-2',
                button['accept-background']
              )}
            >
              ลงทะเบียนเข้าร่วมงาน
            </div>
          </Link>
        </button>
      </Base>
    </div>
  );
}
