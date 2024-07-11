import { Stamp } from '@/types/stamp';

export type StampDTO = {
  id: string;
  point_a: number;
  point_b: number;
  point_c: number;
  point_d: number;
  stamp: string;
  user_id: string;
};

export const convertStampDTOToStamp = (stampDTO: StampDTO): Stamp => {
  return {
    id: stampDTO.id,
    pointA: stampDTO.point_a,
    pointB: stampDTO.point_b,
    pointC: stampDTO.point_c,
    pointD: stampDTO.point_d,
    stamp: stampDTO.stamp,
    userId: stampDTO.user_id,
  };
};
