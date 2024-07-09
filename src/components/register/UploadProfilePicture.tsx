import React, { useState, ChangeEvent } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';

interface UploadProfilePictureProps {
  onNext: () => void;
}

const UploadProfilePicture: React.FC<UploadProfilePictureProps> = ({
  onNext,
}) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const { user } = useAuth();
  const userId = user?.id;

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handlePhotoUpload = async () => {
    if (!photo) return;

    const formData = new FormData();
    formData.append('picture', photo);

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
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const handleNextClick = () => {
    handlePhotoUpload().then(() => {
      onNext();
    });
  };

  return (
    <>
      <div className="relative mb-4">
        <div className="w-40 h-56 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden border border-gray-300">
          {photo ? (
            <img
              src={URL.createObjectURL(photo)}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
          <div className="bg-pink-500 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-1.104 0-2 .896-2 2v2h-2c-1.104 0-2 .896-2 2s.896 2 2 2h2v2c0 1.104.896 2 2 2s2-.896 2-2v-2h2c1.104 0 2-.896 2-2s-.896-2-2-2h-2v-2c0-1.104-.896-2-2-2z" />
            </svg>
          </div>
        </div>
      </div>
      <button
        className="bg-pink-300 text-black font-bold py-2 px-4 rounded-lg focus:outline-none"
        onClick={handleNextClick}
      >
        ต่อไป
      </button>
    </>
  );
};

export default UploadProfilePicture;
