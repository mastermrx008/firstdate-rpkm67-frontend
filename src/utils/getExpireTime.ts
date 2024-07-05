import dayjs from 'dayjs';

export const getExpireTime = (expire_in: number) => {
  const now = dayjs();
  const expire = now.add(expire_in, 'second');
  return expire.format();
};
