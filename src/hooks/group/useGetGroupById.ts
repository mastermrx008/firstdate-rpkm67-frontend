import { getAccessToken } from "@/utils/auth"
import { apiClient } from "@/utils/axios"
import { useMutation, useQuery } from "@tanstack/react-query"

type memberData = {
    "first_name": "string",
    "id": "string",
    "image_url": "string",
    "last_name": "string"
}
interface GetGroupbyIdResponse {
    "group": {
        "id": "string",
        "is_confirmed": true,
        "leader_id": "string",
        "members": memberData[],
        "token": "string"
    }
}
const getGroupbyId = async (userId: string) => {
    const accessToken = await getAccessToken();
    
    const response = await apiClient.get<GetGroupbyIdResponse>(`/group/${encodeURIComponent(userId)}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    )
    return response.data;
}

export const useGetGroupById = (userId: string) => {
    return useQuery({
        queryFn: () => getGroupbyId(userId),
        queryKey: ["group", userId]
    })
}