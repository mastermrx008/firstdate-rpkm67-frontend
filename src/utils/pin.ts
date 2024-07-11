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
    return null;
  }
};

export const resetPin = async (activityId: string): Promise<PinDTO | null> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    const res: AxiosResponse<{ pin: PinDTO }> = await apiClient.post(
      `/pin/reset/${activityId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data.pin;
  } catch (error) {
    return null;
  }
};
