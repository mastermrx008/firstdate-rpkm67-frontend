import { User } from '@/types/user';

import { StampDTO } from './stampDTO';
import { ChildCheckInDTO, ChildCheckInParser } from './checkInsDTO';

export type UserDTO = {
  baan: string;
  check_ins: ChildCheckInDTO[] | null;
  drug_allergy: string;
  email: string;
  faculty: string;
  firstname: string;
  food_allergy: string;
  group_id: string;
  id: string;
  illness: string;
  lastname: string;
  nickname: string;
  parent: string;
  parent_tel: string;
  photo_key: string;
  photo_url: string;
  receive_gift: number;
  role: 'user' | 'staff';
  stamp: StampDTO;
  tel: string;
  title: string;
  year: number;
};

export const UserParser = (userDTO: UserDTO): User => {
  return {
    baan: userDTO.baan,
    checkIns:
      userDTO.check_ins?.map((checkIn) => ChildCheckInParser(checkIn)) ?? [],
    drug_allergy: userDTO.drug_allergy,
    email: userDTO.email,
    faculty: userDTO.faculty,
    firstname: userDTO.firstname,
    food_allergy: userDTO.food_allergy,
    group_id: userDTO.group_id,
    id: userDTO.id,
    illness: userDTO.illness,
    lastname: userDTO.lastname,
    nickname: userDTO.nickname,
    parent: userDTO.parent,
    parent_tel: userDTO.parent_tel,
    photo_key: userDTO.photo_key,
    photo_url: userDTO.photo_url,
    receive_gift: userDTO.receive_gift,
    role: userDTO.role,
    stamp: {
      id: userDTO.stamp.id,
      pointA: userDTO.stamp.point_a,
      pointB: userDTO.stamp.point_b,
      pointC: userDTO.stamp.point_c,
      pointD: userDTO.stamp.point_d,
      stamp: userDTO.stamp.stamp,
      userId: userDTO.stamp.user_id,
    },
    tel: userDTO.tel,
    title: userDTO.title,
    year: userDTO.year,
  };
};
