'use client';

import Image from 'next/image';

import Border from '@/components/Border';

import Logo from '@public/FIrst Date Logo.svg';
import Divider from '@public/ending/divider.png';
import SproutImage from '@public/ending/sprout.png';
import DownloadIcon from '@public/ending/download.svg';

export default function Ending() {
  const handleDownload = () => {
    return;
  };
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border variant="white">
        <Image
          src={Logo}
          alt="logo"
          className="w-44"
        />
        <h1 className="font-season italic mt-2 text-2xl">My card</h1>
        <Image
          src={Divider}
          alt="divider"
          className="w-44 m-3"
        />
        <h2 className="font-season italic mb-2 text-2xl">Sprout</h2>
        <Image
          src={SproutImage}
          alt="result image"
          className="w-44"
        />
        <div className="flex flex-col justify-center w-4/5 text-center mt-2 text-sm">
          <p>
            “ไม่ว่าคุณจะเป็นคนแบบไหน ผ่านเรื่องอะไรมาบ้าง
            ยินดีต้อนรับเข้าสู่จุฬาลงกรณ์มหาวิทยาลัย
          </p>
          <p>พื้นที่ที่จะให้คุณได้ค้นหา สร้างตัวตน </p>
          <p>และเบ่งบานในแบบของคุณ”</p>
        </div>
        <div className="flex justify-center w-2/3 flex-col gap-y-2 mt-4 text-xl">
          <button
            onClick={handleDownload}
            className="w-full border rounded-md border-project-fuchsia py-2 flex flex-row items-center justify-center"
          >
            <Image
              src={DownloadIcon}
              alt="download icon"
            />
            <p className="text-project-fuchsia">บันทึกการ์ด</p>
          </button>
          <a
            href="/"
            className="w-full bg-project-pink rounded-md py-2 text-center"
          >
            กลับไปเดินทางต่อ
          </a>
        </div>
      </Border>
    </main>
  );
}
