export type ChildCheckIn = {
  email: string;
  event: string;
  id: string;
  userId: string;
};

export type CheckIn = {
  checkIn: {
    email: string;
    event: string;
    id: string;
    userId: string;
  };
  firstName: string;
  lastName: string;
};
