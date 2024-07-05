import { useRefreshToken } from '@/hooks/mutations/useRefreshToken';
import { getCookie, setCookie } from 'cookies-next';
import { getExpireTime } from './getExpireTime';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export const refreshAccessToken = async () => {
  const mutation = useRefreshToken();
  const router = useRouter();
  const refreshToken = getCookie('refreshToken');

  if (refreshToken) {
    const { access_token, expires_in, refresh_token } =
      await mutation.mutateAsync(refreshToken);

    setCookie('accessToken', access_token);
    setCookie('expiresIn', getExpireTime(expires_in));
    setCookie('refreshToken', refresh_token);
  } else {
    router.push('/');
  }
};

export const getAccessToken = async () => {
  const now = dayjs();
  const expire = dayjs(getCookie('expiresIn'));

  if (now > expire) {
    await refreshAccessToken();
  }

  const accessToken = getCookie('accessToken');
  return accessToken;
};
