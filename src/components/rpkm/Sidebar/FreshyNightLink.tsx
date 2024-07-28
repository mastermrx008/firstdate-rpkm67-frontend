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

  const freshyNightDate = useMemo<Date>(() => {
    return new Date(process.env.NEXT_PUBLIC_FRESHY_NIGHT_DATE as string);
  }, []);

  const isRegistered = useMemo<boolean>(() => {
    return (
      !!checkins &&
      !!checkins.find((checkin) => checkin.event === 'confirm-freshy-night')
    );
  }, [checkins]);

  const handleOnClick = () => {
    if (currentTime && currentTime < freshyNightDate) {
      router.push('/rpkm/freshy-night/coming-soon');
      return;
    }

    if (!isRegistered) {
      router.push('/rpkm/freshy-night/register');
      return;
    }

    router.push('/rpkm/freshy-night/register-done');
  };

  return <div onClick={handleOnClick}>{children}</div>;
};

export default FreshyNightLink;
