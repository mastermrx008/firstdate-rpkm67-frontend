import { User } from '@/types/user';

export type Status = 'ready' | 'not-ready' | 'recieved';

export const getReceiveGiftCondition = (
  user: User
): { score: number; status: Status } => {
  if (!user) {
    throw new Error('there is no user');
  }

  let workshop = 0;
  let landmark = 0;
  let club = 0;

  Array.from(user.stamp.stamp).forEach((point, index) => {
    if (index < 5) {
      workshop += parseInt(point);
    } else if (index < 9) {
      landmark += parseInt(point);
    } else {
      club += parseInt(point);
    }
  });

  const score = workshop + club + landmark;
  const isReceivedGift = user.receive_gift >= 0;
  const isValidPoint = !!workshop && !!club && !!landmark && score >= 6;

  let status: Status;
  if (isReceivedGift) {
    status = 'recieved';
  } else if (isValidPoint) {
    status = 'ready';
  } else {
    status = 'not-ready';
  }

  return {
    score,
    status,
  };
};
