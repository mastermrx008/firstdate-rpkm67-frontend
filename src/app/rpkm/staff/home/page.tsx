'use client';

import Navbar from '@/components/rpkm/Navbar';
import Scan from '@/components/rpkm/staff/home/qrscanner/QRScanner';
import { useAuth } from '@/context/AuthContext';
import { createCheckIn, createCheckInByStudentId } from '@/utils/checkin';
import { getCurrentTime } from '@/utils/time';
import React, { useEffect, useState } from 'react';
import FailureModal from '@/components/rpkm/staff/home/qrscanner/failureModal';
import ConfirmationModal from '@/components/rpkm/staff/home/qrscanner/confirmationModal';
import { CheckIn } from '@/types/checkIn';
import { FRESHYNIGHT_EVENT, RPKM_DAY_1, RPKM_DAY_2 } from '@/utils/date';
import StudentCodeInput from '@/components/rpkm/staff/home/qrscanner/StudentCodeInput';
import moment from 'moment';

function Page() {
  const [eventText, setEventText] = useState<string>('');
  const { user } = useAuth();

  //modal state
  const [status, setStatus] = useState<'success' | 'error' | 'idle'>('idle');
  const [taken, setTaken] = useState<boolean>(false);
  const [error, setError] = useState<string | React.ReactNode>('');
  const [errorTopic, setErrorTopic] = useState('');
  const [checkInData, setCheckInData] = useState<CheckIn | null>(null);

  useEffect(() => {
    const initialize = async () => {
      const currentTime = (await getCurrentTime()).currentTime;

      if (currentTime >= FRESHYNIGHT_EVENT) {
        setEventText('Freshy Night');
      } else if (currentTime >= RPKM_DAY_1) {
        setEventText('Onsite 4 สิงหาคม 2567');
      } else if (currentTime >= RPKM_DAY_2) {
        setEventText('Onsite 3 สิงหาคม 2567');
      }
    };

    initialize();
    localStorage.setItem('enable', 'true');
  }, []);

  const handleCloseModal = () => {
    setStatus('idle');
    localStorage.setItem('enable', 'true');
  };

  const sendCheckInRequest = async (
    mode: 'userId' | 'studentId',
    id: string
  ) => {
    if (!user || localStorage.getItem('enable') !== 'true') {
      return;
    }

    //need to use localstorage to prevent user scaning multiple time
    //don't use useState because it's not working with qrscanner
    localStorage.setItem('enable', 'false');

    let event = '';
    const currentTime = (await getCurrentTime()).currentTime;

    //need to check date every time because qr component don't update function when function re-render
    if (currentTime >= FRESHYNIGHT_EVENT) {
      event = 'freshy-night';
    } else if (currentTime >= RPKM_DAY_2) {
      event = 'rpkm-day-2';
    } else if (currentTime >= RPKM_DAY_1) {
      event = 'rpkm-day-1';
    } else {
      console.log('invalid date');
      localStorage.setItem('enable', 'true');
      return;
    }

    const newCheckInData: CheckIn | null =
      mode == 'userId'
        ? await createCheckIn(id, user.email, event)
        : await createCheckInByStudentId(id, user.email, event);

    if (newCheckInData) {
      if (newCheckInData.checkIn.isDuplicate) {
        const date = moment(newCheckInData.checkIn.timestamp);
        setStatus('error');
        setError(
          <div>
            ผู้ใช้สแกน QR-code นี้แล้ว
            <br />
            {`เมื่อเวลา ${date.format('HH:mm')} น.`}
          </div>
        );
        setErrorTopic('Already taken!');
        setTaken(true);
        return;
      }

      setCheckInData(newCheckInData);
      setStatus('success');
    } else {
      setStatus('error');
      setError('แสกนไม่สำเร็จ โปรดลองอีกครั้ง');
      setErrorTopic('Invalid QR-code');
      setTaken(false);
    }
  };

  return (
    <div className="bg-[#EAE3C3]">
      <div className="bg-[url('/rpkm/staff/background.svg')] w-full bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-row justify-items-center justify-center w-full h-fit py-6">
          <div className="relative flex flex-col justify-items-center items-center w-11/12 gap-y-10 pb-20 z-10">
            <div className="[clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col justify-items-center items-center bg-[#FFFEF7E5] w-full h-full absolute -z-10" />
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
            <StudentCodeInput sendCheckInRequest={sendCheckInRequest} />
            <div className="w-4/5 h-fit">
              <Scan sendCheckInRequest={sendCheckInRequest} />
            </div>
            <div className="text-xl font-semibold">QR-Reader</div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={status == 'success'}
        userData={checkInData}
        message="The check-in was successful."
        onClose={handleCloseModal}
      />

      <FailureModal
        isOpen={status == 'error'}
        message={error}
        topic={errorTopic}
        onClose={handleCloseModal}
        taken={taken}
      />
    </div>
  );
}

export default Page;
