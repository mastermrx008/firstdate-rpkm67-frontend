import { headers } from 'next/headers';
import Image from 'next/image';

import BackButton from '@public/rpkm/activities/back.svg';

import activities from '@/data/activities';

export const getStaticpaths = async () => {
  const paths = activities.map((activity) => {
    return {
      params: { id: activity.id },
    };
  });

  console.log(paths);

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

  console.log(pathname);

  const id = pathname.split('/').pop();
  const activity = activities.find((activity) => activity.id === id);

  if (!activity) {
    return;
  }

  return (
    <section className="min-h-screen bg-[url('/rpkm/activities/detailsbackground.png')] bg-cover bg-[#EAE3C3] text-black">
      <a href="/rpkm/activities/home">
        <Image
          src={BackButton}
          alt="back"
          className="w-auto pt-3 pl-3"
        />
      </a>
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
        <div className="bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131] w-[80vw] h-[60vh]">
          <p>{activity.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
