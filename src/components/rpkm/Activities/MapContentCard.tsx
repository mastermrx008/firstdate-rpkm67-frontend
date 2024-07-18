import Image from 'next/image';
import Link from 'next/link';

import Globe from '@public/rpkm/activities/globe.svg';

interface MapContentCardProps {
  name: string;
  description: string;
  href: string;
}

const MapContentCard: React.FC<MapContentCardProps> = ({
  name,
  description,
  href,
}) => {
  return (
    <div className="flex justify-between flex-row py-1">
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-md text-[#A2A2A2]">{description}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={Globe}
          alt="globe"
        />
        <Link
          href={href}
          className="text-[#183F86] underline"
        >
          Show maps
        </Link>
      </div>
    </div>
  );
};

export default MapContentCard;
