import { getGoogleUrl } from '@/api/googleLogin';
import { useQuery } from '@tanstack/react-query';

export const useGetGoogleUrl = () => {
  return useQuery({
    queryFn: getGoogleUrl,
    queryKey: ['getGoogleUrl'],
  });
};
