import { refreshToken } from '@/api/auth/refreshToken';
import { useMutation } from '@tanstack/react-query';

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: refreshToken,
  });
};
