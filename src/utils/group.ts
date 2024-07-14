import { AxiosResponse } from 'axios';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import { Group } from '@/types/group';
import { convertGroupDTOToGroup, GroupDTO } from '@/dtos/groupDTO';

export const getGroundByUserId = async (
  userId: string
): Promise<Group | Error> => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return Error('No access token');
  }

  try {
    const res: AxiosResponse<{ group: GroupDTO }> = await apiClient.get(
      `/group/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const convertedResponse = convertGroupDTOToGroup(res.data.group);

    return convertedResponse;
  } catch (error) {
    console.log('error:', error);
    return Error('Error occurred: cannot get group');
  }
};
