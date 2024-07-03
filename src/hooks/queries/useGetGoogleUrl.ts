import { getGoogleUrl } from '@/api/googleLogin';
import { useQuery } from '@tanstack/react-query';

export const useGetGoogleUrl = (isReady: boolean) => {
  return useQuery({
    queryFn: getGoogleUrl,
    queryKey: ['getGoogleUrl'],
    enabled: isReady,
  });
};
