import { AxiosResponse } from 'axios';
import { getAccessToken } from './auth';
import { apiClient } from './axios';
import { StampDTO } from '@/dtos/stampDTO';

export const GetStamp = async (userId: string): Promise<StampDTO | Error> => {
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
    console.log('res:', res.data.stamp);
    return res.data.stamp;
  } catch (error) {
    console.log('error:', error);
    return Error('Error occured: cannot get stamp');
  }
};

export const CreateStamp = async (
  activityId: string,
  userId: string,
  pinCode: string
): Promise<StampDTO | Error> => {
  const accessToken = await getAccessToken();

  console.log('accessToken:', accessToken);
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
    return res.data.stamp;
  } catch (error) {
    console.log('error:', error);
    return Error('cannot create stamp');
  }
};
