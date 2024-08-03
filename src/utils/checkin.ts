import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { getAccessToken, getUserId } from './auth';
import { CheckIn, GetCheckIn } from '@/types/checkIn';
import {
  CheckInParser,
  GetCheckInDTO,
  GetCheckInParser,
} from '@/dtos/checkInsDTO';

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
    return CheckInParser(res.data);
  } catch (error) {
    return null;
  }
};

export const createCheckInByStudentId = async (
  studentId: string,
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
        student_id: studentId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return CheckInParser(res.data);
  } catch (error) {
    return null;
  }
};

export const fetchCheckIn = async (): Promise<GetCheckIn[] | null> => {
  const accessToken = await getAccessToken();
  const userId = await getUserId();

  if (!accessToken || !userId) {
    return null;
  }

  try {
    const res: AxiosResponse<GetCheckInDTO> = await apiClient.get(
      `/checkin/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return GetCheckInParser(res.data);
  } catch (error) {
    return null;
  }
};
