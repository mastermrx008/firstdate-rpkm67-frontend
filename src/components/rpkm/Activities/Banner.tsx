import Image, { StaticImageData } from 'next/image';

interface BannerProps {
  image: StaticImageData;
}

const Banner: React.FC<BannerProps> = ({ image }) => {
  return (
    <div className="flex justify-center mt-3">
      <Image
        src={image}
        alt="banner"
        className="w-2/3"
      />
    </div>
  );
};

export default Banner;
