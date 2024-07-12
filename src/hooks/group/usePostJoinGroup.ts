import { getAccessToken } from "@/utils/auth";
import { apiClient } from "@/utils/axios";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"

interface PostJoinGroupRequest {
    token : string,
    user_id: string,
}
const postJoinGroup = async (token: string, userId: string) => {
    const accessToken = await getAccessToken();

    const response = await apiClient.post(`/group/join`,
        {
            token : token,
            user_id: userId,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    )
    return response.data;
}
export const usePostJoinGroup = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (request : PostJoinGroupRequest) => postJoinGroup(request.token, request.user_id),
        onSuccess : (data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["group"]
            });
        }
    })
}