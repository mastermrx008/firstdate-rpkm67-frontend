import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Link from 'next/link';
function Menu() {
  return (
    <div className="w-full h-full text-left text-lg font-medium flex flex-col pb-[5vh]">
      <Link
        href="/rpkm/baan/home"
        className="text-left"
      >
        ลงทะเบียนเลือกบ้าน
      </Link>
      <Link
        href=""
        className="text-left"
      >
        ลงทะเบียน Freshy Night
      </Link>
      <div className="w-full h-px bg-black"></div>
      <div className="w-full -px-2">
        <Accordion
          selectionMode="multiple"
          className="text-start self-start px-0"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={<Link href="/rpkm/activities">กิจกรรม</Link>}
          >
            <div className="flex flex-col w-full justify-items-start text-sm px-xs">
              <Link
                href="/rpkm/activities/"
                className="text-left"
              >
                กิจกรรมในงาน
              </Link>
              <Link
                href="/rpkm/baan/home"
                className="text-left"
              >
                ข้อมูลแต่ละบ้าน
              </Link>
              <Link
                href="/rpkm/activities/"
                className="text-left"
              >
                กิจกรรมชุมชน
              </Link>
              <Link
                href="/rpkm/activities/"
                className="text-left"
              >
                กิจกรรม Walk Rally
              </Link>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={<Link href="/rpkm/activities/map">แผนที่</Link>}
          >
            <div className="flex flex-col w-full justify-items-start text-sm px-xs">
              <Link
                href="/"
                className="text-left"
              >
                ข้อมูลที่จัดแต่ละกิจกรรม
              </Link>
              <Link
                href="/rpkm/activities/"
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
        <Link href="/">ลงทะเบียน Freshy Night</Link>
      </div>
    </div>
  );
}

export default Menu;
