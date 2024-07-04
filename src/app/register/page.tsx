'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Border from '@/components/Border';
import StarIcon from '@public/star.svg';
import CurvedLineIcon from '@public/curved-line.svg';
import Image from 'next/image';

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
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">อัปโหลดรูปภาพ</h2>
            {/* Implement file upload component */}
            <button onClick={handleNextStep}>ต่อไป</button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold ">ข้อมูลส่วนตัว</h2>
            <select name="prefix">
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
              <option value="เด็กชาย">เด็กชาย</option>
              <option value="เด็กหญิง">เด็กหญิง</option>
            </select>
            <input
              type="text"
              name="firstname"
              placeholder="ชื่อจริง"
              onChange={handleInputChange}
            />
            <input
              type=""
              name="lastname"
              placeholder="นามสกุล"
              onChange={handleInputChange}
            />
            <input
              type=""
              name="nickname"
              placeholder="ชื่อเล่น"
              onChange={handleInputChange}
            />
            <div className="flex flex-row justify-between">
              <select name="faculty">
                <option value="21">วิศวกรรมศาสตร์ 1</option>
                <option value="22">วิศวกรรมศาสตร์ 2</option>
              </select>
              <select name="year">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <button onClick={handleNextStep}>ต่อไป</button>
            <button onClick={handlePrevStep}>ย้อนกลับ</button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col space-y-4 items-center">
            <h2 className="text-2xl font-bold">ข้อมูลการติดต่อ</h2>
            <div className="flex flex-row">
              <input
                type="text"
                name="country-code"
                placeholder="+66"
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="เบอร์โทรศัพท์"
                onChange={handleInputChange}
              />
            </div>

            <Image
              src={CurvedLineIcon}
              alt="curved-line"
              className="mb-4"
            />

            <h2 className="text-2xl font-bold">ข้อมูลผู้ปกครอง</h2>
            <div className="flex flex-row">
              <input
                type="text"
                name="guardian-country-code"
                placeholder="+66"
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="guardian-phone"
                placeholder="เบอร์โทรศัพท์"
                onChange={handleInputChange}
              />
            </div>
            <select name="guardian-relation">
              <option value="บิดา">บิดา</option>
              <option value="มารดา">มารดา</option>
            </select>

            <button onClick={handleNextStep}>ต่อไป</button>
            <button onClick={handlePrevStep}>ย้อนกลับ</button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold ">ข้อมูลด้านสุขภาพ</h2>
            <input
              type="text"
              name="food-allergy"
              placeholder="อาหารที่แพ้"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="drug-allergy"
              placeholder="ยาทที่แก้"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="congenital-disease"
              placeholder="โรคประจำตัว"
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>ยืนยันข้อมูล</button>
            <button onClick={handlePrevStep}>ย้อนกลับ</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="white-brown"
        className="flex flex-col items-center justify-between"
      >
        <div className="w-auto h-screen flex flex-col items-center justify-center">
          <Image
            src={StarIcon}
            alt="star"
            className="mb-4"
          />
          <div className="w-full max-w-md">
            <form className="space-y-6">{renderStep()}</form>
          </div>
        </div>
      </Border>
    </main>
  );
}
