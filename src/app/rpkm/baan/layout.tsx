import background from '@public/rpkm/baan/background/bg.svg';
import Navbar from '@/components/rpkm/Navbar';
import BaanProvider from '@/context/BaanContext';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: '100%',
      }}
      className="bg-rpkm-green pt-[16vw]"
    >
      <div className="fixed top-0 w-full z-[999]">
        <Navbar />
      </div>
      <BaanProvider>{children}</BaanProvider>
    </div>
  );
};

export default layout;
