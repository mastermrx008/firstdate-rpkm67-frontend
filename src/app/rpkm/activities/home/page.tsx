import Image from 'next/image';

import Banner from '@/components/rpkm/Activities/Banner';
import ScrollSection from '@/components/rpkm/Activities/ScrollSection';
import Divider from '@/components/rpkm/Activities/Divider';

import RPKM67 from '@public/rpkm/activities/rpkm67.png';
import RPKMTEXT from '@public/rpkm/activities/rpkmtext.png';
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
    <section className="flex flex-col bg-[url('/rpkm/activities/background.png')] bg-cover bg-[#EB9096]">
      <div className="w-full h-[18rem] bg-[url('/rpkm/activities/herobackground.png')] bg-cover bg-[#68A987]"></div>
      <div className="w-full h-1 bg-white"></div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center -translate-y-8">
          <Image
            src={RPKMTEXT}
            alt="rpkmtext"
            className="w-[60vw]"
          />
          <Image
            src={RPKM67}
            alt="rpkm67"
            className="w-[20vw] mt-1"
          />
        </div>
      </div>
      <Divider />
      <Banner image={ActivitiesBanner} />
      <ScrollSection
        cards={activitiesContent}
        className="w-[60vw]"
      />
      <a
        className="text-sm font-semibold flex justify-end underline mr-4 mt-2"
        href="/rpkm/activities/activities"
      >
        ดูทั้งหมด
      </a>
      <Divider />
      <Banner image={WalkRallyBanner} />
      <ScrollSection
        cards={walkRallyContent}
        className="w-[60vw]"
      />
      <a
        className="text-sm font-semibold flex justify-end underline mr-4 mt-2"
        href="/rpkm/activities/walkrally"
      >
        ดูทั้งหมด
      </a>
      <Divider />
      <Banner image={CommunityBanner} />
      <ScrollSection
        cards={communityContent}
        className="w-[60vw]"
      />
      <a
        className="text-sm font-semibold flex justify-end underline mr-4 mt-2"
        href="/rpkm/activities/community"
      >
        ดูทั้งหมด
      </a>
      <Divider />
      <Banner image={BaanBanner} />
      <ScrollSection
        cards={baanContent}
        className="w-[60vw]"
      />
      <a
        className="pb-7 text-sm font-semibold flex justify-end underline mr-4 mt-2"
        href="/rpkm/activities/home"
      >
        ดูทั้งหมด
      </a>
    </section>
  );
};

export default page;
