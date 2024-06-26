import Border from '@/components/Border';
import Back_To_Menu from '@/components/comingsoon/back_to_menu';

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border variant="transparent">
        <h1 className="text-2xl text-center font-semibold text-project-light-gray mt-36 mb-6">
          รับเพื่อนก้าวใหม่ 2024
        </h1>
        <h1 className="text-4xl text-center font-semibold text-project-light-gray mb-5">
          'Coming Soon'
        </h1>
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
