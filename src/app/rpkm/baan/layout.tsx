import background from '@public/rpkm/baan/background/bg.svg';
import Navbar from '@/components/rpkm/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: '100%',
      }}
      className="bg-rpkm-green pt-16"
    >
      <div className="fixed top-0 w-full z-[999]">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default layout;
