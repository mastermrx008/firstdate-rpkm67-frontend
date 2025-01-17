'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import StarIcon from '@public/star.svg';
import CurvedLineIcon from '@public/curved-line.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import UploadProfilePicture from '@/components/(main)/register/UploadProfilePicture';
import {
  StyledInput,
  StyledSelect,
} from '@/components/(main)/register/StyledComponents';
import Button from '@/components/(main)/register/Button';
import { major } from '@/utils/register';
import toast from 'react-hot-toast';
import { UserDTO } from '@/dtos/userDTO';
import Border from '@/components/firstdate/Border';
import Spinner from '@/components/firstdate/Spinner';
import Pdpa from '@/components/(main)/pdpa';

type RegisterUser = Pick<
  UserDTO,
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
    year: 1,
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
  const { user, resetContext } = useAuth();
  const userId = user?.id;
  const [upload, setUpload] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let value: string = e.target.value;
    if (['tel', 'parent_tel'].includes(e.target.name)) {
      value =
        '0123456789'.includes(value.at(-1) || '') && value.length <= 10
          ? value
          : value.slice(0, -1);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'year' ? +value : value,
    });
  };

  const validateStep = (): boolean => {
    const stepErrors: string[] = [];
    switch (currentStep) {
      case 0:
        // Note: validate in the UploadProfilePicture Component
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
        if (formData.tel.length != 10) stepErrors.push('tel');
        if (formData.parent_tel.length != 10) stepErrors.push('parent_tel');
        if (!formData.parent) stepErrors.push('parent');
        break;
      case 3:
        // Note: not validate food, drug, and illness
        break;
    }

    setErrors(stepErrors);
    const isError = stepErrors.length !== 0;
    if (isError) {
      toast.error('โปรดกรอกข้อมูลให้ครบ');
    }

    return !isError;
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

  const handleSubmit = () => {
    if (validateStep()) {
      setIsPdpaOpen(true);
    }
  };

  const handlePdpaSuccess = async () => {
    setUpload(true);
    updateUserProfile(formData)
      .then(async () => {
        if (!user) return;
        toast.success('ลงทะเบียนสำเร็จ');

        const newPath = '/register-done';

        await resetContext();
        router.push(newPath);
      })
      .catch(() => setUpload(false));
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
            <label className="w-3/5">
              <span>คำนำหน้าชื่อ</span>
              <StyledSelect
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                error={errors.includes('title')}
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
                <option value="ไม่ระบุ">ไม่ระบุ</option>
              </StyledSelect>
            </label>
            <label>
              <span>ชื่อจริง</span>
              <StyledInput
                type="text"
                name="firstname"
                placeholder="ชื่อจริง"
                value={formData.firstname}
                onChange={handleInputChange}
                error={errors.includes('firstname')}
              />
            </label>

            <label>
              <span>นามสกุล</span>
              <StyledInput
                type="text"
                name="lastname"
                placeholder="นามสกุล"
                value={formData.lastname}
                onChange={handleInputChange}
                error={errors.includes('lastname')}
              />
            </label>

            <label>
              <span>ชื่อเล่น</span>
              <StyledInput
                type="text"
                name="nickname"
                placeholder="ชื่อเล่น"
                value={formData.nickname}
                onChange={handleInputChange}
                error={errors.includes('nickname')}
              />
            </label>

            <div className="flex flex-row justify-between gap-2">
              <label className="w-4/5 flex flex-col">
                <span>คณะ</span>
                <StyledSelect
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleInputChange}
                  error={errors.includes('faculty')}
                >
                  <option
                    disabled
                    value=""
                  >
                    คณะ
                  </option>
                  {major.map((m) => (
                    <option
                      key={m.id}
                      value={m.id}
                    >
                      {m.name}
                    </option>
                  ))}
                </StyledSelect>
              </label>
              <label className="w-2/5 flex flex-col">
                <span>ชั้นปี</span>
                <StyledSelect
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  error={errors.includes('year')}
                >
                  <option
                    disabled
                    value={0}
                  >
                    ชั้นปี
                  </option>
                  <option value={1}>1</option>
                </StyledSelect>
              </label>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="pink"
                onClick={handleNextStep}
              >
                ต่อไป
              </Button>
              <Button
                variant="white"
                onClick={handlePrevStep}
              >
                ย้อนกลับ
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col space-y-4 items-center">
            <h2 className="text-2xl font-bold">ข้อมูลการติดต่อ</h2>
            <label className="flex flex-col">
              <span>เบอร์โทรศัพท์</span>
              <StyledInput
                type="text"
                name="tel"
                placeholder="เบอร์โทรศัพท์"
                value={formData.tel}
                onChange={handleInputChange}
                error={errors.includes('tel')}
              />
            </label>
            <Image
              src={CurvedLineIcon}
              alt="curved-line"
              className="mb-4"
            />
            <h2 className="text-2xl font-bold">ข้อมูลผู้ปกครอง</h2>
            <label className="flex flex-col">
              <span>เบอร์โทรศัพท์ของผู้ปกครอง</span>
              <StyledInput
                type="text"
                name="parent_tel"
                placeholder="เบอร์โทรศัพท์"
                value={formData.parent_tel}
                onChange={handleInputChange}
                error={errors.includes('parent_tel')}
              />
            </label>
            <label className="flex flex-col w-full pb-10">
              <span>ความสัมพันธ์</span>
              <StyledSelect
                name="parent"
                value={formData.parent}
                onChange={handleInputChange}
                error={errors.includes('parent')}
              >
                <option
                  disabled
                  value=""
                >
                  ความสัมพันธ์
                </option>
                <option value="บิดา">บิดา</option>
                <option value="มารดา">มารดา</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </StyledSelect>
            </label>
            <Button
              variant="pink"
              onClick={handleNextStep}
            >
              ต่อไป
            </Button>
            <Button
              variant="white"
              onClick={handlePrevStep}
            >
              ย้อนกลับ
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-center">ข้อมูลด้านสุขภาพ</h2>
            <label className="flex flex-col">
              <span>อาหารที่แพ้</span>
              <StyledInput
                type="text"
                name="food_allergy"
                placeholder="อาหารที่แพ้"
                value={formData.food_allergy}
                onChange={handleInputChange}
                error={errors.includes('foodAllergy')}
              />
            </label>

            <label className="flex flex-col">
              <span>ยาที่เเพ้</span>
              <StyledInput
                type="text"
                name="drug_allergy"
                placeholder="ยาที่แพ้"
                value={formData.drug_allergy}
                onChange={handleInputChange}
                error={errors.includes('drugAllergy')}
              />
            </label>

            <label className="flex flex-col">
              <span>โรคประจำตัว</span>
              <StyledInput
                type="text"
                name="illness"
                placeholder="โรคประจำตัว"
                value={formData.illness}
                onChange={handleInputChange}
                error={errors.includes('illness')}
              />
            </label>

            <div className="flex flex-col items-center gap-4 pt-12">
              <Button
                variant="fuchsia"
                onClick={handleSubmit}
              >
                ยืนยันข้อมูล
              </Button>
              <Button
                variant="white"
                onClick={handlePrevStep}
              >
                ย้อนกลับ
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Border variant="white-brown">
      {upload && (
        <div className="z-[999] fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div className="my-auto flex flex-col items-center justify-center">
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
