import Image from 'next/image';
import Link from 'next/link';

import Card from '@/components/rpkm/Activities/Card';
import Navbar from '@/components/rpkm/Navbar';

import BackButton from '@public/rpkm/activities/back.svg';
import ActivitiesBanner from '@public/rpkm/activities/activitiesbanner-red.png';
import WalkRallyBanner from '@public/rpkm/activities/walkrallybanner-pink.png';
import CommunityBanner from '@public/rpkm/activities/communitybanner-yellow.png';

import activities from '@/data/activities';

const Page = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  const cardsData = activities.filter(
    (activity) => activity.category === category
  );

  const getImage = () => {
    switch (category) {
      case 'walk-rally':
        return WalkRallyBanner;
      case 'community':
        return CommunityBanner;
      default:
        return ActivitiesBanner;
    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-[url('/rpkm/activities/detailsbackground.png')] bg-cover bg-[#EAE3C3]">
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
            description={card.description}
            href={`/rpkm/activities/details/${card.id}`}
            className="w-[80vw] m-auto opacity-80"
            contentClassName="line-clamp-3"
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
