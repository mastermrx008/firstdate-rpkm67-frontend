import Image from 'next/image';
import { headers } from 'next/headers';

import Card from '@/components/rpkm/Activities/Card';

import BackButton from '@public/rpkm/activities/back.svg';
import ActivitiesBanner from '@public/rpkm/activities/activitiesbanner-red.png';
import WalkRallyBanner from '@public/rpkm/activities/walkrallybanner-pink.png';
import CommunityBanner from '@public/rpkm/activities/communitybanner-yellow.png';

import activities from '@/data/activities';

export const getStaticPaths = async () => {
  const paths = activities
    .reduce((acc: string[], curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    }, [])
    .map((category) => ({
      params: { category },
    }));

  return {
    paths,
    fallback: false,
  };
};

const Page = () => {
  const heads = headers();
  const pathname = heads.get('x-pathname');

  if (!pathname) {
    return;
  }

  const category = pathname.split('/').pop();

  const cardsData = activities.filter(
    (activity) => activity.category === category
  );

  const getImage = () => {
    switch (category) {
      case 'walkrally':
        return WalkRallyBanner;
      case 'community':
        return CommunityBanner;
      default:
        return ActivitiesBanner;
    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-[url('/rpkm/activities/detailsbackground.png')] bg-cover bg-[#EAE3C3]">
      <a href="/rpkm/activities/home">
        <Image
          src={BackButton}
          alt="back"
          className="w-auto pt-3 pl-3"
        />
      </a>
      <div className="flex justify-center">
        <Image
          src={getImage()}
          className="w-[60vw]"
          alt="banner"
        />
      </div>
      <div className="flex flex-col gap-y-3 p-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            image={card.image}
            content={card.content}
            href={`/rpkm/details/${card.id}`}
            className="w-[60vw] m-auto opacity-80"
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
