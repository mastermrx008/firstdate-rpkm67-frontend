'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Border from '@/components/Border';
import StarIcon from '@public/star.svg';
import CurvedLineIcon from '@public/curved-line.svg';
import Image from 'next/image';

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    prefix: '',
    firstname: '',
    lastname: '',
    nickname: '',
    faculty: '',
    year: '',
    countryCode: '',
    phone: '',
    guardianCountryCode: '',
    guardianPhone: '',
    guardianRelation: '',
    foodAllergy: '',
    drugAllergy: '',
    congenitalDisease: '',
  });
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
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
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
            <h2 className="text-2xl font-bold">ข้อมูลส่วนตัว</h2>
            <select
              name="prefix"
              value={formData.prefix}
              onChange={handleInputChange}
            >
              <option
                disabled
                value=""
              >
                คำนำหน้า
              </option>
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
              value={formData.firstname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="นามสกุล"
              value={formData.lastname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="nickname"
              placeholder="ชื่อเล่น"
              value={formData.nickname}
              onChange={handleInputChange}
            />
            <div className="flex flex-row justify-between">
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleInputChange}
              >
                <option
                  disabled
                  value=""
                >
                  คณะ
                </option>
                <option value="21">วิศวกรรมศาสตร์ 1</option>
                <option value="22">วิศวกรรมศาสตร์ 2</option>
              </select>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              >
                <option
                  disabled
                  value=""
                >
                  ชั้นปี
                </option>
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
                name="countryCode"
                placeholder="+66"
                value={formData.countryCode}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="เบอร์โทรศัพท์"
                value={formData.phone}
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
                name="guardianCountryCode"
                placeholder="+66"
                value={formData.guardianCountryCode}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="guardianPhone"
                placeholder="เบอร์โทรศัพท์"
                value={formData.guardianPhone}
                onChange={handleInputChange}
              />
            </div>
            <select
              name="guardianRelation"
              value={formData.guardianRelation}
              onChange={handleInputChange}
            >
              <option
                disabled
                value=""
              >
                ความสัมพันธ์
              </option>
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
            <h2 className="text-2xl font-bold">ข้อมูลด้านสุขภาพ</h2>
            <input
              type="text"
              name="foodAllergy"
              placeholder="อาหารที่แพ้"
              value={formData.foodAllergy}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="drugAllergy"
              placeholder="ยาที่แพ้"
              value={formData.drugAllergy}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="congenitalDisease"
              placeholder="โรคประจำตัว"
              value={formData.congenitalDisease}
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
