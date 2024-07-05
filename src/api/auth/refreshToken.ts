import axios from 'axios';

export const refreshToken = async (refreshToken: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refreshToken`;
  const res = await axios.post(URL, {
    refresh_token: refreshToken,
  });
  return res.data;
};
