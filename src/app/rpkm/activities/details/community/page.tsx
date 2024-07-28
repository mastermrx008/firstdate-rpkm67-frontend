import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/rpkm/Navbar';
import ActivityButton from '@/components/rpkm/Activities/ActivityButton';

import BackButton from '@public/rpkm/activities/back.svg';
import CommunityBanner from '@public/rpkm/activities/communitybanner-yellow.png';
import CommunityImage from '@public/rpkm/activities/communityinfo.png';

const Page = () => {
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
          src={CommunityBanner}
          className="w-[60vw]"
          alt="banner"
        />
      </div>
      <div className="flex justify-center">
        <Image
          src={CommunityImage}
          alt="activity image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '60vw', height: '60vw' }}
          className="my-4"
        />
      </div>
      <div className="drop-shadow-lg flex justify-center">
        <div className="bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131] w-[80vw] h-full">
          <h3 className="font-semibold">กิจกรรมชุมชนคืออะไร</h3>
          <p>
            &emsp;กิจกรรมชุมชน เป็นกิจกรรมที่จัดขึ้นเพื่อให้นิสิตใหม่
            ได้ทำความรู้จักกับร้านค้า
            และชุมชนบริเวณโดยรอบจุฬาลงกรณ์มหาวิทยาลัยให้มากขึ้น
            ผ่านกิจกรรมการสะสมแต้มผ่าน Line OA
            ด้วยการร่วมทำกิจกรรมถ่ายรูปเช็คอิน ตะลุยทานของอร่อย ๆ รอบมอ
            ทำกิจกรรมอาสาเพื่อพัฒนาสังคม
            โดยร้านค้าและสถานที่ที่อยู่ในกิจกรรมมีตั้งแต่ร้านเก่าแก่ที่อยู่คู่จุฬาฯมาอย่างยาวนานตลอดจนร้านค้าใหม่
            ๆ ที่เพิ่งเกิดขึ้นและน่าไปเช็คอิน บอกได้เลยว่า เหล่าเฟรชชี่ CU108
            พลาดไม่ได้สักร้านเลยแน่นอน เพิ่มเพื่อนไลน์ OA และรับบัตรสะสมแต้มกัน
            เริ่มทำกิจกรรมกันได้เลย
          </p>
          <h3 className="font-semibold pt-2">วิธีร่วมกิจกรรมชุมชน</h3>
          <p>
            สามารถทำได้ง่าย ๆ เพียง 3 ขั้นตอน
            <ol className="pl-5">
              <li>
                1.ติดตามข้อมูลร้านค้าและสถานที่เข้าร่วมกิจกรรม ผ่าน IG:
                rubpuenkaomai2024 หรือสังเกตโปสเตอร์กิจกรรมชุมชน
                ตามร้านค้าที่เข้าร่วมรายการ
              </li>
              <li>2.เพิ่มเพื่อน ไลน์ OA เพื่อรับบัตรสะสมแต้ม</li>
              <li>
                3.ร่วมกิจกรรมกับทางร้านค้า ตะลุยทานของกินเด็ดๆ
                หรือไปทำกิจกรรมอาสากับสถานที่ที่ร่วมกิจกรรม
                แล้วสแกนรับแต้มได้เลย
              </li>
            </ol>
          </p>
          <h3 className="font-semibold pt-2"> การแลกรับของที่ระลึก</h3>
          <p>
            &emsp;การแลกแต้มเพื่อรับของที่ระลึก เมื่อเเต้มครบ 10 เเต้ม
            สามารถกดเเลกเป็นคูปองไว้ได้เลย เมื่อจะเเลกคูปอง
            ก็ให้ไปที่บูธกิจกรรมชุมชนในงานรับเพื่อนก้าวใหม่ (3-4 สิงหาคม)
            เเละศาลเจ้าเเม่ทับทิมสะพานเหลือง
            หรือร้านประชาธิปไตยกินได้(ตลอดปีการศึกษา)
            กดเเลกคูปองเเละนำให้คนในบูธ(บูธกิจกรรมในงานรับเพื่อนก้าวใหม่)
            ผู้ดูเเลศาลเจ้าเเม่ทับทิมสะพานเหลือง
            หรือพนักงานร้านประชาธิปไตยกินได้(ตลอดปีการศึกษา) เเล้วบอกว่าแลกแต้ม
            เท่านี้เราก็จะได้เป็นเจ้าของของที่ระลึกของกิจกรรมนี้แล้ว
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-10 pt-3 drop-shadow-xl">
        <ActivityButton
          href="https://lin.ee/i9Ezhg7"
          borderClassName="bg-rpkm-cream"
          backgroundClassName="bg-rpkm-green text-center text-lg text-rpkm-gray w-[60vw]"
          target="_self"
        >
          Line OA ของกิจกรรม
        </ActivityButton>
      </div>
    </section>
  );
};

export default Page;
