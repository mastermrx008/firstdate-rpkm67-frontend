import { getGoogleUrl } from '@/api/auth/getGoogleUrl';
import { useQuery } from '@tanstack/react-query';

interface useGetGoogleUrlProps {
  isReady: boolean;
}

export const useGetGoogleUrl = (props: useGetGoogleUrlProps) => {
  const { isReady } = props;

  return useQuery({
    queryFn: getGoogleUrl,
    queryKey: ['getGoogleUrl'],
    enabled: isReady,
  });
};
