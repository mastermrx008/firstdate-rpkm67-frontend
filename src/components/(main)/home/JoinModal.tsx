import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Success from '@public/success-white.svg'
import BaseModal from '@/components/rpkm/Modal/BaseModal';
import ModalButton from '@/components/rpkm/Modal/ModalButton';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';

interface JoinModalProps {
    modal: boolean;
    setModal: (value: boolean) => void;
    announce: boolean;
    isJoined: boolean;
    setIsJoined: (value: boolean) => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ modal, setModal, announce, isJoined, setIsJoined}) => {
    if (!isJoined){
        const { button } = modalStyles['red'];    
        return (
            <BaseModal
                variant='red'
                open={modal}
            >
                <div className="flex items-center justify-center max-w-80 flex-col space-y-2 px-4 py-3">
                    <h1 className="text-3xl font-semibold text-white">
                        ยืนยันการเข้าร่วมงาน
                    </h1>
                    <p className="text-white text-sm text-center">
                        ยืนยันการเข้าร่วมงาน
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
                        setModal(false)
                        setIsJoined(true)
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
    const { button } = modalStyles['green']; 
    return (
        <BaseModal
            variant='green'
            open={true}
        >
            <div className="flex items-center justify-center max-w-80 flex-col space-y-2 px-12 py-3">
                <Image
                    src={Success}
                    alt="success"
                    className="size-[30%]"
                />
                <h1 className="text-3xl font-semibold text-white">
                    ยืนยันสำเร็จ!
                </h1>
                <p className="text-white text-sm text-center">
                    แล้วพบกันวันที่ 3 สิงหาคม 2567
                </p>
                </div>
            <div className="flex flex-row gap-x-5 pb-3 justify-center">
                <ModalButton
                callBackFunction={() => setIsJoined(false)}
                borderClassName={button['cancel-border']}
                backgroundClassName={button['cancel-background']}
                >
                กลับ
                </ModalButton>
            </div>
        </BaseModal>
    );
    
};

export default JoinModal;