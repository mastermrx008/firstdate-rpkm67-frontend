'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import {
  StyledInput,
  StyledSelect,
} from '@/components/(main)/register/StyledComponents';
import CurvedLineIcon from '@public/curved-line.svg';
import Button from '@/components/(main)/register/Button';
import { major } from '@/utils/register';
import toast from 'react-hot-toast';
import { UserDTO } from '@/dtos/userDTO';
import Spinner from '@/components/firstdate/Spinner';
import UserCard from '@/components/UserCard';

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

export default function Edit() {
  const router = useRouter();
  const [upload, setUpload] = useState(false);
  const { user, resetContext } = useAuth();
  const userId = user?.id;
  const [formData, setFormData] = useState<RegisterUser>({
    title: user?.title || '',
    firstname: user?.firstname || '',
    lastname: user?.lastname || '',
    nickname: user?.nickname || '',
    faculty: user?.faculty || '',
    year: user?.year || 1,
    tel: user?.tel || '',
    parent_tel: user?.parentTel || '',
    parent: user?.parent || '',
    food_allergy: user?.foodAllergy || '',
    drug_allergy: user?.drugAllergy || '',
    illness: user?.illness || '',
  });
  const [errors, setErrors] = useState<string[]>([]);

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

  const validateForm = (): boolean => {
    const formErrors: string[] = [];
    if (!formData.title) formErrors.push('title');
    if (!formData.firstname) formErrors.push('firstname');
    if (!formData.lastname) formErrors.push('lastname');
    if (!formData.nickname) formErrors.push('nickname');
    if (!formData.faculty) formErrors.push('faculty');
    if (!formData.year) formErrors.push('year');
    if (formData.tel.length != 10) formErrors.push('tel');
    if (formData.parent_tel.length != 10) formErrors.push('parent_tel');
    if (!formData.parent) formErrors.push('parent');
    setErrors(formErrors);

    const isError = formErrors.length !== 0;
    if (isError) {
      toast.error('โปรดกรอกข้อมูลให้ครบ');
    }

    return !isError;
  };

  async function updateUserProfile(userData: RegisterUser) {
    try {
      const accessToken = await getAccessToken();
      const response = await apiClient.patch(
        `/user/profile/${userId}`,
        userData,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log('User profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setUpload(true);
      updateUserProfile(formData).then(async () => {
        toast.success('เเก้ไขข้อมูลสำเร็จ');
        await resetContext();
        router.back();
      });
    }
  };

  return (
    <div className="flex items-center flex-col w-[95%] min-h-[calc(95vw*(801/371))] my-[5%] mx-auto bg-white border-[1px] rounded-xl border-black [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)]">
      {upload && (
        <div className="z-[999] fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <Spinner />
        </div>
      )}

      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-4 font-season text-project-yellow drop-shadow-">
          ข้อมูลส่วนตัว
        </h2>
        <UserCard disableEditIcon={true} />
      </div>
      <div className="flex flex-col py-10 px-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-center">ข้อมูลส่วนตัว</h3>
            <label className="flex flex-col items-start w-1/2">
              คำนำหน้าชื่อ
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

            <div className="flex space-x-2">
              <label>
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
                      value={m.id}
                      key={m.id}
                    >
                      {m.name}
                    </option>
                  ))}
                </StyledSelect>
              </label>

              <label>
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

            <label>
              <span>เบอร์โทรศัพท์</span>
              <div className="flex items-center">
                <StyledInput
                  type="text"
                  name="tel"
                  placeholder="เบอร์โทรศัพท์"
                  value={formData.tel}
                  onChange={handleInputChange}
                  error={errors.includes('tel')}
                />
              </div>
            </label>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-center mb-2">
              ข้อมูลผู้ปกครอง
            </h3>
            <label>
              <span>เบอร์โทรศัพท์ของผู้ปกครอง</span>
              <div className="flex pb-2">
                <StyledInput
                  type="text"
                  name="parent_tel"
                  placeholder="เบอร์โทรศัพท์"
                  value={formData.parent_tel}
                  onChange={handleInputChange}
                  error={errors.includes('parent_tel')}
                />
              </div>
            </label>
            <label>
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
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-center">
              ข้อมูลด้านสุขภาพ
            </h3>

            <div className="flex flex-col gap-2">
              <label>
                <span>อาหารที่แพ้</span>
                <StyledInput
                  type="text"
                  name="food_allergy"
                  placeholder="อาหารที่แพ้"
                  value={formData.food_allergy}
                  onChange={handleInputChange}
                  error={errors.includes('food_allergy')}
                />
              </label>

              <label>
                <span>ยาที่แพ้</span>
                <StyledInput
                  type="text"
                  name="drug_allergy"
                  placeholder="ยาที่แพ้"
                  value={formData.drug_allergy}
                  onChange={handleInputChange}
                  error={errors.includes('drug_allergy')}
                />
              </label>

              <label>
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
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <Image
              src={CurvedLineIcon}
              alt="curved-line-icon"
              className="mb-2"
            />
            <Button
              variant="fuchsia"
              onClick={handleSubmit}
            >
              ยืนยันข้อมูล
            </Button>
            <Button
              variant="white"
              onClick={() => router.back()}
            >
              ยกเลิก
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
