import Border from '@/components/Border';

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center flex-col p-10">
      <Border variant="dark-pink">
        <h1 className="text-4xl font-bold text-center text-white">
          Hello, World!
        </h1>
      </Border>
    </main>
  );
}
