import { Icon } from '@iconify/react/dist/iconify.js';

export default function TwoCircleMenu() {
  return (
    <div>
      <div className="absolute top-6 right-4 flex flex-col items-center">
        <Icon
          icon="icon-park-solid:people"
          className="w-11 h-11 p-3 rounded-full bg-white text-black"
        />
        <span className="font-athiti font-medium">โปรไฟล์</span>
      </div>
      <div className="absolute top-6 left-4 flex flex-col items-center">
        <Icon
          icon="icon-park-solid:home"
          className="w-11 h-11 p-3 rounded-full bg-white text-black"
        />
        <span className="font-athiti font-medium">หน้าหลัก</span>
      </div>
    </div>
  );
}
