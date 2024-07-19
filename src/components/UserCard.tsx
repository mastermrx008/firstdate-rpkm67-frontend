import React from 'react';
import TV from '@public/user-card/tv.png';
import EditIcon from '@public/user-card/edit-icon.svg';
import profilePlaceholder from '@public/placeholder.svg'
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const UserCard = () => {
  const router = useRouter();
  const { user } = useAuth();
  const name = `${user?.firstname} ${user?.lastname}`;
  const studentId = user?.email.split('@')[0];
  const photoUrl = user?.photoUrl;

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        src={TV}
        alt="tv"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-[12%] left-[8%] w-[66%] h-[70%] flex flex-col items-center justify-center p-4 bg-blue-900 rounded-lg">
        <div className="relative w-[35%] h-[50%] overflow-hidden rounded-full">
          {(
            <Image
              src={photoUrl || profilePlaceholder}
              alt="user-picture"
              className="w-full h-full object-cover"
              fill
            /> 
          )}
        </div>
        <div className="text-center">
          <h2 className="text-sm text-yellow-400 font-bold mt-2">{name}</h2>
          <p className="text-xs text-white">รหัสนิสิต {studentId}</p>
        </div>
      </div>
      <div
        className="absolute top-[5%] right-[0%] w-[20%] cursor-pointer"
        onClick={() => router.push('/edit')}
      >
        <Image
          src={EditIcon}
          alt="edit-icon"
        />
      </div>
    </div>
  );
};

export default UserCard;
