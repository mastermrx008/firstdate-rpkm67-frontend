export type Group = {
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
