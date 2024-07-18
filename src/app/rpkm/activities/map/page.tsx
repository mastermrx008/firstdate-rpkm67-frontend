import Image from 'next/image';

import Navbar from '@/components/rpkm/Navbar';

import BackButton from '@public/rpkm/activities/back.svg';

const page = () => {
  return (
    <section className="min-h-screen bg-[url('/rpkm/activities/small-background.png')] bg-cover bg-[#EAE3C3] text-black">
      <Navbar />
      <a href="/rpkm/activities/home">
        <Image
          src={BackButton}
          alt="back"
          className="w-auto pt-3 pl-3"
        />
      </a>
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-y-1">
          <h1
            className="font-sopha text-[20vh] text-rpkm-pink"
            style={{
              textShadow:
                '1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000',
            }}
          >
            แผนที่
          </h1>
          <h2
            className="font-sopha text-[6vh] text-rpkm-green tracking-wider -translate-y-20"
            style={{
              textShadow:
                '1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000',
            }}
          >
            ข้อมูลที่จัดแต่ละกิจกรรม
          </h2>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center w-[90vw] h-[90vw] bg-black"></div>
      </div>
      <div className="font-sopha text-center text-xl mt-2">ทดสอบ</div>
    </section>
  );
};

export default page;
