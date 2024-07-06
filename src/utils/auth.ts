import { useRefreshToken } from '@/hooks/mutations/useRefreshToken';
import { getExpireTime } from './getExpireTime';
import dayjs from 'dayjs';

export const getNewAccessToken = async (refreshToken: string) => {
  const mutation = useRefreshToken();

  if (refreshToken) {
    const { tokens } = await mutation.mutateAsync(refreshToken);

    if (!tokens) {
      return null;
    }

    const tokenStr = JSON.stringify({
      accessToken: tokens.access_token,
      expiresIn: getExpireTime(tokens.expires_in),
      refreshToken: tokens.refresh_token,
    });

    localStorage.setItem('tokens', tokenStr);
    return tokens.access_token;
  }
};

export const getAccessToken = async () => {
  const tokenstr = localStorage.getItem('tokens');

  if (!tokenstr) {
    return null;
  }

  const tokens = JSON.parse(tokenstr);
  const now = dayjs();
  const expire = dayjs(tokens.expiresIn);

  if (now > expire) {
    const newAccessToken = await getNewAccessToken(tokens.refreshToken);
    if (!newAccessToken) {
      return null;
    }
    return newAccessToken;
  }

  return tokens.accessToken;
};

export const getUserId = async () => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    return null;
  }
  return userId;
};
