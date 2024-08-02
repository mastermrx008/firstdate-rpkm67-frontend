import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/rpkm/Navbar';

import BackButton from '@public/rpkm/activities/back.svg';

import activities from '@/data/activities';

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const activity = activities.find((activity) => activity.id === id);

  const prevPage =
    id.split('-').length - 1 === 0
      ? 'home'
      : id.substring(0, id.lastIndexOf('-'));

  if (!activity) {
    return;
  }

  return (
    <section className="min-h-screen bg-[url('/rpkm/activities/smaller-background.png')] bg-cover bg-[#EAE3C3] text-black">
      <Navbar />
      <Link href={`/rpkm/activities/${prevPage}`}>
        <Image
          src={BackButton}
          alt="back"
          className="w-auto pt-3 pl-3"
        />
      </Link>
      <h1 className="text-4xl font-bold mt-16 text-center">{activity.name}</h1>
      <div className="flex justify-center">
        <Image
          src={activity.image}
          alt="activity image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '60vw', height: 'auto' }}
          className="my-4"
        />
      </div>
      <div className="drop-shadow-lg flex justify-center pb-16">
        <div className="bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131] w-[80vw]">
          <p className="underline">รูปแบบกิจกรรม</p>
          <ul className="">
            {activity.content.map((content, index) => (
              <li
                key={index}
                className="mt-2 list-disc ml-5"
              >
                {content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page;
