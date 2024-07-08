'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Border from '@/components/Border';
import StarIcon from '@public/star.svg';
import CurvedLineIcon from '@public/curved-line.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import Pdpa from '@/components/pdpa';

// refactor later
type UserData = {
  baan: string;
  drug_allergy: string;
  faculty: string;
  firstname: string;
  food_allergy: string;
  group_id: string;
  illness: string;
  lastname: string;
  nickname: string;
  parent: string;
  parent_tel: string;
  receive_gift: number;
  tel: string;
  title: string;
  year: number;
};

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPdpaOpen, setIsPdpaOpen] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    title: '',
    firstname: '',
    lastname: '',
    nickname: '',
    faculty: '',
    year: 0,
    tel: '',
    parent_tel: '',
    parent: '',
    baan: '',
    food_allergy: '',
    drug_allergy: '',
    illness: '',
    group_id: '',
    receive_gift: 0,
  });
  const router = useRouter();
  const { user } = useAuth();
  const userId = user?.id;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  async function updateUserProfile(userData: UserData) {
    try {
      const accessToken = await getAccessToken();
      const response = await apiClient.patch(
        `/user/profile/${userId}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('User profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPdpaOpen(true);
  };

  const handlePdpaSuccess = async () => {
    updateUserProfile(formData);
    console.log('Form submitted', formData);
    router.push('/registered');
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
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
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
                name="tel"
                placeholder="เบอร์โทรศัพท์"
                value={formData.tel}
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
                name="parent_tel"
                placeholder="เบอร์โทรศัพท์"
                value={formData.parent_tel}
                onChange={handleInputChange}
              />
            </div>
            <select
              name="parent"
              value={formData.parent}
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
              name="food_allergy"
              placeholder="อาหารที่แพ้"
              value={formData.food_allergy}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="drug_allergy"
              placeholder="ยาที่แพ้"
              value={formData.drug_allergy}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="illness"
              placeholder="โรคประจำตัว"
              value={formData.illness}
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
            <div className="space-y-6">{renderStep()}</div>
          </div>
        </div>
        <Pdpa
          isOpen={isPdpaOpen}
          onOpenChange={setIsPdpaOpen}
          onSuccess={handlePdpaSuccess}
        />
      </Border>
    </main>
  );
}
