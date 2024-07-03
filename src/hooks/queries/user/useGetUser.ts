import { getUser } from '@/api/user/getUser';
import { useQuery } from '@tanstack/react-query';

interface useGetUserProps {
  id: string;
  access_token: string;
  isReady: boolean;
}

export const useGetUser = (props: useGetUserProps) => {
  const { id, access_token, isReady } = props;
  const query = useQuery({
    queryKey: ['getUser', id],
    queryFn: () => getUser(id, access_token),
    enabled: isReady,
  });
  return query;
};
