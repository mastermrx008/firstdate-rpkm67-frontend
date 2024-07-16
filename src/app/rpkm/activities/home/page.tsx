import Banner from '@/components/rpkm/Activities/Banner';
import Card from '@/components/rpkm/Activities/Card';
import ScrollSection from '@/components/rpkm/Activities/ScrollSection';
import Divider from '@/components/rpkm/Activities/Divider';

import ActivitiesBanner from '@public/rpkm/activities/activities.png';
import WalkRallyBanner from '@public/rpkm/activities/walkrally.png';
import CommunityBanner from '@public/rpkm/activities/community.png';
import BaanBanner from '@public/rpkm/activities/baan.png';
import TV from '@public/user-card/tv.png';

const page = () => {
  const cards = [
    {
      title: 'TV',
      image: TV,
      content: 'Watch TV',
    },
    {
      title: 'TV',
      image: TV,
      content: 'Watch TV',
    },
    {
      title: 'TV',
      image: TV,
      content: 'Watch TV',
    },
    {
      title: 'TV',
      image: TV,
      content: 'Watch TV',
    },
    {
      title: 'TV',
      image: TV,
      content: 'Watch TV',
    },
    {
      title: 'TV',
      image: TV,
      content: 'Watch TV',
    },
    {
      title: 'TV',
      image: TV,
      content: 'Watch TV',
    },
  ];
  return (
    <section className="flex flex-col">
      <Banner image={ActivitiesBanner} />
      <ScrollSection
        cards={cards}
        href="/rpkm/activities/details"
        className="w-[60vw]"
      />
      <Divider />
      <Banner image={WalkRallyBanner} />
      <div className="flex justify-center w-full">
        <Card
          title="TV"
          image={TV}
          content="Watch TV"
          href="/rpkm/activities/details"
          className="w-[90vw]"
        />
      </div>
      <Divider />
      <Banner image={CommunityBanner} />
      <ScrollSection
        cards={cards}
        href="/rpkm/activities/details"
        className="w-[60vw]"
      />
      <Divider />
      <Banner image={BaanBanner} />
      <div className="flex justify-center w-full pb-7">
        <Card
          title="TV"
          image={TV}
          content="Watch TV"
          href="/rpkm/activities/details"
          className="w-[90vw]"
        />
      </div>
    </section>
  );
};

export default page;
