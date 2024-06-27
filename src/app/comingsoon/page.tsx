import Image from 'next/image';
import Border from '@/components/Border';
import Back_To_Menu from '@/components/comingsoon/back_to_menu';
import Welcome from '@/components/welcome';
import comingsoon from '../../../public/comingsoon.svg';

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="transparent"
        className="flex justify-center items-center flex-col"
      >
        {' '}
        <Welcome />
        <h1 className="text-2xl text-center font-semibold text-project-light-gray mb-7">
          รับเพื่อนก้าวใหม่ 2024
        </h1>
        <Image
          src={comingsoon}
          alt="Coming Soon"
          className="w-64 h-14 mb-6"
        />
        <h1 className="text-xl text-center font-semibold text-project-light-gray mb-10">
          พร้อมให้ลงทะเบียน
          <br />
          ในวันที่ 18 กรกฎาคม 2567
        </h1>
        <Back_To_Menu />
      </Border>
    </main>
  );
}
