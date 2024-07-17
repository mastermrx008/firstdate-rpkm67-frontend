import { Group } from '@/types/group';

export type GroupDTO = {
  id: string;
  is_confirmed: boolean;
  leader_id: string;
  members: {
    first_name: string;
    id: string;
    image_url: string;
    last_name: string;
  }[];
  token: string;
};

export const convertGroupDTOToGroup = (groupDTO: GroupDTO): Group => {
  return {
    id: groupDTO.id,
    isConfirmed: groupDTO.is_confirmed,
    leaderId: groupDTO.leader_id,
    members: groupDTO.members.map((member) => {
      return {
        firstName: member.first_name,
        id: member.id,
        imageUrl: member.image_url,
        lastName: member.last_name,
      };
    }),
    token: groupDTO.token,
  };
};
