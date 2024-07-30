import { cn } from '@/lib/utils';
import { GetCheckIn } from '@/types/checkIn';
import { fetchCheckIn } from '@/utils/checkin';
import { getCurrentTime } from '@/utils/time';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

interface FreshyNightLinkProps {
  children?: React.ReactNode;
}

const FreshyNightLink = ({ children }: FreshyNightLinkProps) => {
  const [checkins, setCheckins] = useState<GetCheckIn[] | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      const checkIns = await fetchCheckIn();
      setCheckins(checkIns);

      const now = await getCurrentTime();
      setCurrentTime(now.currentTime);
    };

    initialize();
  }, []);

  const freshyNightStartDate = useMemo<Date>(() => {
    return new Date(process.env.NEXT_PUBLIC_FRESHY_NIGHT_DATE as string);
  }, []);

  const freshyNightEndDate = useMemo<Date>(() => {
    return new Date(process.env.NEXT_PUBLIC_END_FRESHY_NIGHT_DATE as string);
  }, []);

  const isRegistered = useMemo<boolean>(() => {
    return (
      !!checkins &&
      !!checkins.find((checkin) => checkin.event === 'confirm-freshy-night')
    );
  }, [checkins]);

  const handleOnClick = () => {
    if (currentTime && currentTime < freshyNightStartDate) {
      router.push('/rpkm/freshy-night/coming-soon');
      return;
    }

    if (!isRegistered) {
      router.push('/rpkm/freshy-night/register');
      return;
    }

    router.push('/rpkm/freshy-night/register-done');
  };

  return (
    <div
      onClick={handleOnClick}
      className={cn({
        'opacity-30 pointer-events-none cursor-not-allowed':
          !currentTime || (currentTime && currentTime > freshyNightEndDate),
      })}
    >
      {children}
    </div>
  );
};

export default FreshyNightLink;
