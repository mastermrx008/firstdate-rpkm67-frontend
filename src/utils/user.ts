import { User } from '@/types/user';
import { getAccessToken, getUserId } from '@/utils/auth';
import { apiClient } from './axios';
import { AxiosResponse } from 'axios';
import { convertUserDTOtoUser, UserDTO } from '@/dtos/userDTO';

export const getUser = async (): Promise<User | null> => {
  const accessToken = await getAccessToken();
  const userId = await getUserId();

  if (!accessToken || !userId) {
    return null;
  }

  try {
    const res: AxiosResponse<{ user: UserDTO }> = await apiClient.get(
      `/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return convertUserDTOtoUser(res.data.user);
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};
