import React, { useEffect, useState } from 'react';
import Modal from '@/components/rpkm/Modal/Modal';
import BaseModal from '@/components/rpkm/Modal/BaseModal';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';

interface JoinModalProps {
    modal: boolean;
    setModal: (value: boolean) => void;
    announce: boolean;
    setIsJoined: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ modal, setModal, announce, setIsJoined}) => {
    if (!modal) return null;
    return (
            <Modal
                variant="red"
                open={modal}
                setOpen={setModal}
                callBackFunction={setIsJoined}
            >
                <div className="flex items-center justify-center max-w-80 flex-col space-y-2 p-4">
                <h1 className="text-3xl font-semibold text-white">
                    ยืนยันการเข้าร่วมงาน
                </h1>
                <p className="text-white text-sm text-center">
                    ยืนยันการเข้าร่วมงาน
                </p>
                </div>
            </Modal>
  );
};

export default JoinModal;