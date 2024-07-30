'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import Card from '@/components/rpkm/freshy-night/rules/Card';
import MIC from '@public/rpkm/freshy-night/mic.svg';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
interface RulesData {
  imgUrl?: string;
  description?: string;
}
const setOfRules: RulesData[] = [
  { description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
];
export default function Rules() {
  const { button } = modalStyles['red'];

  return (
    <div className="min-h-screen w-full grid place-items-center relative">
      <Base
        className="p-[10%] h-[calc(50vw*(801/371))] gap-6"
        withBus={true}
      >
        <section className="drop-shadow-lg relative font-sopha text-stroke text-stroke-rpkm-blue -mt-12 -ml-8">
          <span className="text-9xl text-rpkm-green">กฏ</span>
          <span className="text-8xl text-rpkm-yellow">กติกา</span>
          <Image
            src={MIC}
            alt="Microphone"
            width={60}
            height={60}
            className="absolute top-[30%] left-[95%]"
          />
          <span className="absolute text-7xl text-rpkm-pink left-[30%] w-5/6 top-[60%]">
            ภายในงาน
          </span>
        </section>

        <div className="grid grid-cols-3 grid-rows-2 place-items-center w-full h-full gap-4">
          {setOfRules.map((e: RulesData, i: number) => (
            <Card
              imgUrl={e.imgUrl}
              description={e.description}
              num={i + 1}
              key={i}
            />
          ))}
        </div>

        <Link
          href="/rpkm/freshy-night/confirm-register"
          className="p-1 inv-rad inv-rad-2 bg-rpkm-yellow"
        >
          <div
            className={cn(
              'py-[0.3rem] px-6 inv-rad inv-rad-2',
              button['accept-background']
            )}
          >
            ยอมรับข้อตกลง
          </div>
        </Link>
      </Base>
    </div>
  );
}
