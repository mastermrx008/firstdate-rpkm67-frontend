import Base from '@/components/rpkm/freshy-night/Base';
import Image from 'next/image';
import FRESHY_POSTER from '@public/rpkm/freshy-night/freshy_poster.svg';
import LINE from '@public/line.svg';

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base
        className="p-[10%] h-[calc(80vw*(801/371))] gap-2"
        withBus={false}
      >
        <section className="text-center font-sopha">
          <h1 className="drop-shadow-md text-6xl text-rpkm-pink text-stroke text-stroke-rpkm-blue -my-4">
            COMING SOON
          </h1>
          <h1 className="drop-shadow-md text-5xl text-rpkm-yellow text-stroke text-stroke-rpkm-blue">
            FRESHY NIGHT
          </h1>
        </section>
        <main className="h-4/5 w-full rounded-xl">
          <Image
            src={FRESHY_POSTER}
            alt="poster"
            width={0}
            height={0}
            layout="responsive"
            objectFit="contain"
            className="rounded-xl"
          />
        </main>
        <Image
          src={LINE}
          alt="Line"
          width={150}
          height={40}
        />
        <section className="text-center">
          <p className="font-semibold">
            สามารถลงทะเบียนเข้างานได้ตั้งแต่วันที่{' '}
          </p>
          <p className="font-sopha text-rpkm-yellow text-5xl text-stroke text-stroke-rpkm-blue">
            3 สิงหาคม 2567
          </p>
          <p className="font-sopha text-rpkm-pink text-5xl text-stroke text-stroke-rpkm-blue">
            12:00 น.
          </p>
          <p className="font-semibold">เป็นต้นไป</p>
        </section>
      </Base>
    </div>
  );
}
