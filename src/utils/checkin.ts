import { CheckInDTO } from '@/dtos/checkInsDTO';
import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { getAccessToken } from './auth';

export const getCheckIn = async (): Promise<CheckInDTO | null> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    const res: AxiosResponse = await apiClient.post(
      `checkin`,
      {},
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
