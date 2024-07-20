import Image from 'next/image';

import DividerImage from '@public/rpkm/activities/divider.png';

const Divider = () => {
  return (
    <div className="flex justify-center p-3">
      <Image
        src={DividerImage}
        alt="banner"
        className="w-2/3"
      />
    </div>
  );
};

export default Divider;
