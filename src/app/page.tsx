import Border from '@/components/Border';

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border variant="light-pink">
        <h1 className="text-4xl font-semibold text-center text-white">
          username
        </h1>
      </Border>
    </main>
  );
}
