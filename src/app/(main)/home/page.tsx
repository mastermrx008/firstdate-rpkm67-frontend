'use client';

import Image from 'next/image';
import placeholder from '@public/placeholder.svg';
import something from '@public/home/something.svg';
import eBookIcon from '@public/home/icon/ebook.svg';
import contactIcon from '@public/home/icon/contactlist.svg';
import qrcodeIcon from '@public/home/icon/qrcode.svg';
import editIcon from '@public/home/icon/edit.svg';
import logoutIcon from '@public/home/icon/logout.svg';
import { useEffect, useState } from 'react';
import QrCodeModal from '@/components/(main)/home/QrCodeModal';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import BottomButton from '@/components/(main)/home/BottomButton';
import WaitModal from '@/components/(main)/home/WaitModal';
import JoinModal from '@/components/(main)/home/JoinModal';
import { isUserRegistered } from '@/utils/user';
import Border from '@/components/firstdate/Border';
import CustomButton from '@/components/(main)/home/CustomButton';
import Link from 'next/link';
import { getMajorNameById } from '@/utils/register';
import { getCurrentTime } from '@/utils/time';

export default function Home() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [clientTime, setClientTime] = useState(new Date('1980-01-01'));
  const [qrModal, setQrModal] = useState<boolean>(false);
  const [waitModal, setWaitModal] = useState<boolean>(false);
  const [interestedEvent, setInterestedEvent] = useState<
    'first-date' | 'rup-peun'
  >('first-date');
  const [joinModal, setJoinModal] = useState<boolean>(false);
  const [announce, setAnnounce] = useState<boolean>(false);
  const [Isjoined, setIsJoined] = useState<boolean>(false);

  useEffect(() => {
    getCurrentTime().then((res) => {
      setClientTime(res.currentTime);
    });
  }, []);
  
  useEffect(() => {
    console.log(Isjoined)
  }, [Isjoined]);

  return (
    <>
      <Border
        variant="transparent"
        className="pl-[0%] pr-[0%] pt-[0%]"
      >
        <div className="flex flex-col w-[90%] h-[90vh] opacity-100 justify-center">
          <h1 className="text-center text-black font-season italic text-[4.4vh]">
            Welcome,
          </h1>
          <div className="flex justify-center items-center">
            <h1 className="text-center bg-gradient-to-t bg-clip-text text-transparent from-project-fuchsia from-30% via-80% to-95% to-project-cream italic pr-1 font-season text-[2.85vh]">
              CU
            </h1>
            <h1 className="text-center bg-gradient-to-t bg-clip-text text-transparent from-project-fuchsia from-30% via-80% to-95% to-project-cream italic pr-1 font-season text-[3.3vh]">
              108
            </h1>
          </div>

          <center>
            <div className="flex flex-col items-center text-center justify-between h-[29.2vh] self-center">
              <div
                className="relative w-[15.81vh] h-[75%] rounded-t-full border-white shadow-[0px_0px_4px_.4px_#00000036]"
                style={{ borderWidth: '0.66vh', borderStyle: 'solid' }}
              >
                <Image
                  src={user?.photoUrl || placeholder.src}
                  alt="profile picture"
                  fill
                  className="rounded-t-full object-contain object-center"
                />
              </div>
              <h1 className="text-[2.63vh] font-semibold text-center text-black">
                {user?.firstname} {user?.lastname} #{user?.year}
                <br />
                {user && getMajorNameById(user?.faculty)}
              </h1>
            </div>
          </center>

          <center className="my-[1.32vh]">
            <Image
              src={something}
              alt="something"
              width={97}
              height={14}
            />
          </center>

          <div className="w-full flex items-center flex-col h-[26.34vh] justify-between font-medium text-[2.2vh]">
            <CustomButton
              currentDate={clientTime}
              varient="first-date"
              registered={!!user && isUserRegistered(user)}
              setWaitModal={setWaitModal}
              setEvent={setInterestedEvent}
            >
              <div>CU First Date 2024</div>
            </CustomButton>
            <CustomButton
              currentDate={clientTime}
              varient="rub-peun"
              registered={!!user && isUserRegistered(user)}
              setWaitModal={setWaitModal}
              setEvent={setInterestedEvent}
              setJoinModal={setJoinModal}
              setAnnounce={setAnnounce}
            >
              <div>Rub Peun Kao Mai 2024</div>
            </CustomButton>
            <CustomButton
              currentDate={clientTime}
              varient="e-book"
            >
              <Image
                src={eBookIcon}
                alt="E-book Icon"
                style={{ width: '2.63vh', height: '2.63vh' }}
              />
              <div>E-Book</div>
            </CustomButton>
            <CustomButton
              currentDate={clientTime}
              varient="contact-list"
              className="text-white"
            >
              <Image
                src={contactIcon}
                alt="Contact List Icon"
                style={{ width: '2.63vh', height: '2.63vh' }}
              />
              <Link href={'/emergency-contact'}>Emergency Contact</Link>
            </CustomButton>
          </div>

          <div className="flex justify-center gap-x-[1.76vh] mt-[1.32vh] text-[1.76vh]">
            <BottomButton
              onClick={() => setQrModal(true)}
              src={qrcodeIcon}
              text="My Qr"
            />
            <BottomButton
              onClick={() => router.push('/edit')}
              src={editIcon}
              text="แก้ไขข้อมูล"
            />
            <BottomButton
              onClick={logout}
              src={logoutIcon}
              text="logout"
            />
          </div>
        </div>
      </Border>
      <QrCodeModal
        setModal={setQrModal}
        modal={qrModal}
        userid={user ? user.id : ''}
      />
      <WaitModal
        modal={waitModal}
        setModal={setWaitModal}
        event={interestedEvent}
      />
      <JoinModal
        modal={joinModal}
        setModal={setJoinModal}
        announce={announce}
        isJoined={Isjoined}
        setIsJoined={setIsJoined}
      />
    </>
  );
}
