import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
function Menu() {
  return (
    <div className="w-full h-full text-left text-[1.88vh] font-medium flex flex-col pb-[5vh]">
      <button className="text-left">ลงทะเบียนเลือกบ้าน</button>
      <button className="text-left">ลงทะเบียน Freshy Night</button>
      <div className="w-full h-px bg-black"></div>
      <div className="w-full -px-2">
        <Accordion
          selectionMode="multiple"
          className="text-start self-start px-0"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="กิจกรรม"
          >
            <div className="flex flex-col w-full justify-items-start text-[1.41vh] px-[1.41vh]">
              <button className="text-left">กิจกรรมในงาน</button>
              <button className="text-left">ข้อมูลแต่ละบ้าน</button>
              <button className="text-left">กิจกรรมชุมชน</button>
              <button className="text-left">กิจกรรม Walk Rally</button>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="แผนที่"
          >
            <div className="flex flex-col w-full justify-items-start text-[1.41vh] px-[1.41vh]">
              <button className="text-left">ข้อมูลที่จัดแต่ละกิจกรรม</button>
              <button className="text-left">กิจกรรมชุมชน</button>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-auto">
        <div className="w-full h-px bg-black"></div>
        <button>ลงทะเบียน Freshy Night</button>
      </div>
    </div>
  );
}

export default Menu;
