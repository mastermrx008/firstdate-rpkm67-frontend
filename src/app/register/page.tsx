'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Border from '@/components/Border';
import StarIcon from '@public/star.svg';
import Image from 'next/image';

const steps = [
  'อัปโหลดรูปภาพ',
  'ข้อมูลส่วนตัว',
  'ข้อมูลการติดต่อ',
  'ข้อมูลด้านสุขภาพ',
];

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    // Check for authentication cookie
    const checkAuth = async () => {
      const authCookie = document.cookie.includes('auth=');
      if (!authCookie) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    };
    // skip check auth for dev
    // checkAuth();
  }, [router]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement API call to submit data
    console.log('Form submitted:', formData);
    // router.push('/registered');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">อัปโหลดรูปภาพ</h2>
            {/* Implement file upload component */}
            <button
              onClick={handleNextStep}
              className="btn-primary"
            >
              ต่อไป
            </button>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">ข้อมูลส่วนตัว</h2>
            <input
              type="text"
              name="name"
              placeholder="ชื่อ-สกุล"
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="date"
              name="birthdate"
              onChange={handleInputChange}
              className="input-field"
            />
            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="btn-secondary"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={handleNextStep}
                className="btn-primary"
              >
                ต่อไป
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">ข้อมูลการติดต่อ</h2>
            <input
              type="tel"
              name="phone"
              placeholder="เบอร์โทรศัพท์"
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="address"
              placeholder="ที่อยู่"
              onChange={handleInputChange}
              className="input-field"
            />
            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="btn-secondary"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={handleNextStep}
                className="btn-primary"
              >
                ต่อไป
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">ข้อมูลด้านสุขภาพ</h2>
            <input
              type="text"
              name="healthInfo"
              placeholder="ข้อมูลสุขภาพ"
              onChange={handleInputChange}
              className="input-field"
            />
            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="btn-secondary"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={handleSubmit}
                className="btn-primary"
              >
                ยืนยันข้อมูล
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="dark-pink"
        className="flex flex-col items-center justify-between w-full max-w-md px-6 py-8"
      >
        <div className="flex flex-col items-center w-full">
          <Image
            src={StarIcon}
            alt="star"
            className="mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-6">ลงทะเบียน</h1>
          <div className="w-full bg-white rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-sm flex flex-col items-center ${
                    index <= currentStep ? 'text-pink-500' : 'text-gray-400'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 ${
                      index <= currentStep
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-xs text-center">{step}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute top-3 left-0 w-full h-1 bg-gray-200"></div>
              <div
                className={`absolute top-3 left-0 h-1 bg-pink-500 transition-all duration-300 ease-in-out`}
                style={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <form className="w-full space-y-6">{renderStep()}</form>
        </div>
      </Border>
    </main>
  );
}
