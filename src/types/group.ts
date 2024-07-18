export type Group = {
  id: string;
  isConfirmed: boolean;
  leaderId: string;
  members: {
    firstName: string;
    id: string;
    imageUrl: string;
    lastName: string;
  }[];
  token: string;
};
