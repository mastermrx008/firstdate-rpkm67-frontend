import { getTokens } from '@/api/auth/getTokens';
import { useQuery } from '@tanstack/react-query';

interface useGetTokensProps {
  code: string;
  isReady: boolean;
}

export const useGetTokens = (props: useGetTokensProps) => {
  const { code, isReady } = props;

  const query = useQuery({
    queryKey: ['getTokens', code],
    queryFn: () => getTokens(code),
    enabled: isReady,
  });
  return query;
};
