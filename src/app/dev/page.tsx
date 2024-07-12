'use client';

import Border from '@/components/Border';
import { Suspense } from 'react';
import UserCard from '@/components/UserCard';

// For dev (delete soon)
export default function page() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}

function Login() {
  return (
    <Border variant="dark-pink">
      <UserCard />

      <div className="w-4/5 h-4/5 ">
        <UserCard />
      </div>

      {/* Break if the size is too small because the texts' sizes */}
      <div className="w-1/2 h-1/2">
        <UserCard />
      </div>
    </Border>
  );
}
