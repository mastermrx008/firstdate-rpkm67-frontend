import Border from '@/components/Border';
import SGCUIcon from '@/assets/logo/sgcu.svg';
import Image from 'next/image';

export default function Register() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="dark-pink"
        className="flex flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center">
          <Image
            src={SGCUIcon}
            alt="sgcu-icon"
            className="mt-4"
          />
          <h1 className="text-6xl font-bold text-center text-white font-season italic mt-16 drop-shadow-text">
            Welcome,
          </h1>
          <h2 className="text-5xl text-center text-white font-season italic mt-4 drop-shadow-text">
            CU108
          </h2>

          <h3 className="text-xl text-center text-white font-medium mt-6">
            In honor of our wander,
          </h3>
          <h3 className="text-xl text-center text-white font-medium">
            you are the answer.
          </h3>
        </div>
        <div>
          <button className="w-64 h-12 rounded-md bg-white shadow-[0px_2px_4px_#00000026]">
            ลงทะเบียน
          </button>
          <p className="text-md text-center font-medium text-black mt-2">
            *โปรดใช้Emailของจุฬาฯในการลงทะเบียน*
          </p>
        </div>
        <div className="mb-36">
          <p className="text-lg text-center font-semibold text-black">
            เคยลงทะเบียนมาแล้ว?
          </p>
          <p className="text-lg text-center font-semibold text-black">
            เข้าสู่ระบบ
          </p>
        </div>
      </Border>
    </main>
  );
}
