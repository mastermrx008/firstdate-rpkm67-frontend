'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/rpkm/Navbar';
import ActivityButton from '@/components/rpkm/Activities/ActivityButton';

import BackButton from '@public/rpkm/activities/back.svg';
import BaanImage from '@public/rpkm/activities/baanbackground.png';

const Page = () => {
  const [selectBannAble, setSelectBannAble] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const eventTime = new Date('2024-07-24T23:59:59+07:00');
      if (currentTime <= eventTime) {
        setSelectBannAble(true);
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  return (
    <section className="min-h-screen bg-[url('/rpkm/activities/smaller-background.png')] bg-cover bg-[#EAE3C3] text-black">
      <Navbar />
      <Link href="/rpkm/activities/home">
        <Image
          src={BackButton}
          alt="back"
          className="w-auto pt-3 pl-3"
        />
      </Link>
      <div className="flex justify-center">
        <Image
          src={BaanImage}
          alt="activity image"
          width={0}
          height={0}
          priority={true}
          className="my-4 object-cover"
          style={{ width: '60vw', height: '60vw' }}
        />
      </div>
      <div className="drop-shadow-lg flex justify-center">
        <div className="bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131] w-[80vw] h-full">
          <p>
            &emsp;กิจกรรมสานสัมพันธ์นิสิตใหม่ CU108
            ที่จัดขึ้นผ่านกิจกรรมบ้านรับเพื่อน
            โดยสามารถเลือกบ้านรับเพื่อนที่สนใจและมาเข้าร่วมกิจกรรมที่จะเกิดขึ้นอย่างมากมายภายในบ้านรับเพื่อน
            อีกทั้งยังมีกิจกรรมสันโต้ที่จะทำให้ทุกคนได้พบกับเพื่อนต่างบ้านและได้ทำกิจกรรมร่วมกัน
            นอกจากจะได้รับความสนุกสนานแล้วก็ยังได้รู้จักเพื่อนใหม่อีกด้วย
          </p>
        </div>
      </div>
      {selectBannAble && (
        <div className="flex justify-center pb-10 pt-3 drop-shadow-xl">
          <ActivityButton
            href="/rpkm/baan/home"
            borderClassName="bg-rpkm-cream"
            backgroundClassName="bg-rpkm-red text-center text-lg text-rpkm-cream w-[60vw]"
            target="_self"
          >
            ลงทะเบียนบ้าน
          </ActivityButton>
        </div>
      )}
    </section>
  );
};

export default Page;
