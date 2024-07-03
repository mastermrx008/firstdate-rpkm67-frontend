import axios from 'axios';

export const getTokens = async (code: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-google?code=${code}`;
  const res = await axios.get(url);
  return res.data;
};
