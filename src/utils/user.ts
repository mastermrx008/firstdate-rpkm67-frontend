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

export const patchReward = async (id: string): Promise<boolean | null> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }
  try {
    const res: AxiosResponse<{ success: boolean }> = await apiClient.patch(
      `/user/profile/${id}`,
      { receive_gift: 0 },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data.success;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};

export const isUserRegistered = (user: User) => {
  return (
    user.drugAllergy &&
    user.faculty &&
    user.firstname &&
    user.foodAllergy &&
    user.illness &&
    user.lastname &&
    user.nickname &&
    user.parent &&
    user.parentTel &&
    user.tel &&
    user.title &&
    user.year
  );
};
