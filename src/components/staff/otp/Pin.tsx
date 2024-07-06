import { OtpPinWithIndex } from '@/types/staff/pins';
import { Icon } from '@iconify/react/dist/iconify.js';
export default function Pin(props: OtpPinWithIndex) {
  return (
    <section className="flex w-full h-full items-center justify-between">
      <div className="flex flex-col justify-evenly">
        <h1>{props.otp.activity_id}</h1>
        <h1 className="text-4xl ">
          {props.otp.code.substring(0, 3)} {props.otp.code.substring(3, 6)}
        </h1>
      </div>
      <div>
        <Icon
          icon="tabler:reload"
          className="w-6 h-6 text-black"
          onClick={() => console.log('Hello')}
        />
      </div>
    </section>
  );
}
