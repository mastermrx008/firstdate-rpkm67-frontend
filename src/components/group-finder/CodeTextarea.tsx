import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Modal from "@/components/rpkm/modal";
import { useGetGroupByToken } from "@/hooks/group/useGetGroupByToken";
import { usePostJoinGroup } from "@/hooks/group/usePostJoinGroup";

interface CodeTextareaProps {
    userId : string
}
const CodeTextarea : React.FC<CodeTextareaProps>= ({userId}) => {
    const [text, setText] = useState("");
    const handleTypeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const [openModal, setOpenModal] = useState(false);
    const {data : groupData} = useGetGroupByToken(text , openModal)
    const handleOpenModal = () => {
        if (text !== "") setOpenModal(true)
    }

    const postJoinGroup = usePostJoinGroup()
    const handleConfirmPairing = () => {
        postJoinGroup.mutateAsync({
            token : text,
            user_id: userId,
        })
        setOpenModal(false)
    }

    return (
        <>
            <div className="flex flex-row items-center gap-1 bg-project-yellow rounded-3xl py-1 pl-4 pr-2 w-3/4" >
                <textarea
                    className="flex flex-1 overflow-y-hidden bg-transparent focus:outline-none font-athiti font-semibold text-project-red placeholder:text-project-red placeholder:text-opacity-50"
                    rows={1}
                    placeholder="โปรดกรอกรหัสห้อง"
                    value={text}
                    onChange={handleTypeText}
                />

                <button className="w-8 h-8 rounded-full p-2 bg-project-cream" onClick={handleOpenModal}>
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
                <span className="flex w-full justify-center text-center text-white font-athiti font-medium text-2xl whitespace-pre-line mx-auto">{`ยินดีจับคู่กับ\n${groupData?.leader.first_name} ${groupData?.leader.last_name}`}</span>
            </Modal>
        </>

    );
}

export default CodeTextarea;