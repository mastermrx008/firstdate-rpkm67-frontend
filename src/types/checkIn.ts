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
    timestamp: string;
    isDuplicate: boolean;
  };
  firstName: string;
  lastName: string;
};
