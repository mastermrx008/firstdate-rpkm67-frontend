import React, { ChangeEvent, useState } from 'react';
import TV from '@public/user-card/tv.png';
import EditIcon from '@public/user-card/edit-icon.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/utils/axios';
import { getAccessToken } from '@/utils/auth';
import Spinner from './firstdate/Spinner';

interface UserCradProps {
  disableEditIcon?: boolean;
}

const UserCard = ({ disableEditIcon }: UserCradProps) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const router = useRouter();
  const { user, resetContext } = useAuth();
  const userId = user?.id;
  const name = `${user?.firstname} ${user?.lastname}`;
  const studentId = user?.email.split('@')[0];
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState<string | undefined>(
    user?.photoUrl
  );

  console.log(user);

  const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCurrentPhotoUrl(undefined);
      await handlePhotoUpload(file);
    }
  };

  const handlePhotoUpload = async (file: File) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('picture', file);
    console.log(formData);
    setUploading(true);
    try {
      const accessToken = await getAccessToken();
      const response = await apiClient.put(
        `/user/picture/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Photo uploaded successfully:', response.data);
      setCurrentPhotoUrl(response.data.photo_url);
      resetContext();
    } catch (error) {
      console.error('Error uploading photo:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {uploading && (
        <div className="fixed inset-0 -top-10 flex items-center justify-center bg-black bg-opacity-20 z-[999]">
          <Spinner />
        </div>
      )}
      <div className="relative w-full h-full flex justify-center items-center p-4">
        <Image
          src={TV}
          alt="tv"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-[12%] left-[8%] w-[66%] h-[70%] flex flex-col items-center justify-center p-4 bg-blue-900 rounded-lg">
          {disableEditIcon && (
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-1000"
            />
          )}
          <div className="relative w-[35%] h-[50%] overflow-hidden rounded-full">
            {currentPhotoUrl && (
              <Image
                src={currentPhotoUrl}
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
        {!disableEditIcon && (
          <div
            className="absolute top-[5%] right-[2%] w-[20%]"
            onClick={() => router.push('/edit')}
          >
            <Image
              src={EditIcon}
              alt="edit-icon"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UserCard;
