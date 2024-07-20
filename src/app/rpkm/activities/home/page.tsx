import Link from 'next/link';

import Navbar from '@/components/rpkm/Navbar';
import Banner from '@/components/rpkm/Activities/Banner';
import Card from '@/components/rpkm/Activities/Card';
// import ScrollSection from '@/components/rpkm/Activities/ScrollSection';
import Divider from '@/components/rpkm/Activities/Divider';

// import ActivitiesBanner from '@public/rpkm/activities/activities.png';
// import WalkRallyBanner from '@public/rpkm/activities/walkrally.png';
import CommunityBanner from '@public/rpkm/activities/community.png';
import BaanBanner from '@public/rpkm/activities/baan.png';

// import activities from '@/data/activities';

const page = () => {
  // const activitiesContent = activities.filter(
  //   (activity) => activity.category === 'activities'
  // );
  // const walkRallyContent = activities.filter(
  //   (activity) => activity.category === 'walkrally'
  // );

  return (
    <div className="min-h-screen bg-rpkm-pink">
      <Navbar />
      <section className="flex flex-col bg-[url('/rpkm/activities/background.png')] bg-rpkm-pink bg-cover bg-center">
        <div className="flex justify-center items-center w-full h-[22rem] bg-[url('/rpkm/activities/herobackground.png')] bg-cover bg-center bg-[#68A987] -translate-y-5"></div>
        <div className="w-full h-1 bg-white -translate-y-[1.25rem]"></div>
        <div className="flex justify-center -translate-y-[15vh]">
          <div className="flex flex-col items-center -translate-y-8">
            <h1
              className="font-sopha text-[20vh] text-rpkm-green tracking-wider"
              style={{
                textShadow:
                  '1.5px 1.5px 0 #313131, -1.5px -1.5px 0 #313131, 1.5px -1.5px 0 #313131, -1.5px 1.5px 0 #313131',
              }}
            >
              รับเพื่อน
            </h1>
            <h2
              className="font-sopha text-[14vh] text-project-yellow tracking-wider -translate-y-[15vh]"
              style={{
                textShadow:
                  '1.5px 1.5px 0 #313131, -1.5px -1.5px 0 #313131, 1.5px -1.5px 0 #313131, -1.5px 1.5px 0 #313131',
              }}
            >
              ก้าวใหม่
            </h2>
            <h2
              className="font-sopha text-[20vh] text-rpkm-red tracking-wider -translate-y-[33vh]"
              style={{
                textShadow:
                  '1.5px 1.5px 0 #EAE3C3, -1.5px -1.5px 0 #EAE3C3, 1.5px -1.5px 0 #EAE3C3, -1.5px 1.5px 0 #EAE3C3',
              }}
            >
              67
            </h2>
          </div>
        </div>
        <div className="-mt-[60vh]">
          {/* <Divider />
          <Banner image={ActivitiesBanner} />
          <ScrollSection
            cards={activitiesContent}
            className="w-[60vw]"
          />
          <Link
            className="text-sm font-semibold flex justify-end underline mr-4 mt-2"
            href="/rpkm/activities/activities"
          >
            ดูทั้งหมด
          </Link>
          <Divider />
          <Banner image={WalkRallyBanner} />
          <ScrollSection
            cards={walkRallyContent}
            className="w-[60vw]"
          />
          <Link
            className="text-sm font-semibold flex justify-end underline mr-4 mt-2"
            href="/rpkm/activities/walkrally"
          >
            ดูทั้งหมด
          </Link> */}
          <Divider />
          <Banner image={CommunityBanner} />
          <div className="justify-center flex">
            <Card
              name="กิจกรรมชุมชน"
              image="/rpkm/activities/communitybackground.png"
              imageWidth="70vw"
              imageHeight="70vw"
              content="กิจกรรมชุมชน เป็นกิจกรรมที่จัดขึ้นเพื่อให้นิสิตใหม่ ได้ทำความรู้จักกับร้านค้า และชุมชนบริเวณโดยรอบจุฬาลงกรณ์มหาวิทยาลัยให้มากขึ้น ผ่านกิจกรรมการสะสมแต้มผ่าน Line OA ด้วยการร่วมทำกิจกรรมถ่ายรูปเช็คอิน ตะลุยทานของอร่อย ๆ รอบมอ ทำกิจกรรมอาสาเพื่อพัฒนาสังคม โดยร้านค้าและสถานที่ที่อยู่ในกิจกรรมมีตั้งแต่ร้านเก่าแก่ที่อยู่คู่จุฬาฯมาอย่างยาวนานตลอดจนร้านค้าใหม่ ๆ ที่เพิ่งเกิดขึ้นและน่าไปเช็คอิน บอกได้เลยว่า เหล่าเฟรชชี่ CU108 พลาดไม่ได้สักร้านเลยแน่นอน เพิ่มเพื่อนไลน์ OA และรับบัตรสะสมแต้มกัน เริ่มทำกิจกรรมกันได้เลย"
              href="/rpkm/activities/details/community"
              className="w-[80vw]"
              contentClassName="line-clamp-3"
            />
          </div>
          <Link
            className="text-sm font-semibold flex justify-end underline mr-4 mt-2"
            href="/rpkm/activities/community"
          >
            ดูทั้งหมด
          </Link>
          <Divider />
          <Banner image={BaanBanner} />
          <div className="justify-center flex">
            <Card
              name="บ้านรับเพื่อน"
              image="/rpkm/activities/baanbackground.png"
              imageWidth="70vw"
              imageHeight="70vw"
              content="กิจกรรมสานสัมพันธ์นิสิตใหม่ CU108 ที่จัดขึ้นผ่านกิจกรรมบ้านรับเพื่อน โดยสามารถเลือกบ้านรับเพื่อนที่สนใจและมาเข้าร่วมกิจกรรมที่จะเกิดขึ้นอย่างมากมายภายในบ้านรับเพื่อน อีกทั้งยังมีกิจกรรมสันโต้ที่จะทำให้ทุกคนได้พบกับเพื่อนต่างบ้านและได้ทำกิจกรรมร่วมกัน นอกจากจะได้รับความสนุกสนานแล้วก็ยังได้รู้จักเพื่อนใหม่อีกด้วย"
              href="/rpkm/activities/details/baan"
              className="w-[80vw]"
              contentClassName="line-clamp-3"
            />
          </div>
          <Link
            className="pb-7 text-sm font-semibold flex justify-end underline mr-4 mt-2"
            href="/rpkm/activities/home"
          >
            ดูทั้งหมด
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
