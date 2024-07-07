import { AxiosResponse } from 'axios';
import { getAccessToken } from './auth';
import { apiClient } from './axios';
import { PinDTO } from '@/dtos/pinDTO';

export const getAllPins = async (): Promise<PinDTO[] | null> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    const res: AxiosResponse<{ pins: PinDTO[] }> = await apiClient.get('/pin', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.pins;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};

export const resetPin = async (activityId: string): Promise<boolean | null> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    const res: AxiosResponse<{ success: boolean }> = await apiClient.post(
      `/pin/reset/${activityId}`,
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
