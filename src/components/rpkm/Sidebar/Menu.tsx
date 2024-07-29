import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useAuth } from '@/context/AuthContext';
import FreshyNightLink from './FreshyNightLink';

function Menu() {
  const { logout } = useAuth();

  return (
    <div className="w-full h-full text-left  font-medium flex flex-col pb-[5vh]">
      <Link
        href=""
        className="text-left cursor-not-allowed text-gray-400"
      >
        ลงทะเบียนเลือกบ้าน
      </Link>
      <FreshyNightLink>
        <div className="text-left cursor-pointer">ลงทะเบียน Freshy Night</div>
      </FreshyNightLink>
      <div className="w-full h-px bg-black"></div>
      <div className="w-full -px-2">
        <Accordion
          selectionMode="multiple"
          className="text-start self-start px-0"
          isCompact={true}
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={<div className="">กิจกรรม</div>}
          >
            <div className="flex flex-col w-full justify-items-start text-sm px-2 -mt-2">
              <Link
                href={'/rpkm/activities/home'}
                className="py-0"
              >
                หน้าหลัก
              </Link>
              <div
                // href="/rpkm/activities/"
                className="text-left text-gray-400 cursor-not-allowed"
              >
                กิจกรรมในงาน
              </div>
              <div
                // href="/rpkm/activities/"
                className="text-left text-gray-400 cursor-not-allowed"
              >
                กิจกรรม Walk Rally
              </div>
              <Link
                href="/rpkm/activities/details/community"
                className="text-left"
              >
                กิจกรรมชุมชน
              </Link>
              <Link
                href="/rpkm/baan/baan-select"
                className="text-left"
              >
                ข้อมูลแต่ละบ้าน
              </Link>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={<div>แผนที่</div>}
          >
            <div className="flex flex-col w-full justify-items-start text-sm px-2 -mt-2 ">
              <div
                //href="/rpkm/activities/map"
                className="text-left text-gray-400 cursor-not-allowed"
              >
                ข้อมูลที่จัดแต่ละกิจกรรม
              </div>
              <Link
                href="/rpkm/activities/map"
                className="text-left"
              >
                กิจกรรมชุมชน
              </Link>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-auto">
        <div className="w-full h-px bg-black"></div>
        <Link
          href="/home"
          className="block"
        >
          หน้าหลัก
        </Link>
        {/* <Link
          href=""
          className="opacity-30 block"
        >
          ช่องทางการติดต่อ
        </Link> */}
        <div className="flex gap-2 mt-2">
          <button onClick={logout}>
            <Icon
              icon="material-symbols:logout"
              className="size-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
