import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

type IconName = 'profile' | 'home';

interface TwoCircleMenuProps {
  activeIcon: IconName;
  setActiveIcon: (iconName: IconName) => void;
  // Added href parameter for dynamic linking
  hrefs: { [key in IconName]: string };
}

export default function TwoCircleMenu({
  activeIcon,
  setActiveIcon,
  hrefs,
}: TwoCircleMenuProps) {
  const handleIconClick = (iconName: IconName) => {
    setActiveIcon(iconName);
  };

  const getIconClasses = (iconName: IconName) => {
    const isActive = activeIcon === iconName;
    return `w-11 h-11 p-3 rounded-full ${
      isActive ? 'bg-project-fuchsia text-white' : 'bg-white text-black'
    }`;
  };

  return (
    <div>
      <Link
        href={hrefs.profile}
        className="absolute top-6 right-4 flex flex-col items-center"
        onClick={() => handleIconClick('profile')}
      >
        <Icon
          icon="icon-park-solid:people"
          className={getIconClasses('profile')}
        />
        <span className="font-athiti font-medium">โปรไฟล์</span>
      </Link>
      <Link
        href={hrefs.home}
        className="absolute top-6 left-4 flex flex-col items-center"
        onClick={() => handleIconClick('home')}
      >
        <Icon
          icon="icon-park-solid:home"
          className={getIconClasses('home')}
        />
        <span className="font-athiti font-medium">หน้าหลัก</span>
      </Link>
    </div>
  );
}
