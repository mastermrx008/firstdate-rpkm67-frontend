import { Stamp } from '@/types/stamp';
import Card from './card';

export const getAvaliable = (point: number) => {
  return point > 0 ? 1 : 0;
};

export const getCard = (stamp: Stamp | undefined) => {
  if (!stamp) return Card.Sprout;

  const sumStamp =
    stamp.pointA * 10 +
    stamp.pointB * 12.5 +
    stamp.pointC * 20 +
    stamp.pointD * 12.5;
  if (sumStamp === 400) {
    return Card.Fortune;
  }

  const countStamp =
    getAvaliable(stamp.pointA) +
    getAvaliable(stamp.pointB) +
    getAvaliable(stamp.pointC) +
    getAvaliable(stamp.pointD);
  switch (countStamp) {
    case 0:
      return Card.Sprout;
    case 1:
      return Card.Daisies;
    case 2:
      return Card.Rose;
    case 3:
      return Card.Sunflower;
    default:
      return Card.Tulip;
  }
};
