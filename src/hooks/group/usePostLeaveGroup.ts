import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const postLeaveGroup = async (userId: string) => {
  const accessToken = await getAccessToken();

  const response = await apiClient.post(
    `/group/leave`,
    {
      user_id: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};
export const usePostLeaveGroup = () => {
  const queryClient = useQueryClient();
  const { resetContext } = useAuth();
  return useMutation({
    mutationFn: postLeaveGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['group'],
      });
      resetContext();
    },
    onError: () => {
      toast.error('มีบางอย่างผิดพลาด');
    },
  });
};
