'use client';

import { useState } from 'react';

import Modal from '@/components/rpkm/modal';

const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        setOpen={setOpen}
        variant="blue"
        callBackFunction={() => {
          console.log('callBackFunction');
        }}
      >
        <div className="text-center">
          <p className="text-xl font-semibold">ยืนยันการเลือกบ้าน</p>
          <p className="text-sm">*เมื่อยืนยันแล้วจะไม่สามารถแก้ไขได้อีก</p>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
