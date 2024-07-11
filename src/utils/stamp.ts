import { AxiosResponse } from 'axios';
import { getAccessToken } from './auth';
import { apiClient } from './axios';
import { StampDTO } from '@/dtos/stampDTO';
import { convertStampDTOToStamp } from '@/dtos/stampDTO';
import { Stamp } from '@/types/stamp';

export const getStamp = async (userId: string): Promise<Stamp | Error> => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return Error('No access token');
  }

  try {
    const res: AxiosResponse<{ stamp: StampDTO }> = await apiClient.get(
      `/stamp/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const convertedStamp = convertStampDTOToStamp(res.data.stamp);
    return convertedStamp;
  } catch (error) {
    console.log('error:', error);
    return Error('Error occurred: cannot get stamp');
  }
};

export const createStamp = async (
  activityId: string,
  userId: string,
  pinCode: string
): Promise<Stamp | Error> => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return Error('No access token');
  }

  try {
    const res: AxiosResponse<{ stamp: StampDTO }, Error> = await apiClient.post(
      `/stamp/${userId}`,
      {
        activity_id: activityId,
        pin_code: pinCode,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const convertedStamp = convertStampDTOToStamp(res.data.stamp);
    return convertedStamp;
  } catch (error) {
    console.log('error:', error);
    return Error('Cannot create stamp');
  }
};
