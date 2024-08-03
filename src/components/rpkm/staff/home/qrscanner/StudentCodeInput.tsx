import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface StudentCodeInputProps {
  sendCheckInRequest: (
    mode: 'userId' | 'studentId',
    id: string
  ) => Promise<void>;
}

const StudentCodeInput = ({ sendCheckInRequest }: StudentCodeInputProps) => {
  const [studentId, setStudentId] = useState<string>('');

  const handleOnCheckIn = async () => {
    if (studentId.length !== 10) {
      toast.error('กรุณากรอกรหัสนิสิตให้ครบ 10 หลัก');
      return;
    }

    console.log(studentId);
    await sendCheckInRequest('studentId', studentId);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!'0123456789'.includes(value.at(-1) || '') || value.length > 10) {
      return;
    }
    setStudentId(value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-lg">กรอกรหัสนิสิต</div>
      <input
        className="w-full px-4 py-1 text-xl border rounded-md border-project-dark-blue focus:outline-none focus:border-blue-500"
        type="text"
        value={studentId}
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
