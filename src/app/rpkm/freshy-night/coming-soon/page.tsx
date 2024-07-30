import Base from '@/components/rpkm/freshy-night/Base';

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base
        className="p-[10%] h-[calc(70vw*(801/371))] gap-2"
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
        <main className="bg-rpkm-silver h-full w-full rounded-xl"></main>
        <section className="text-center">
          <p>สามารถลงทะเบียนเข้างานได้</p>
          <p>
            ตั้งแต่วันที่ <strong>3 สิงหาคม 2567</strong>
          </p>
          <p>
            เวลา <strong>12:00</strong> เป็นต้นไป
          </p>
        </section>
      </Base>
    </div>
  );
}
