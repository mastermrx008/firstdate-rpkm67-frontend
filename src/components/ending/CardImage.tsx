import Image from 'next/image';

import { Stamp } from '@/types/stamp';

import SproutImage from '@public/ending/sprout.png';
import DaisiesImage from '@public/ending/daisies.png';
import RoseImage from '@public/ending/rose.png';
import SunflowerImage from '@public/ending/sunflower.png';
import TulipImage from '@public/ending/tulip.png';
import FortuneImage from '@public/ending/fortune.png';

const CardImage = ({ stamp }: { stamp: Stamp | undefined }) => {
  const getAvaliable = (point: number) => {
    return point > 0 ? 1 : 0;
  };

  const getCard = (stamp: Stamp | undefined) => {
    if (!stamp) return SproutImage;

    const sumStamp = stamp.pointA + stamp.pointB + stamp.pointC + stamp.pointD;
    if (sumStamp === 400) {
      return FortuneImage;
    }

    const countStamp =
      getAvaliable(stamp.pointA) +
      getAvaliable(stamp.pointB) +
      getAvaliable(stamp.pointC) +
      getAvaliable(stamp.pointD);
    switch (countStamp) {
      case 0:
        return SproutImage;
      case 1:
        return DaisiesImage;
      case 2:
        return RoseImage;
      case 3:
        return SunflowerImage;
      default:
        return TulipImage;
    }
  };

  const card = getCard(stamp);

  return (
    <Image
      src={card}
      alt="result card"
      className="w-48"
    />
  );
};

export default CardImage;
