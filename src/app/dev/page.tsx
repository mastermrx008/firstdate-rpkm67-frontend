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
    </Border>
  );
}
