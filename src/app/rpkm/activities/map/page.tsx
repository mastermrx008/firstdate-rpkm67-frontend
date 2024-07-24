import Navbar from '@/components/rpkm/Navbar';
import Image from 'next/image';

import map1 from '@public/rpkm/activities/map/map1.png';
import map2 from '@public/rpkm/activities/map/map2.png';
import map3 from '@public/rpkm/activities/map/map3.png';
import map4 from '@public/rpkm/activities/map/map4.png';

const page = () => {
  return (
    <section className="min-h-screen bg-[url('/rpkm/activities/small-background.png')] bg-cover bg-[#EAE3C3] text-black">
      <Navbar />
      <div className="flex justify-center -mb-20">
        <div className="flex flex-col items-center gap-y-1 pt-4">
          <h1
            className="font-sopha text-[20vh] text-rpkm-pink tracking-wide"
            style={{
              textShadow:
                '1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000',
            }}
          >
            แผนที่
          </h1>
          <h2
            className="font-sopha text-[6vh] text-rpkm-green tracking-wider -translate-y-20"
            style={{
              textShadow:
                '1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000',
            }}
          >
            กิจกรรมชุมชน
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center my-4 pb-8">
        <Image
          src={map1}
          className="w-[80%] mx-auto h-auto"
          alt="map"
        />
        <Image
          src={map2}
          className="w-[80%] mx-auto h-auto"
          alt="map"
        />
        <Image
          src={map3}
          className="w-[80%] mx-auto h-auto"
          alt="map"
        />
        <Image
          src={map4}
          className="w-[80%] mx-auto h-auto"
          alt="map"
        />
      </div>
    </section>
  );
};

export default page;
