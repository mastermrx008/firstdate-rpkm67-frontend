import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { usePostLeaveGroup } from '@/hooks/group/usePostLeaveGroup';
import Modal from '@/components/rpkm/Modal/Modal';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

interface LeaveGroupButtonProps {
  groupSize: number;
  userId: string;
  isLeader: boolean;
}
const LeaveGroupButton: React.FC<LeaveGroupButtonProps> = ({
  groupSize,
  userId,
  isLeader,
}) => {
  const { resetContext } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const postLeaveGroup = usePostLeaveGroup();
  const handleConfirmLeave = async () => {
    try {
      setOpenModal(false);
      postLeaveGroup.mutateAsync(userId);
      resetContext();
      toast.success('ออกกลุ่มสำเร็จ');
    } catch (error) {
      console.log('leave group error:', error);
      toast.error('ออกกลุ่มไม่สำเร็จ');
    }
  };
  return (
    groupSize === 2 &&
    !isLeader && (
      <>
        <button
          className="absolute flex py-3 pr-2 pl-3 top-2 right-2 w-11 h-11 bg-project-red rounded-full"
          onClick={() => setOpenModal(true)}
        >
          <Icon
            icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"
            className="w-full h-full text-white"
          />
        </button>
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          callBackFunction={handleConfirmLeave}
          variant="blue"
        >
          <span className="flex w-full justify-center text-center text-white font-athiti font-medium text-2xl whitespace-pre-line mx-auto">{`คุณต้องการออกจาก\nการจับคู่เพื่อน`}</span>
        </Modal>
      </>
    )
  );
};

export default LeaveGroupButton;
