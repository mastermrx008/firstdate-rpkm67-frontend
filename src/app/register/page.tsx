'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Border from '@/components/Border';
import StarIcon from '@public/star.svg';
import CurvedLineIcon from '@public/curved-line.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import Pdpa from '@/components/pdpa';
import { User } from '@/types/user';
import UploadProfilePicture from '@/components/register/UploadProfilePicture';
import { isUserRegistered } from '@/utils/user';

type RegisterUser = Pick<
  User,
  | 'title'
  | 'firstname'
  | 'lastname'
  | 'nickname'
  | 'faculty'
  | 'year'
  | 'tel'
  | 'parent_tel'
  | 'parent'
  | 'food_allergy'
  | 'drug_allergy'
  | 'illness'
>;

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<RegisterUser>({
    title: '',
    firstname: '',
    lastname: '',
    nickname: '',
    faculty: '',
    year: 0,
    tel: '',
    parent_tel: '',
    parent: '',
    food_allergy: '',
    drug_allergy: '',
    illness: '',
  });
  const [isPdpaOpen, setIsPdpaOpen] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const { user } = useAuth();
  const userId = user?.id;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'year' ? +e.target.value : e.target.value,
    });
  };
  console.log(formData);

  const validateStep = (): boolean => {
    let stepErrors: string[] = [];
    switch (currentStep) {
      case 0:
        // Note: Handle in the UploadProfilePicture Component
        break;
      case 1:
        if (!formData.title) stepErrors.push('title');
        if (!formData.firstname) stepErrors.push('firstname');
        if (!formData.lastname) stepErrors.push('lastname');
        if (!formData.nickname) stepErrors.push('nickname');
        if (!formData.faculty) stepErrors.push('faculty');
        if (!formData.year) stepErrors.push('year');
        break;
      case 2:
        if (!formData.tel) stepErrors.push('tel');
        if (!formData.parent_tel) stepErrors.push('parent_tel');
        if (!formData.parent) stepErrors.push('parent');
        break;
      case 3:
        // Validate food, drug, illness mai krub
        break;
    }
    setErrors(stepErrors);
    return stepErrors.length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setCurrentStep((currentStep) => currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  async function updateUserProfile(userData: RegisterUser) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setIsPdpaOpen(true);
    }
  };

  const handlePdpaSuccess = async () => {
    updateUserProfile(formData).then(() => {
      if (!user) return;

      const isStaff = user.role == 'staff';
      const newPath = isStaff ? '/staff/home' : '/registered';

      router.push(newPath);
    });
    console.log('Form submitted', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col space-y-10">
            <h2 className="text-2xl font-bold text-center">อัปโหลดรูปภาพ</h2>
            <UploadProfilePicture onNext={() => setCurrentStep(1)} />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-center">ข้อมูลส่วนตัว</h2>
            <select
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className={
                errors.includes('title') ? 'border-2 border-red-500' : ''
              }
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
              className={
                errors.includes('firstname') ? 'border-2 border-red-500' : ''
              }
            />
            <input
              type="text"
              name="lastname"
              placeholder="นามสกุล"
              value={formData.lastname}
              onChange={handleInputChange}
              className={
                errors.includes('lastname') ? 'border-2 border-red-500' : ''
              }
            />
            <input
              type="text"
              name="nickname"
              placeholder="ชื่อเล่น"
              value={formData.nickname}
              onChange={handleInputChange}
              className={
                errors.includes('nickname') ? 'border-2 border-red-500' : ''
              }
            />
            <div className="flex flex-row justify-between">
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleInputChange}
                className={
                  errors.includes('faculty') ? 'border-2 border-red-500' : ''
                }
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
                className={
                  errors.includes('year') ? 'border-2 border-red-500' : ''
                }
              >
                <option
                  disabled
                  value={0}
                >
                  ชั้นปี
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
              <button
                className="mt-3 w-[130px] h-[40px] font-medium text-black text-xl rounded-lg bg-project-pink"
                onClick={handleNextStep}
              >
                ต่อไป
              </button>
              <button
                className="mt-3 w-[130px] h-[40px] font-medium text-project-fuchsia text-xl rounded-lg bg-pro border-project-fuchsia border-[1px]"
                onClick={handlePrevStep}
              >
                ย้อนกลับ
              </button>
            </div>
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
                className={
                  errors.includes('tel') ? 'border-2 border-red-500' : ''
                }
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
                className={
                  errors.includes('parent_tel') ? 'border-2 border-red-500' : ''
                }
              />
            </div>
            <select
              name="parent"
              value={formData.parent}
              onChange={handleInputChange}
              className={
                errors.includes('parent') ? 'border-2 border-red-500' : ''
              }
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
    <Border variant="white-brown">
      <div className="h-screen flex flex-col items-center justify-center">
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
  );
}
