'use client';

import Border from '@/components/Border';
import Welcome from '@/components/Welcome';
import Image from 'next/image';
import SGCULOGO from '@public/landing/SGCU-logo.svg';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { useCallback, useEffect, useRef } from 'react';
import { getExpireTime } from '@/utils/getExpireTime';
import { useAuth } from '@/context/AuthContext';
import { exchangeGoogleCodeForToken, getGoogleUrl } from '@/utils/auth';

export default function Home() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const router = useRouter();
  const { user, resetContext } = useAuth();
  console.log(user);
  const googleUrl = useRef<string | null>(null);

  useEffect(() => {
    (async () => {
      const url = await getGoogleUrl();
      if (url) {
        googleUrl.current = url;
      }
    })();
  }, []);

  useEffect(() => {
    if (!code) {
      return;
    }
    (async () => {
      const tokens = await exchangeGoogleCodeForToken(code);
      if (!tokens) {
        return;
      }

      const tokenStr = JSON.stringify({
        accessToken: tokens.credential.access_token,
        expiresIn: getExpireTime(tokens.credential.expires_in),
        refreshToken: tokens.credential.refresh_token,
      });

      localStorage.setItem('tokens', tokenStr);
      localStorage.setItem('userId', tokens.user_id);
      resetContext();
    })();
  }, [code]);

  useEffect(() => {
    console.log(user);
    if (!user) {
      return;
    }

    const { firstname, lastname } = user;
    if (!!firstname || !!lastname) {
      redirect('/Home');
    }

    redirect('/register');
  }, [user]);

  const handleOnLogin = useCallback(() => {
    if (!googleUrl.current) {
      return;
    }
    router.push(googleUrl.current);
  }, [googleUrl]);

  return (
    <main className="h-screen w-full flex justify-center items-start text-lg relative">
      <Border variant="dark-pink">
        {code && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[999]">
            <Spinner className="text-pink-300 fill-red-400" />
          </div>
        )}

        <Image
          src={SGCULOGO}
          alt="sgcu-logo"
          className="w-10 mb-20 mt-4"
        />
        <Welcome
          containerClassName="my-0 mb-4"
          cuClassName="text-white text-4xl"
          welcomeClassName="text-white text-6xl"
        />
        <p className="text-center text-white mb-20">
          In honor of our wander,
          <br /> you are the answer.
        </p>
        <button
          onClick={handleOnLogin}
          className="bg-white py-2 px-20 rounded-md font-medium shadow-md mb-4"
        >
          ลงทะเบียน
        </button>
        <p className="text-xs mb-20">*โปรดใช้Emailของจุฬาฯในการลงทะเบียน*</p>
        <section className="flex flex-col justify-center items-center font-medium">
          <p className="text-lg">เคยลงทะเบียนมาแล้ว?</p>
          <span
            onClick={handleOnLogin}
            className="underline cursor-pointer"
          >
            เข้าสู่ระบบ
          </span>
        </section>
      </Border>
    </main>
  );
}
