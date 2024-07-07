import { Icon } from '@iconify/react/dist/iconify.js';

type IconName = 'profile' | 'home';

interface TwoCircleMenuProps {
  activeIcon: IconName;
  setActiveIcon: (iconName: IconName) => void;
}

export default function TwoCircleMenu({
  activeIcon,
  setActiveIcon,
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
      <div
        className="absolute top-6 right-4 flex flex-col items-center"
        onClick={() => handleIconClick('profile')}
      >
        <Icon
          icon="icon-park-solid:people"
          className={getIconClasses('profile')}
        />
        <span className="font-athiti font-medium">โปรไฟล์</span>
      </div>
      <div
        className="absolute top-6 left-4 flex flex-col items-center"
        onClick={() => handleIconClick('home')}
      >
        <Icon
          icon="icon-park-solid:home"
          className={getIconClasses('home')}
        />
        <span className="font-athiti font-medium">หน้าหลัก</span>
      </div>
    </div>
  );
}
