import { CheckIn } from '@/types/checkIn1211';

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

export const convertCheckInDTOtoCheckIn = (checkinDTO: CheckInDTO): CheckIn => {
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
