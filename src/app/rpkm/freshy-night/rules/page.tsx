'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
import Card from '@/components/rpkm/freshy-night/rules/Card';
import { cn } from '@/lib/utils';
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
  const { button } = modalStyles['blue'];

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base className="p-[10%] h-[calc(60vw*(801/371))] gap-6">
        <h1 className="font-sarun text-6xl">กฏกติกาภายในงาน</h1>
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

        <button
          onClick={() => console.log('Fuck you')}
          className={cn('p-1 inv-rad inv-rad-2', button['accept-border'])}
        >
          <div
            className={cn(
              'py-[0.3rem] px-2 inv-rad inv-rad-2',
              button['accept-background']
            )}
          >
            ยอมรับข้อตกลง
          </div>
        </button>
      </Base>
    </div>
  );
}
