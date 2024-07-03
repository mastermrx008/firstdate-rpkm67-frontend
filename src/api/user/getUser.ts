import { User } from '@/types/user';
import axios from 'axios';

export const getUser = async (id: string, access_token: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return res.data.user as User;
};
