import { Icon } from '@iconify/react';
import placeholder from '@public/placeholder.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function UserInfo({ info }: any) {
  return (
    <div className="flex justify-center gap-2 items-end">
      <Link
        className="flex items-center flex-col"
        href="/edit"
      >
        <Icon
          icon="ri:edit-fill"
          className="w-11 h-11 p-3 rounded-full bg-white text-black drop-shadow"
        />
        <span className="text-center font-medium text-base">แก้ไขข้อมูล</span>
      </Link>
      <div className="flex flex-col justify-center text-center">
        <div className="flex justify-center items-center w-36 h-48 bg-white rounded-t-full drop-shadow">
          <Image
            src={info?.photoUrl || placeholder}
            alt="profile"
            className={`w-full object-cover rounded-t-full p-1.5
                            ${info?.photoUrl ? ' h-48' : 'mt-5 h-32'}
                            `}
          />
        </div>
        <div className="flex justify-center items-center font-semibold text-2xl gap-2 max-w-36">
          <span>{info?.firstname}</span>
          <span>{info?.lastname}</span>
          <span>#{info?.year}</span>
        </div>
        <span className="font-semibold text-2xl">{info?.faculty}</span>
      </div>
      <Link
        className="flex items-center flex-col"
        href="/firstdate/map"
      >
        <Icon
          icon="material-symbols:map"
          className="w-11 h-11 p-3 rounded-full bg-white text-black drop-shadow"
        />
        <span className="text-center font-medium text-base">แผนที่</span>
      </Link>
    </div>
  );
}
