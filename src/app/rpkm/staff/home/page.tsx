'use client';
import Navbar from '@/components/rpkm/Navbar';
import Scan from '@/components/rpkm/staff/home/qrscanner/QRScanner';
import { getCurrentTime } from '@/utils/time';
import React, { useEffect, useState } from 'react';

function Page() {
  const [eventText, setEventText] = useState<string>('Onsite 3 สิงหาคม 2567');
  useEffect(() => {
    const currentTime = getCurrentTime();
    const freshy_night = process.env.NEXT_PUBLIC_FRESHY_NIGHT;
    const freshy_night_time = freshy_night
      ? new Date(freshy_night)
      : currentTime;
    if (currentTime >= freshy_night_time) setEventText('Fresh Night');
    else {
      const rpkm_day_2 = process.env.NEXT_PUBLIC_RPKM_DAY_2;
      const rpkm_day_2_time = rpkm_day_2 ? new Date(rpkm_day_2) : currentTime;
      if (currentTime >= rpkm_day_2_time) setEventText('Onsite 4 สิงหาคม 2567');
    }
  }, []);
  return (
    <div className="bg-[#EAE3C3]">
      <div className="bg-[url('/rpkm/staff/background.svg')] w-full bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-row justify-items-center justify-center w-full h-fit py-6 overflow-hidden">
          <div className="[clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col justify-items-center items-center bg-[#FFFEF7E5] w-11/12 gap-y-10 pb-20">
            <div className="flex flex-col items-center">
              <div
                className="font-sopha text-8xl text-[#EB9096]"
                style={{
                  textShadow:
                    '-1px 1px 0 #183F86, 1px 1px 0 #183F86, 1px -1px 0 #183F86, -1px -1px 0 #183F86',
                }}
              >
                ยินดีต้อนรับ
              </div>
              <div
                className="font-sopha text-8xl text-[#67AB88] -mt-5"
                style={{
                  textShadow:
                    '-1px 1px 0 #183F86, 1px 1px 0 #183F86, 1px -1px 0 #183F86, -1px -1px 0 #183F86',
                }}
              >
                สตาฟ
              </div>
            </div>
            <div className="bg-[#183F86] w-4/5 text-white text-center rounded-r-full rounded-l-full">
              {eventText}
            </div>
            <div className="w-4/5 h-fit">
              <Scan />
            </div>
            <div className="text-xl font-semibold">QR-Reader</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
