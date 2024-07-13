import { BaanCount } from '@/types/baan';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';

export const getCountByBaan = async () => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return new Error('No access token');
  }

  try {
    const res = await apiClient.get('/baan/count', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data as BaanCount[];
  } catch (error) {
    return error;
  }
};
