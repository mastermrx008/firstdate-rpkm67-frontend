import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { getAccessToken } from './auth';
import { CheckIn } from '@/types/checkIn1211';

export const createCheckIn = async (
  userID: string,
  email: string,
  event: string
): Promise<CheckIn | null> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    const res: AxiosResponse = await apiClient.post(
      `/checkin`,
      {
        email: email,
        event: event,
        user_id: userID,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};
