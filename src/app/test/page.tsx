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
        <div>
          <h1>Modal</h1>
          <p>Modal Content</p>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
