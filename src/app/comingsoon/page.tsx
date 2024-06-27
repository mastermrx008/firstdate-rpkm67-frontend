import Border from '@/components/Border';
import Back_To_Menu from '@/components/comingsoon/back_to_menu';
import Welcome from '@/components/comingsoon/welcome';

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="transparent"
        className="relative"
      />{' '}
      <Welcome />
      <div className="absolute">
        <h1 className="text-2xl text-center font-semibold text-project-light-gray mb-6">
          รับเพื่อนก้าวใหม่ 2024
        </h1>
        <h1 className="text-4xl text-center text-project-light-gray mb-8 font-season italic font-bold">
          &#39;Coming Soon&#39;
        </h1>
        <h1 className="text-xl text-center font-semibold text-project-light-gray mb-10">
          พร้อมให้ลงทะเบียน
          <br />
          ในวันที่ 18 กรกฎาคม 2567
        </h1>
        <Back_To_Menu />
      </div>
    </main>
  );
}
