import { User } from '@/types/user';
import { getAccessToken, getUserId } from '@/utils/auth';
import axios from 'axios';

export const getUser = async () => {
  const accessToken = await getAccessToken();
  const userId = await getUserId();

  if (!accessToken || !userId) {
    return null;
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}`;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.user as User;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};
