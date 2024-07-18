import {
  convertBaanSelectionDTOToBaanSelection,
  convertDeleteBaanResponseDTOToResponse,
  convertGetBaanSelectionByGroupIdResponseDTOToResponse,
} from '@/dtos/baanDTO';
import { BaanCount } from '@/types/baan';
import { GetBaanSelectionByGroupIdResponse } from '@/types/BaanSelection';
import { Group } from '@/types/group';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';

export const getCountByBaan = async (): Promise<BaanCount[] | Error> => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return new Error('No access token');
  }

  try {
    const res = await apiClient.get('/selection/count-by-baan', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.baan_counts as BaanCount[];
  } catch (error: unknown) {
    console.log('Error fetching baan count:', error);
    return Error('Something is wrong! cannot get baan count');
  }
};

export const createBaanSelection = async (
  baanId: string,
  groupId: string,
  order: number
) => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return Error('No access token');
  }

  try {
    const res = await apiClient.post(
      '/selection',
      {
        baan_id: baanId,
        group_id: groupId,
        order,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data as Group;
  } catch (error) {
    return error;
  }
};

export const updateBaanSelection = async (
  baanId: string,
  groupId: string,
  order: number
) => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return Error('No access token');
  }

  try {
    const res = await apiClient.patch(
      `/selection`,
      {
        baan_id: baanId,
        group_id: groupId,
        order,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const convertedData = convertBaanSelectionDTOToBaanSelection(res.data);

    return convertedData;
  } catch (error) {
    return error;
  }
};

export const deleteBaanSelection = async (baanId: string, groupId: string) => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return Error('No access token');
  }

  try {
    const res = await apiClient.delete('/selection', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        baan_id: baanId,
        group_id: groupId,
      },
    });
    const convertedData = convertDeleteBaanResponseDTOToResponse(res.data);

    return convertedData;
  } catch (error) {
    return error;
  }
};

export const getBaanSelectionByGroupId = async (
  groupId: string
): Promise<GetBaanSelectionByGroupIdResponse | Error> => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return Error('No access token');
  }

  try {
    const res = await apiClient.get(`/selection/${groupId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const convertedData = convertGetBaanSelectionByGroupIdResponseDTOToResponse(
      res.data
    );
    return convertedData;
  } catch (error) {
    console.log('Error fetching baan selection:', error);
    return Error("Can't get baan selection");
  }
};
