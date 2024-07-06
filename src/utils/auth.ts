import { getExpireTime } from './getExpireTime';
import axios, { AxiosResponse } from 'axios';

export const getNewAccessToken = async (refreshToken: string) => {
  let res: AxiosResponse;
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refreshToken`;

  try {
    res = await axios.post(URL, {
      refresh_token: refreshToken,
    });

    const tokens = res.data;
    const tokenStr = JSON.stringify({
      accessToken: tokens.access_token,
      expiresIn: getExpireTime(tokens.expires_in),
      refreshToken: tokens.refresh_token,
    });

    localStorage.setItem('tokens', tokenStr);
    return tokens.access_token;
  } catch {
    return null;
  }
};

export const getAccessToken = async () => {
  const tokenstr = localStorage.getItem('tokens');

  if (!tokenstr) {
    return null;
  }

  const tokens = JSON.parse(tokenstr);
  const now = new Date();
  const expire = new Date(tokens.expiresIn);

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

export const exchangeGoogleCodeForToken = async (code: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-google?code=${code}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch {
    return null;
  }
};

export const getGoogleUrl = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google-url`
    );
    const data = res.data;
    const url = data.url;
    return url;
  } catch {
    return null;
  }
};
