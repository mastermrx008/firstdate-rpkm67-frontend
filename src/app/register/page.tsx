'use client';

import { useEffect, useState } from 'react';
import Border from '@/components/Border';
import SGCUIcon from '@/assets/logo/sgcu.svg';
import Image from 'next/image';
import axios from 'axios';

// TODO: setup env
// For dev purpose (Also, should we use proxy server?)
const API_URL = 'https://rpkm67-dev.sgcu.in.th';

export default function Register() {
  // TODO: Maybe use useContext for AuthProvider
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [userId, setUserId] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const googleLoginUrl = API_URL + '/api/v1/auth/google-url';
      const response = await axios.get(googleLoginUrl);
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error fetching Google login URL:', error);
    }
  };

  const handleTokenExchange = async (code: string) => {
    try {
      const tokenExchangeUrl = API_URL + `/api/v1/auth/verify-google/${code}`;
      const response = await axios.get(tokenExchangeUrl);
      const { accessToken, refreshToken, userId } = response.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setUserId(userId);
    } catch (error) {
      console.error('Error exchanging code for tokens:', error);
    }
  };

  // TODO: add access/refresh tokens functions to AuthProvider
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      handleTokenExchange(code);
    }
  }, []);

  const refreshAccessToken = async () => {
    try {
      const refreshUrl = API_URL + '/api/v1/auth/refresh';
      const response = await axios.post(refreshUrl, { refreshToken });
      const newAccessToken = response.data.accessToken;
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="dark-pink"
        className="flex flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center">
          <Image
            src={SGCUIcon}
            alt="sgcu-icon"
            className="mt-4"
          />
          <h1 className="text-6xl font-bold text-center text-white font-season italic mt-16 drop-shadow-text">
            Welcome,
          </h1>
          <h2 className="text-5xl text-center text-white font-season italic mt-4 drop-shadow-text">
            CU108
          </h2>
          <h3 className="text-xl text-center text-white font-medium mt-6">
            In honor of our wander,
          </h3>
          <h3 className="text-xl text-center text-white font-medium">
            you are the answer.
          </h3>
        </div>
        <div>
          <button
            onClick={handleGoogleLogin}
            className="text-xl w-64 h-12 rounded-md font-semibold bg-white shadow-[0px_2px_4px_#00000026]"
          >
            ลงทะเบียน
          </button>
          <p className="text-sm text-center font-medium text-black mt-2">
            *โปรดใช้ Email ของจุฬาฯในการลงทะเบียน*
          </p>
        </div>
        <div className="flex mb-36 flex-col items-center">
          <p className="text-lg text-center font-semibold text-black">
            เคยลงทะเบียนมาแล้ว?
          </p>
          <button
            className="text-xl text-center font-semibold text-black underline drop-shadow-text"
            onClick={handleGoogleLogin}
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </Border>
    </main>
  );
}
