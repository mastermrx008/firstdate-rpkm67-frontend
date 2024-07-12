import React from 'react';
import TV from '@public/user-card/tv.png';
import EditIcon from '@public/user-card/edit-icon.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const UserCard = () => {
  const router = useRouter();
  const { user } = useAuth();
  const name = `${user?.firstname} ${user?.lastname}`;
  const id = user?.email.split('@')[0];
  const image = user?.photo_url;

  return (
    <div className="relative w-full h-full flex justify-center items-center p-4">
      <Image
        src={TV}
        alt="tv"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-[15%] left-[9%] w-[65%] h-[65%] flex flex-col items-center justify-center p-4 bg-blue-900 rounded-lg">
        <div className="w-[35%] h-[50%] overflow-hidden rounded-full">
          <img
            src={image}
            alt="user-picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center text-sm">
          <h2 className=" text-yellow-400 font-bold mt-2">{name}</h2>
          <p className="text-white">รหัสนิสิต {id}</p>
        </div>
      </div>
      <div
        className="absolute top-[5%] right-[2%] w-[20%]"
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
