import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface StudentCodeInputProps {
  sendCheckInRequest: (userId: string) => Promise<void>;
}

const StudentCodeInput = ({ sendCheckInRequest }: StudentCodeInputProps) => {
  const [studentCode, setStudentCode] = useState<string>('');

  const handleOnCheckIn = async () => {
    if (studentCode.length !== 10) {
      toast.error('กรุณากรอกรหัสนิสิตให้ครบ 10 หลัก');
      return;
    }

    console.log(studentCode);

    // if (!user) {
    //   return;
    // }

    await sendCheckInRequest('123');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!'0123456789'.includes(value.at(-1) || '') || value.length > 10) {
      return;
    }
    setStudentCode(value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-lg">กรอกรหัสนิสิต</div>
      <input
        className="w-full px-4 py-1 text-xl border rounded-md border-project-dark-blue focus:outline-none focus:border-blue-500"
        type="text"
        value={studentCode}
        onChange={handleOnChange}
        placeholder="รหัสนิสิต"
      />
      <button
        className="text-xl px-4 bg-rpkm-blue text-white rounded-md focus:outline-none"
        onClick={handleOnCheckIn}
      >
        submit
      </button>
    </div>
  );
};

export default StudentCodeInput;
