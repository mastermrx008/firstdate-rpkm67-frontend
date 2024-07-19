import Link from 'next/link';

import Navbar from '@/components/rpkm/Navbar';
import Banner from '@/components/rpkm/Activities/Banner';
import ScrollSection from '@/components/rpkm/Activities/ScrollSection';
import Divider from '@/components/rpkm/Activities/Divider';

import ActivitiesBanner from '@public/rpkm/activities/activities.png';
import WalkRallyBanner from '@public/rpkm/activities/walkrally.png';
import CommunityBanner from '@public/rpkm/activities/community.png';
import BaanBanner from '@public/rpkm/activities/baan.png';

import activities from '@/data/activities';

const page = () => {
  const activitiesContent = activities.filter(
    (activity) => activity.category === 'activities'
  );
  const walkRallyContent = activities.filter(
    (activity) => activity.category === 'walkrally'
  );
  const communityContent = activities.filter(
    (activity) => activity.category === 'community'
  );
  const baanContent = activities.filter(
    (activity) => activity.category === 'baan'
  );

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
          <Divider />
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
          </Link>
          <Divider />
          <Banner image={CommunityBanner} />
          <ScrollSection
            cards={communityContent}
            className="w-[60vw]"
          />
          <Link
            className="text-sm font-semibold flex justify-end underline mr-4 mt-2"
            href="/rpkm/activities/community"
          >
            ดูทั้งหมด
          </Link>
          <Divider />
          <Banner image={BaanBanner} />
          <ScrollSection
            cards={baanContent}
            className="w-[60vw]"
          />
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
