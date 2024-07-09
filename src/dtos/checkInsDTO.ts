import { CheckIn, ChildCheckIn } from '@/types/checkIn';

export type ChildCheckInDTO = {
  email: string;
  event: string;
  id: string;
  user_id: string;
};

export type CheckInDTO = {
  checkin: {
    email: string;
    event: string;
    id: string;
    user_id: string;
  };
  firstname: string;
  lastname: string;
};

export const ChildCheckInParser = (
  checkinDTO: ChildCheckInDTO
): ChildCheckIn => {
  return {
    email: checkinDTO.email,
    event: checkinDTO.event,
    id: checkinDTO.id,
    userId: checkinDTO.user_id,
  };
};

export const CheckInParser = (checkinDTO: CheckInDTO): CheckIn => {
  return {
    checkIn: {
      email: checkinDTO.checkin.email,
      event: checkinDTO.checkin.event,
      id: checkinDTO.checkin.id,
      userId: checkinDTO.checkin.user_id,
    },
    firstName: checkinDTO.firstname,
    lastName: checkinDTO.lastname,
  };
};
