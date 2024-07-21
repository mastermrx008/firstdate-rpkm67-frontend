import Base from '@/components/rpkm/freshy-night/Base';

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base
        className="p-[10%] h-[calc(70vw*(801/371))] gap-2"
        withBus={false}
      >
        <section className="text-center font-sopha text-5xl">
          <h1 className="text-rpkm-pink">COMING SOON</h1>
          <h1 className="text-rpkm-yellow">FRESHY NIGHT</h1>
        </section>
        <main className="bg-rpkm-silver h-full w-full rounded-xl"></main>
        <section className="text-center">
          <p>สามารถลงทะเบียนเข้างานได้</p>
          <p>
            ตั้งแต่วันที่ <strong>3 สิงหาคม 2567</strong>
          </p>
          <p>
            เวลา <strong>00:00</strong> เป็นต้นไป
          </p>
        </section>
      </Base>
    </div>
  );
}
