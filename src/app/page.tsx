'use client';

import Border from '@/components/Border';
import Welcome from '@/components/Welcome';
import Image from 'next/image';
import SGCULOGO from '@public/landing/SGCU-logo.svg';
import { useRouter, useSearchParams } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { useGetTokens } from '@/hooks/queries/auth/useGetTokens';
import { useGetGoogleUrl } from '@/hooks/queries/auth/useGetGoogleUrl';
import { useCallback, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs'

export default function Home() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const router = useRouter();
  const accessToken = getCookie('access_token');

  const { data: googleUrl, isLoading: urlLoading } = useGetGoogleUrl({
    isReady: !code,
  });
  const { data: tokens, isLoading: tokensLoading } = useGetTokens({
    code: code as string,
    isReady: !!code && !accessToken,
  });
  

  useEffect(() => {
    if (!tokens) {
      return;
    }

    const now = dayjs();
    const expire = now.add(tokens.credential.expires_in);

    setCookie('access_token', tokens.credential.access_token);
    setCookie('expires_in', expire.format());
    setCookie('refresh_token', tokens.credential.refresh_token);
    setCookie('user_id', tokens.user_id);

  }, [tokens]);


  const handleOnLogin = useCallback(() => {
    if (urlLoading) {
      return;
    }
    router.push(googleUrl);
  }, [googleUrl]);

  return (
    <main className="h-screen w-full flex justify-center items-start text-lg relative">
      <Border variant="dark-pink">
        {code && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[999]">
            <Spinner className="text-pink-300 fill-red-400" />
          </div>
        )}

        {!urlLoading && (
          <>
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
            <p className="text-xs mb-20">
              *โปรดใช้Emailของจุฬาฯในการลงทะเบียน*
            </p>
            <section className="flex flex-col justify-center items-center font-medium">
              <p className="text-lg">เคยลงทะเบียนมาแล้ว?</p>
              <span
                onClick={handleOnLogin}
                className="underline cursor-pointer"
              >
                เข้าสู่ระบบ
              </span>
            </section>
          </>
        )}
      </Border>
    </main>
  );
}
