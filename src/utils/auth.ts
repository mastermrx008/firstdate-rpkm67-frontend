import { getExpireTime } from './getExpireTime';
import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { Google, Token } from '@/types/token';
import {
  convertGoogleDTOToGoogle,
  GoogleDTO,
  TokenDTO,
} from '@/dtos/tokensDTO';

export const getNewAccessToken = async (
  refreshToken: string
): Promise<string | null> => {
  try {
    const res: AxiosResponse<TokenDTO> = await apiClient.post(
      '/auth/refreshToken',
      {
        refresh_token: refreshToken,
      }
    );

    const { access_token, expires_in, refresh_token } = res.data;
    const tokenStr = JSON.stringify({
      accessToken: access_token,
      expiresIn: getExpireTime(expires_in),
      refreshToken: refresh_token,
    });

    localStorage.setItem('token', tokenStr);
    return access_token;
  } catch {
    return null;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  const tokenStr = localStorage.getItem('token');

  if (!tokenStr) {
    return null;
  }

  const token: Token = JSON.parse(tokenStr).credential;
  const now = new Date();
  const expire = new Date(now.getTime() + token.expiresIn * 1000);

  if (now > expire) {
    const newAccessToken = await getNewAccessToken(token.refreshToken);
    if (!newAccessToken) {
      return null;
    }
    return newAccessToken;
  }

  return token.accessToken;
};

export const getUserId = async (): Promise<string | null> => {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    return null;
  }
  return userId;
};

export const exchangeGoogleCodeForToken = async (
  code: string
): Promise<Google | null> => {
  try {
    const res: AxiosResponse<GoogleDTO> = await apiClient.get(
      `/auth/verify-google?code=${code}`
    );
    return convertGoogleDTOToGoogle(res.data);
  } catch {
    return null;
  }
};

export const getGoogleUrl = async (): Promise<string | null> => {
  try {
    const res: AxiosResponse<{ url: string }> =
      await apiClient.get(`/auth/google-url`);
    const { url } = res.data;
    return url;
  } catch {
    return null;
  }
};
