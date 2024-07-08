import { CheckInDTO } from '@/dtos/checkInsDTO';
import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { getAccessToken } from './auth';

export const getCheckIn = async (
  userID: string,
  email: any
): Promise<CheckInDTO | null> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    const res: AxiosResponse = await apiClient.post(
      `checkin`,
      {
        email: email,
        event: 'firstdate',
        user_id: userID,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};
