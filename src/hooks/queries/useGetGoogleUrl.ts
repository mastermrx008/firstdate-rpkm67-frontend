import { getGoogleUrl } from '@/api/auth/getGoogleUrl';
import { useQuery } from '@tanstack/react-query';

export const useGetGoogleUrl = (isReady: boolean) => {
  return useQuery({
    queryFn: getGoogleUrl,
    queryKey: ['getGoogleUrl'],
    enabled: isReady,
  });
};
