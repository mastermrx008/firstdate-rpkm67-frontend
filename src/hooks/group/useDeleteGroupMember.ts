import { getAccessToken } from "@/utils/auth";
import { apiClient } from "@/utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface DeleteGroupMemberRequest {
    "deleted_user_id": string,
    "requesting_user_id": string
}
const deleteGroupMember = async (request : DeleteGroupMemberRequest) => {
    const accessToken = await getAccessToken();

    const response = await apiClient.delete(`/group/delete-member`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            data : request
        },
    )
    return response.data;
}
export const useDeleteGroupMember = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : deleteGroupMember,
        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey: ["group"]
            });
        }
    })
}