import { User } from '@/types/user';
import { getAccessToken } from '@/utils/auth';
import axios from 'axios';

export const getUser = async (id: string) => {
  const accessToken = await getAccessToken();
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.user as User;
};
