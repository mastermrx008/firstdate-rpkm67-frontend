import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CrossIcon from '@public/cross-white.svg';
import LineWhite from '@public/line-white.png';
import Baan from '@public/baan.svg';
import InstagramIcon from '@public/rpkm/instagram-icon.svg';
import { baanInfos } from '@/components/rpkm/Baan/baanInfos';
import BaseModal from '@/components/rpkm/Modal/BaseModal';
import { cn } from '@/lib/utils';
import { useBaan } from '@/context/BaanContext';
import { useAuth } from '@/context/AuthContext';

interface BaanResultModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  checkBaanResult: () => void;
}

const BaanResultModal: React.FC<BaanResultModalProps> = ({
  modal,
  setModal,
  checkBaanResult,
}) => {
  const router = useRouter();
  const [mode, setMode] = useState<'th' | 'en'>('th');
  const { isConfirmed } = useBaan();
  const { user } = useAuth();

  const HandleOnClick = () => {
    checkBaanResult();
    router.push('/rpkm/activities/home');
  };

  const findBaan = (result: string) => {
    return baanInfos.find(baan => baan.name.en === result);
  }

  if (!user) return;
  const baan = findBaan(user.baan)

  return (
    <div>
    {isConfirmed && !!baan ? (
        <BaseModal
        variant="blue"
        open={modal}
        >
            <div className="relative w-[75vw]">
                <div className="absolute top-4 right-5">
                    <button
                    className="z-10"
                    onClick={() => {
                        setModal(false);
                        HandleOnClick();
                    }}
                    >
                    <Image
                        src={CrossIcon}
                        alt="cross"
                        width={10}
                        height={10}
                        style={{ width: '1.76vh', height: '1.76vh' }}
                    />
                    </button>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                    <div className="flex items-center my-2">
                        <button
                            onClick={() => setMode('th')}
                            className={cn(
                            'px-[0.6rem] rounded-l-full text-sm',
                            mode == 'th' ? 'bg-rpkm-pink text-white' : 'bg-white text-black'
                            )}
                        >
                            TH
                        </button>
                        <button
                            onClick={() => setMode('en')}
                            className={cn(
                            'px-[0.6rem] rounded-r-full text-sm',
                            mode == 'th' ? 'bg-white text-black' : 'bg-rpkm-pink text-white'
                            )}
                        >
                            EN
                        </button>
                    </div>
                <h1 className="text-3xl font-bold text-white mt-2">
                    {mode === 'th' ? 'ยินดีด้วย!' : 'Congratulations!'}
                </h1>
                <p className="text-white text-base text-center">
                    {mode === 'th' ? 'คุณได้รับเลือกเข้าสู่...!' : 'You have been selected for...'}
                </p>
                <div className="flex justify-center w-full my-2">
                    <Image
                        src={baan.logo}
                        alt="baan"
                        className="w-44 p-1 border-[#F5F5F5] bg-[#F5F5F5] border-1"
                    />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                    {`'${mode === 'th' ? 'บ้าน' : 'Baan '}${baan.name[mode]}'`}
                </h2>
                <div className="my-3">
                    <Image
                        src={LineWhite}
                        alt="lineWhite"
                    />
                </div>
                <p className={cn("text-center text-xl font-semibold text-white mt-1",{
                    "text-lg" : mode === 'en'
                })}>
                    {mode === 'th' ? 'ติดตามข่าวสารต่อได้ที่' : 'For more information, please visit'}
                </p>
                    <div className="flex flex-row justify-center w-full gap-x-1 mt-2 mb-3">
                    <Image
                        src={InstagramIcon}
                        alt="instagram icon"
                    />
                    <Link
                        href={`https://www.instagram.com/${baan.ig}/`}
                        className="text-white text-base text-center"
                    >
                        {baan.ig}
                    </Link>
                    </div>
                </div>
            </div>
        </BaseModal>
    ) : (
        <BaseModal
        variant="blue"
        open={modal}
      >
        <div className="relative w-[75vw]">
            <div className="absolute top-4 right-5">
                <button
                className="z-10"
                onClick={() => {
                    setModal(false);
                    HandleOnClick();
                }}
                >
                <Image
                    src={CrossIcon}
                    alt="cross"
                    width={10}
                    height={10}
                    style={{ width: '1.76vh', height: '1.76vh' }}
                />
                </button>
            </div>
            <div className="flex items-center justify-center w-full flex-col">
                <div className="flex items-center my-2">
                    <button
                        onClick={() => setMode('th')}
                        className={cn(
                        'px-[0.6rem] rounded-l-full text-sm',
                        mode == 'th' ? 'bg-rpkm-pink text-white' : 'bg-white text-black'
                        )}
                    >
                        TH
                    </button>
                    <button
                        onClick={() => setMode('en')}
                        className={cn(
                        'px-[0.6rem] rounded-r-full text-sm',
                        mode == 'th' ? 'bg-white text-black' : 'bg-rpkm-pink text-white'
                        )}
                    >
                        EN
                    </button>
                </div>
            <h1 className="text-3xl font-bold text-white mt-2">
                {mode === 'th' ? 'น่าเสียดาย!' : 'Unfortunately!'}
            </h1>
            <p className="text-white text-base text-center">
                {mode === 'th' ? 'คุณไม่ได้ทำการเลือกบ้าน' : 'You did not select any Baans'}
            </p>
            <div className="flex justify-center w-full mt-6 mb-3">
                <Image
                    src={Baan}
                    alt="baan"
                    className="p-1 border-[#F5F5F5] bg-[#F5F5F5] border-1"
                />
            </div>
            <div className="my-3">
                <Image
                    src={LineWhite}
                    alt="lineWhite"
                />
            </div>
            <p className={cn("text-center text-xl font-semibold text-white mt-1",{
                    "text-md" : mode === 'en'
                })}>
                {mode === 'th' ? 'ติดต่อสอบถามเพิ่มเติมได้ที่' : 'For further inquiries, please contact'}
            </p>
                <div className="flex flex-row justify-center w-full gap-x-1 mt-2 mb-3">
                <Image
                    src={InstagramIcon}
                    alt="instagram icon"
                />
                <Link
                    href={`https://www.instagram.com/rubpuenkaomai2024/`}
                    className="text-white text-base text-center"
                >
                    rubpuenkaomai2024
                </Link>
                </div>
            </div>
        </div>
      </BaseModal>
    )}
    </div>
    );
  }

export default BaanResultModal;
