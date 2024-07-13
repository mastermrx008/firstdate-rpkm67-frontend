import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';

interface GetGroupbyTokenResponse {
  id: string;
  leader: {
    first_name: string;
    id: string;
    image_url: string;
    last_name: string;
  };
  token: string;
}
const getGroupbyToken = async (token: string) => {
  const accessToken = await getAccessToken();

  const response = await apiClient.get<GetGroupbyTokenResponse>(
    `/group/token?token=${encodeURIComponent(token)}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export const useGetGroupByToken = (token: string, enable: boolean) => {
  return useQuery({
    queryFn: () => getGroupbyToken(token),
    queryKey: ['group', token],
    enabled: enable,
  });
};
