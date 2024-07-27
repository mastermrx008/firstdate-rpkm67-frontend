import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Success from '@public/success-white.svg';
import BaseModal from '@/components/rpkm/Modal/BaseModal';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import { cn } from '@/lib/utils';

interface JoinModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  isJoined: boolean;
  announce: boolean;
  baanResultModal: boolean;
  baanResult: boolean;
  setBaanResultModal: (value: boolean) => void;
  checkInConfirm: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({
  modal,
  setModal,
  isJoined,
  announce,
  baanResultModal,
  baanResult,
  setBaanResultModal,
  checkInConfirm,
}) => {
  const router = useRouter();

  const HandleOnClick = () => {
    if (announce) {
      setBaanResultModal(true);
    } else {
      router.push('/rpkm/activities/home');
    }
  };

  if (!isJoined) {
    const { button } = modalStyles['red'];
    return (
      <BaseModal
        variant="red"
        open={modal}
      >
        <div className="flex items-center justify-center max-w-80 flex-col space-y-2 px-4 py-3">
          <h1 className="text-3xl font-semibold text-white">
            ยืนยันการเข้าร่วมงาน
          </h1>
          <p className="text-white text-sm text-center">
            ออนไซต์วันที่ 3-4 สิงหาคม 2567
          </p>
        </div>
        <div className="flex flex-row gap-x-5 pb-3 justify-center">
          <ModalButton
            callBackFunction={() => setModal(false)}
            borderClassName={button['cancel-border']}
            backgroundClassName={button['cancel-background']}
          >
            ยกเลิก
          </ModalButton>
          <ModalButton
            callBackFunction={() => {
              setModal(false);
              checkInConfirm();
            }}
            borderClassName={button['accept-border']}
            backgroundClassName={button['accept-background']}
          >
            ยืนยัน
          </ModalButton>
        </div>
      </BaseModal>
    );
  }
  if (!baanResult) {
    const { button } = modalStyles['green'];
    return (
      <BaseModal
        variant="green"
        open={!baanResultModal}
      >
        <div className="flex items-center justify-center max-w-80 flex-col space-y-2 px-12 py-3">
          <Image
            src={Success}
            alt="success"
            className="size-[30%]"
          />
          <h1 className="text-3xl font-semibold text-white">ยืนยันสำเร็จ!</h1>
          <p className="text-white text-sm text-center">
            แล้วพบกันวันที่ 3 สิงหาคม 2567
          </p>
        </div>
        <div className="flex flex-row gap-x-5 pb-3 justify-center">
          {announce ? (
            <button
              onClick={HandleOnClick}
              className={cn(
                'p-1 inv-rad inv-rad-2 w-full',
                button['cancel-border']
              )}
            >
              <div
                className={cn(
                  'py-[0.3rem] px-2 inv-rad inv-rad-2',
                  button['cancel-background']
                )}
              >
                ดูผลบ้านที่เลือก
              </div>
            </button>
          ) : (
            <ModalButton
              callBackFunction={HandleOnClick}
              borderClassName={button['cancel-border']}
              backgroundClassName={button['cancel-background']}
            >
              ต่อไป
            </ModalButton>
          )}
        </div>
      </BaseModal>
    );
  }
};

export default JoinModal;
