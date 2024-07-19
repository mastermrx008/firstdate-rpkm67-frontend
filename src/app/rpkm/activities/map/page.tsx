import Navbar from '@/components/rpkm/Navbar';
import MapContentCard from '@/components/rpkm/Activities/MapContentCard';

const page = () => {
  return (
    <section className="min-h-screen bg-[url('/rpkm/activities/small-background.png')] bg-cover bg-[#EAE3C3] text-black">
      <Navbar />
      <div className="flex justify-center -mb-20">
        <div className="flex flex-col items-center gap-y-1 pt-16">
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
            ข้อมูลที่จัดแต่ละกิจกรรม
          </h2>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center w-[90vw] h-[90vw] bg-black"></div>
      </div>
      <div className="mt-6 flex justify-center pb-7">
        <div className="bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131] w-[90vw] divide-y">
          <MapContentCard
            name="ชื่อกิจกรรม"
            description="รายละเอียดกิจกรรม"
            href={`/rpkm/activities/map/1`}
          />
          <MapContentCard
            name="ชื่อกิจกรรม"
            description="รายละเอียดกิจกรรม"
            href={`/rpkm/activities/map/1`}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
