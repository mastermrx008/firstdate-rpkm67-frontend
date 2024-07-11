'use client';
import { useState } from 'react';

import BaanModal from '@/components/rpkm/Modal/BaanModal';
import Modal from '@/components/rpkm/Modal/Modal';

import Flower1 from '@public/registered/flower1.png';

export default function TestPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <BaanModal
        open={open}
        setOpen={setOpen}
        callBackFunction={() => {
          console.log('callback function');
        }}
        name={{ th: 'ชื่อ', en: 'Name' }}
        content={{ th: 'เนื้อหา', en: 'Content' }}
        size="S"
        instagram="isd.sgcu"
        image={Flower1}
      />
      {/* <Modal
        variant="red"
        open={open}
        setOpen={setOpen}
        callBackFunction={() => {
          console.log('callback function');
        }}
      >
        <p>Modal Content</p>
      </Modal> */}
    </div>
  );
}
