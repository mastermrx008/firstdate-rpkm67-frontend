import { ModeInterface } from '@/types/staff/home/mode';

export default function Mode(props: ModeInterface) {
  return (
    <button
      onClick={() => props.handleClick(props.reference)}
      className={`w-7/12 rounded-3xl h-7 text-center ${props.reference === props.status ? 'text-white bg-black' : 'text-black bg-white'}`}
    >
      {props.message}
    </button>
  );
}
