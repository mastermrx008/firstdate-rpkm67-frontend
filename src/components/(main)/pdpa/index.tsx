'use client';

import { pdpaMarkdown } from '@/components/(main)/pdpa/pdpaMarkdown';
import { cn } from '@/lib/utils';
import { useCallback, useState } from 'react';

interface PdpaProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: () => void;
}

export default function Pdpa(props: PdpaProps) {
  const { isOpen, onOpenChange, onSuccess } = props;
  const [isChecked, setIsChecked] = useState(false);
  const containerClassName = cn(
    'fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-25',
    {
      'opacity-0 pointer-events-none': !isOpen,
    }
  );

  const handleOnClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  const handleOnSuccess = useCallback(() => {
    onSuccess();
    handleOnClose();
  }, [onSuccess, handleOnClose]);

  return (
    <div className={containerClassName}>
      <div className="relative flex flex-col w-[90%] h-[90%] overflow-y-scroll bg-white p-6 rounded-[20px]">
        <div className="absolute right-4 top-4">
          <button onClick={handleOnClose}>
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center pb-8 px-2">
          <h1 className="font-semibold text-5xl">PDPA</h1>
          <div className="my-8 border border-black h-[1px] w-[95%]"></div>
          <h2 className="text-center text-xl font-semibold whitespace-pre-wrap max-w-sm">
            หนังสือให้ความยินยอมในการเก็บรวบรวมใช้
            และเปิดเผยข้อมูลส่วนบุคคลสำหรับผู้เข้าร่วมกิจกรรม
            โครงการวันแรกพบนิสิตใหม่ ปีการศึกษา 2567
          </h2>
          <article className="my-5 p-2 max-w-sm text-base">
            <div className="font-athiti whitespace-pre-wrap">
              {pdpaMarkdown}
            </div>
          </article>
          <div className="flex justify-center items-center gap-4">
            <div
              className={`relative min-w-8 h-8 rounded-full
                          ${isChecked ? 'bg-project-fuchsia' : 'bg-white border border-black'} `}
            >
              <input
                id="accept"
                type="checkbox"
                className="absolute h-8 w-8 opacity-0"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              {isChecked && (
                <svg
                  className="pointer-events-none absolute inset-0 m-auto h-5 w-5 fill-current text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.7,5.3c-0.4-0.4-1-0.4-1.4,0L7.4,13.2L4.7,10.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.3,3.3c0.2,0.2,0.4,0.3,0.7,0.3
                      s0.5-0.1,0.7-0.3l8.7-8.7C17.1,6.3,17.1,5.7,16.7,5.3z"
                  />
                </svg>
              )}
            </div>
            <label
              htmlFor="accept"
              className="font-medium text-base"
            >
              ฉันยอมรับเงื่อนไขและยินยอมให้เปิดเผยข้อมูลส่วนบุคคล
            </label>
          </div>
          <button
            className={`mt-4 px-[10%] py-2 h-12 font-medium text-white text-xl rounded-lg bg-project-fuchsia
                  ${isChecked ? 'opacity-100' : 'opacity-50'}`}
            disabled={!isChecked}
            onClick={handleOnSuccess}
          >
            รับทราบและยินยอม
          </button>
        </div>
      </div>
    </div>
  );
}
