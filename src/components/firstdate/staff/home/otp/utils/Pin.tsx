import { PinDTO } from '@/dtos/pinDTO';
import { Icon } from '@iconify/react/dist/iconify.js';

interface PinProps {
  otp: PinDTO;
  index: number;
  handleClick(ind: number): void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const activityName: any = {
  'workshop-1': 'Workshop x onder',
  'workshop-2': 'Giving and Talking',
  'workshop-3': 'The jewel',
  'workshop-4': 'Your pleasing',
  'workshop-5': "Object d'art",
};

export default function Pin(props: PinProps) {
  const { otp, index, handleClick } = props;
  return (
    <section className="flex w-full items-center justify-between">
      <div className="flex flex-col justify-evenly">
        <h1>{index < 5 ? activityName[otp.activity_id] : otp.activity_id}</h1>
        <h1 className="text-4xl ">
          {otp.code.substring(0, 3)} {otp.code.substring(3, 6)}
        </h1>
      </div>
      <div>
        {index < 5 && (
          <Icon
            icon="tabler:reload"
            className="w-6 h-6 text-black"
            onClick={() => handleClick(index)}
          />
        )}
      </div>
    </section>
  );
}
