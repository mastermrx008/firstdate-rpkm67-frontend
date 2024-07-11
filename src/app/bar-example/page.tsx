'use client';

import Navbar from '@/components/rpkm/Navbar';
import Sidebar from '@/components/rpkm/Sidebar';

export default function Page() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <div className="w-full h-screen">
        <Sidebar />
        <Navbar />
      </div>
    </main>
  );
}
