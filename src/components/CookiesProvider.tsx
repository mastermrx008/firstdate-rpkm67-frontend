'use client';

import { CookieContext } from '@/context/cookieContext';
import { useRefreshToken } from '@/hooks/mutations/useRefreshToken';
import { getExpireTime } from '@/utils/getExpireTime';
import { setCookie } from 'cookies-next';
import { ReactNode, useRef } from 'react';

interface CookiesProvider {
  children: ReactNode;
}

const CookiesProvider = (props: CookiesProvider) => {
  const { children } = props;
  const timerIdRef = useRef<number>(0);
  const mutation = useRefreshToken();

  const startRefreshToken = (refreshToken: string, expires_in: number) => {
    timerIdRef.current = window.setTimeout(
      () => refresh(refreshToken),
      // expires_in 
      3
    );
    console.log('timer now:', timerIdRef.current);
    console.log('will refresh token in: ', /* expires_in */3);
  };

  const refresh = async (refreshToken: string) => {
    console.log('start clearTimeout');
    console.log(`there is ${timerIdRef.current} timers`);
    for (let i = 1; i <= timerIdRef.current; i++) {
      console.log(`timer: ${i} cleared`);
      window.clearTimeout(i);
    }

    const { access_token, expires_in, refresh_token } =
      await mutation.mutateAsync(refreshToken);
    console.log('refresh tokens:', { access_token, expires_in, refresh_token });

    setCookie('access_token', access_token);
    setCookie('expires_in', getExpireTime(expires_in).format());
    setCookie('refresh_token', refresh_token);

    timerIdRef.current = window.setTimeout(
      () => refresh(refreshToken),
      3
    );

    console.log('new timer is', timerIdRef.current);
  };

  return (
    <CookieContext.Provider value={{ startRefreshToken }}>
      {children}
    </CookieContext.Provider>
  );
};

export default CookiesProvider;
