import { Icon } from '@iconify/react/dist/iconify.js';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useGetGroupByToken } from '@/hooks/group/useGetGroupByToken';
import { usePostJoinGroup } from '@/hooks/group/usePostJoinGroup';
import toast from 'react-hot-toast';
import { useDeleteGroupMember } from '@/hooks/group/useDeleteGroupMember';
import { usePostLeaveGroup } from '@/hooks/group/usePostLeaveGroup';
import Modal from '@/components/rpkm/Modal/Modal';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface CodeTextareaProps {
  userId: string;
  userOwnToken: string;
  isPaired: boolean;
  isLeader: boolean;
  memberId: string;
  initGroupToken?: string;
}
const CodeTextarea: React.FC<CodeTextareaProps> = ({
  userId,
  userOwnToken,
  isPaired,
  isLeader,
  memberId,
  initGroupToken,
}) => {
  const [text, setText] = useState('');
  const [inputToken, setInputToken] = useState('');
  const [hasInitToken, setHasInitToken] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleTypeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const [openModal, setOpenModal] = useState(false);
  const { data: groupData } = useGetGroupByToken(inputToken, openModal);
  const handleOpenModal = useCallback(() => {
    if (text !== '') {
      if (userOwnToken && text === userOwnToken) {
        toast.error('ไม่สามารถจับคู่กับตัวเองได้');
      } else {
        setOpenModal(true);
        setInputToken(text);
      }
      setText('');
    }
  }, [text, userOwnToken]);

  const postJoinGroup = usePostJoinGroup();
  const deleteMember = useDeleteGroupMember();
  const postLeaveGroup = usePostLeaveGroup();
  const handleConfirmPairing = async () => {
    if (isLeader && isPaired) {
      await deleteMember.mutateAsync({
        deleted_user_id: memberId,
        requesting_user_id: userId,
      });
    } else if (isPaired) {
      await postLeaveGroup.mutateAsync(userId);
    }
    setOpenModal(false);
    await postJoinGroup.mutateAsync({
      token: inputToken,
      user_id: userId,
    });
  };

  useEffect(() => {
    if (initGroupToken) {
      setText(initGroupToken);
      setHasInitToken(true);
    }
  }, [initGroupToken]);

  // Open modal and remove token query param
  useEffect(() => {
    if (hasInitToken) {
      handleOpenModal();
      setHasInitToken(false);
      const nextSearchParams = new URLSearchParams(searchParams.toString());
      nextSearchParams.delete('token');

      router.replace(`${pathname}?${nextSearchParams}`);
    }
  }, [hasInitToken, handleOpenModal, pathname, router, searchParams]);

  // Check if not found group token in 700ms, then raise error
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  useEffect(() => {
    if (openModal && !groupData) {
      timeoutRef.current = setTimeout(() => {
        toast.error('ไม่สามารถหากลุ่มนี้ได้');
        setOpenModal(false);
      }, 700);
    } else {
      clearTimeoutRef();
    }
  }, [groupData, openModal, clearTimeoutRef]);

  // Handle more case after render
  useEffect(() => {
    if (isPaired && openModal) {
      toast.error('คุณได้จับคู่อยู่แล้ว');
      setOpenModal(false);
      clearTimeoutRef();
    }
  }, [isPaired, openModal, clearTimeoutRef]);
  useEffect(() => {
    if (openModal && inputToken === userOwnToken) {
      toast.error('ไม่สามารถจับคู่กับตัวเองได้');
      setOpenModal(false);
      clearTimeoutRef();
    }
  }, [inputToken, userOwnToken, openModal, clearTimeoutRef]);

  return (
    <>
      <div className="relative gap-1 bg-project-yellow rounded-3xl py-[2%] pl-[6%] pr-[3%] w-4/5 overflow-hidden flex flex-row items-center">
        <textarea
          className="w-[90%] flex hide-scrollbar bg-transparent focus:outline-none font-athiti font-semibold text-project-red whitespace-nowrap placeholder:text-project-red placeholder:text-opacity-50 resize-none"
          rows={1}
          placeholder="โปรดกรอกรหัสห้อง"
          value={text}
          onChange={handleTypeText}
        />

        <button
          className="flex flex-shrink-0 w-7 h-7 rounded-full p-2 bg-project-cream"
          onClick={handleOpenModal}
        >
          <Icon
            icon="fluent:send-16-filled"
            className="w-full h-full text-project-red"
          />
        </button>
      </div>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        callBackFunction={handleConfirmPairing}
        variant="blue"
      >
        <span className="flex w-full justify-center text-center text-white font-athiti font-medium text-2xl whitespace-pre-line mx-auto">{`ยินดีจับคู่กับ\n${groupData ? groupData.leader.first_name : 'ชื่อ'} ${groupData ? groupData.leader.last_name : 'สกุล'}`}</span>
      </Modal>
    </>
  );
};

export default CodeTextarea;
