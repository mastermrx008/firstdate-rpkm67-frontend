import Base from '@/components/rpkm/freshy-night/Base';

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base className="p-[10%] h-[calc(80vw*(801/371))] gap-6">
        <section className="text-center">
          <h1>COMING SOON</h1>
          <h1>FRESHY NIGHT</h1>
        </section>
        <main className="bg-rpkm-grey h-3/5 w-4/5 rounded-xl"></main>
        <section className="text-center">
          <p>สามารถลงทะเบียนเข้างานได้</p>
          <p> ตั้งแต่วันที่ 3 สิงหาคม 2567</p>
          <p>เวลา 00:00 เป็นต้นไป</p>
        </section>
      </Base>
    </div>
  );
}
