import { getUser } from '@/api/user/getUser';
import { useQuery } from '@tanstack/react-query';

interface useGetUserProps {
  id: string;
  isReady?: boolean;
}

export const useGetUser = (props: useGetUserProps) => {
  const { id, isReady } = props;
  const query = useQuery({
    queryKey: ['getUser', id],
    queryFn: () => getUser(id),
    enabled: isReady,
    refetchOnMount: false,
  });
  return query;
};
