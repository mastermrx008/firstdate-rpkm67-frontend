import { getAccessToken } from "@/utils/auth";
import { apiClient } from "@/utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

const postLeaveGroup = async (userId : string) => {
    const accessToken = await getAccessToken();
    
    const response = await apiClient.post(`/group/leave`,
        {   
            user_id : userId
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    )
    return response.data;
}
export const usePostLeaveGroup = (userId : string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : () => postLeaveGroup(userId),
        onSuccess : (data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["group"]
            });
        },
        onError : () => {
            toast.error("มีบางอย่างผิดพลาด")
        }
    })
}