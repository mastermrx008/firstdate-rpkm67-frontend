'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
import Card from '@/components/rpkm/freshy-night/rules/Card';
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
        <ModalButton
          callBackFunction={() => console.log('Fuck you')}
          borderClassName={button['accept-border']}
          backgroundClassName={button['accept-background']}
        >
          ยอม
        </ModalButton>
      </Base>
    </div>
  );
}
