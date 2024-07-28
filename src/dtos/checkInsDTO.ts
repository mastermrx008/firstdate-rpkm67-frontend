import { CheckIn, ChildCheckIn, GetCheckIn } from '@/types/checkIn';

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
    timestamp: string;
    is_duplicate: boolean;
  };
  firstname: string;
  lastname: string;
};

export type GetCheckInDTO = {
  checkins: {
    email: string;
    event: string;
    id: string;
    user_id: string;
    timestamp: string;
    is_duplicate: boolean;
  }[];
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
      timestamp: checkinDTO.checkin.timestamp,
      isDuplicate: checkinDTO.checkin.is_duplicate,
    },
    firstName: checkinDTO.firstname,
    lastName: checkinDTO.lastname,
  };
};

export const GetCheckInParser = (checkinDTO: GetCheckInDTO): GetCheckIn[] => {
  return checkinDTO.checkins.map((checkin) => ({
    email: checkin.email,
    event: checkin.event,
    id: checkin.id,
    userId: checkin.user_id,
    timestamp: checkin.timestamp,
    isDuplicate: checkin.is_duplicate,
  }));
};
