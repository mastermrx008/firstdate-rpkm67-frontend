import { StaffHomeMode } from '@/app/staff/home/page';

interface ModeInterface {
  variant: StaffHomeMode;
  mode: StaffHomeMode;
  handleOnClick: (mode: StaffHomeMode) => void;
}

export default function Mode(props: ModeInterface) {
  const { variant, mode, handleOnClick } = props;
  return (
    <button
      onClick={() => handleOnClick(variant)}
      className={`w-7/12 rounded-3xl h-7 text-center ${mode === variant ? 'text-white bg-black' : 'text-black bg-white'}`}
    >
      {variant}
    </button>
  );
}
