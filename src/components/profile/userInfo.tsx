import { Icon } from '@iconify/react';
import { User } from '@/types/user';
import placeholder from '@public/placeholder.svg';
import Image from 'next/image';
import Link from 'next/link';

interface Info {
    user: User;
}

export default function UserInfo({ user }: Info) {
  return (
    <div className="flex justify-center gap-2 items-end">
      <div className="relative flex justify-center items-center w-[66px]">
        <Link
            className="absolute bottom-9 flex items-center flex-col"
            href="/edit"
        >
            <Icon
            icon="ri:edit-fill"
            className="size-11 p-2.5 rounded-full bg-white text-black drop-shadow"
            />
            <span className="text-center font-medium text-base">แก้ไขข้อมูล</span>
        </Link>
      </div>
      <div className="flex flex-col justify-center text-center">
        <div className="flex justify-center items-center w-36 h-48 mb-2 bg-white rounded-t-full drop-shadow">
          <Image
            src={user?.photoUrl || placeholder}
            alt="profile"
            className={`w-full object-cover rounded-t-full p-1.5
                            ${user?.photoUrl ? ' h-48' : 'mt-5 h-32'}
                            `}
          />
        </div>
        <div className="flex justify-center items-center flex-wrap font-semibold text-2xl gap-2 max-w-36">
          <span>{user?.firstname}</span>
          <span>{user?.lastname}</span>
          <span>#{user?.year}</span>
        </div>
        <span className="font-semibold text-2xl">{user?.faculty}</span>
      </div>
      <div className="relative flex justify-center items-center w-[66px]">
        <Link
            className="absolute bottom-9 flex items-center flex-col"
            href="/firstdate/map"
        >
            <Icon
            icon="material-symbols:map"
            className="size-11 p-2.5 rounded-full bg-white text-black drop-shadow"
            />
            <span className="text-center font-medium text-base">แผนที่</span>
        </Link>
      </div>
    </div>
  );
}
