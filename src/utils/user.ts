import { User } from '@/types/user';
import { getAccessToken, getUserId } from '@/utils/auth';
import { apiClient } from './axios';
import { AxiosResponse } from 'axios';
import { UserDTO, UserParser } from '@/dtos/userDTO';

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

    return UserParser(res.data.user);
  } catch (error) {
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
