import Border from '@/components/Border';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import object from '@/assets/emergency-contact/Objects.svg';
import EmergencyIcon from '@/assets/emergency-contact/emergency-icon.svg';
import EmergencyCallBlock from '@/components/emergency-contact/EmergencyCallBlock';

export default function Emergency() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border variant="transparent">
        <div className="mt-7 flex flex-col items-center gap-y-3">
          <h1 className="w-4/5 text-center font-light text-4xl font-season italic ">
            Emergency Contact
          </h1>
          <Image
            src={object}
            alt="object"
          ></Image>
        </div>
        <div className="mt-2 flex flex-col gap-y-4 items-center">
          <p className="font-athiti font-medium">เหตุฉุกเฉิน</p>
          <div className="size-[221px] bg-project-gray/50 rounded-full flex flex-col items-center justify-center">
            <div className="size-[185px] bg-project-gray rounded-full flex flex-col items-center justify-center">
              <a href="tel:022180000">
                <div className="size-[163px] bg-project-fuchsia rounded-full flex flex-col items-center justify-center">
                  <Image
                    src={EmergencyIcon}
                    alt="emergency icon"
                    className=""
                  ></Image>
                  <p className="text-white text-xs">ศูนย์ รปภ. จุฬาฯ</p>
                  <p className="text-white text-xs">02-218-0000</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-3 w-11/12">
          <EmergencyCallBlock
            text="เหตุภายนอกมหาวิทยาลัย"
            phoneNumber="191"
          />
          <EmergencyCallBlock
            text="อุบัติเหตุร้ายแรง"
            phoneNumber="1669"
          />
        </div>
        <div className="w-full flex flex-col gap-y-4 mt-7 items-center">
          <Image
            src={object}
            alt="object"
          ></Image>
          <button className="w-3/4 p-2 rounded-lg border-[1px] border-project-fuchsia">
            <a href="/home">
              <div className="flex flex-row gap-x-2 text-project-fuchsia justify-center items-center">
                <Icon
                  icon="ion:chevron-back"
                  width={24}
                  height={24}
                />
                <p className="font-athiti text-xl font-medium">
                  กลับสู่หน้าหลัก
                </p>
              </div>
            </a>
          </button>
        </div>
      </Border>
    </main>
  );
}
