import { getAccessToken } from "@/utils/auth";
import { apiClient } from "@/utils/axios";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

interface PostJoinGroupRequest {
    token : string,
    user_id: string,
}
const postJoinGroup = async (request : PostJoinGroupRequest) => {
    const accessToken = await getAccessToken();

    const response = await apiClient.post(`/group/join`,
        {
            token : request.token,
            user_id: request.user_id
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
        mutationFn : postJoinGroup,
        onSuccess : (data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["group"]
            });
        },
        onError : () => {
            toast.error("ไม่สามารถเข้าร่วมกลุ่มนี้ได้")
        }
    })
}