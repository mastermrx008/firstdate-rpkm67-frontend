'use client';
import { useAuth } from "@/context/AuthContext";
import { useGetGroupById } from "@/hooks/group/useGetGroupById";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useMemo, useState } from "react";
import HandShake_color from "@public/group-finder/handshake_color.svg"
import HandShake_gray from "@public/group-finder/handshake_gray.svg"
import Image from "next/image";
import MemberIcon from "./MemberIcon";
import MemberName from "./MemberName";
import "./style.css"
import toast from "react-hot-toast";
import LeaveGroupButton from "./LeaveGroupButton";
import CodeTextarea from "./CodeTextarea";

const GroupFinder = () => {
    const { user, resetContext } = useAuth();
    if (!user) return;

    const [groupSize, setGroupSize] = useState(0);
    const { data: groupData } = useGetGroupById(user.id);

    // Case not have a pair => need to click button before pairing
    const handleClickPairing = () => {
        setGroupSize(1)
    }

    // Case already have a pair => open pairing
    useEffect(() => {
        if (groupData) {
            console.log(groupData)
            console.log(user)
            if (groupData.group.members.length === 2) {
                setGroupSize(groupData.group.members.length)
            } else {
                setGroupSize(0)
            }
        }
    }, [groupData]);

    const handleCopyCode = () => {
        if (!groupData) return
        const text = groupData.group.token
        navigator.clipboard.writeText(text)
        toast.success("Copied to Clipboard");
    }

    useEffect(() => {
        //resetContext() // prevent another paired user join the new group, so need to update the userData
    }, []);

    return (
        <div className="relative flex flex-col w-full">
            <div className="flex flex-col bg-project-light-gray bg-opacity-90 p-4 w-full items-center gap-2">
                <span className="font-athiti font-bold text-xl text-project-cream">จับคู่เพื่อน [{groupSize}/2]</span>
                {
                    groupSize > 0 ?
                        <div className="flex flex-col w-full gap-2 items-center ">
                            <CodeTextarea userId={user.id} userOwnToken={groupData? groupData.group.token : ""} isPaired={groupSize === 2} isLeader={groupData?.group.leader_id === user.id} memberId={groupData && groupData.group.members.length === 2 ? groupData.group.members[1].id : ""}/>

                            <div className="flex flex-col w-full">
                                <div className="flex flex-row w-full px-[4%] relative z-10 justify-between">

                                    {
                                        [...Array(2).keys()].map(ind => {
                                            return (
                                                <div className={`flex w-1/3 rounded-full ${ind === 0 ? "ml-[4%]" : "mr-[4%]"}`} key={ind}>
                                                    <MemberIcon img_url={groupData && groupData.group.members[ind] ? groupData.group.members[ind].image_url : ""} isLeader={ind === 0} />
                                                </div>
                                            )
                                        })
                                    }

                                    <Image
                                        src={groupSize === 2 ? HandShake_color : HandShake_gray}
                                        alt="handshake"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[30%] object-cover"
                                    />
                                </div>

                                <div className="flex flex-row w-full px-[4%] relative justify-between">
                                    
                                    {
                                        [...Array(2).keys()].map(ind => {
                                            return (
                                                <div className={`flex w-1/3 rounded-full ${ind === 0 ? "ml-[4%]" : "mr-[4%]"}`} key={ind}>
                                                    <MemberName
                                                        name={groupData?.group.members[ind] ? groupData.group.members[ind].first_name : ""}
                                                        surname={groupData?.group.members[ind] ? groupData.group.members[ind].last_name : ""}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                        </div> :
                        <div className="flex flex-col w-full gap-4 text-center">
                            <span className="font-athiti font-semibold text-3xl text-white">คุณยังไม่ได้จับคู่</span>
                            <span className="font-athiti font-medium text-project-cream">*สามารถเลือกบ้านคนเดียวได้</span>
                            <div className="inv-rad inv-rad-2 bg-project-cream w-full p-1">
                                <div className="inv-rad inv-rad-2 bg-project-red text-center font-medium font-athiti text-project-cream py-1" onClick={handleClickPairing}>
                                    สร้างห้องใหม่
                                </div>
                            </div>
                        </div>
                }

            </div>
            {
                groupSize === 2 ?
                    <span className="w-full text-center text-white bg-project-red font-athiti font-semibold text-xl py-1">
                        จับคู่สำเร็จ
                    </span>
                    :
                    <div className={`flex flex-col w-full ${groupSize === 2 ? "bg-project-red" : groupSize === 1 ? "bg-project-pastel-pink" : "hidden"} gap-3 px-4 pb-3`}>
                        {/* Invite */}
                        <div className="flex flex-col w-full">
                            <span className="font-athiti font-bold text-white text-center">Invite Link</span>
                            <button className="relative flex flex-row items-center w-full bg-project-cream rounded-xl pl-8 pr-2 py-1 gap-1" >
                                <div className="flex justify-center hide-scrollbar overflow-y-hidden w-full">
                                    <span className="text-center w-full font-athiti font-semibold text-project-dark-blue">{groupData ? "rpkm.sgcu.in.th/" + groupData.group.token : ""}</span>
                                </div>

                                {groupData &&
                                    <Icon
                                        icon="ph:link-bold"
                                        className="flex flex-shrink-0 w-5 h-5 text-project-red"
                                    />
                                }
                            </button>
                        </div>
                        {/* Code */}
                        <div className="flex flex-col w-full">
                            <span className="font-athiti font-bold text-white text-center">Room Code</span>
                            <button className="relative flex flex-row items-center w-full bg-project-cream rounded-xl pl-8 pr-2 py-1 gap-1"
                                onClick={handleCopyCode}
                            >
                                <div className="flex justify-center hide-scrollbar overflow-y-hidden w-full">
                                    <span className="text-center w-full font-athiti font-semibold text-project-dark-blue">{groupData ? groupData.group.token : ""}</span>
                                </div>

                                {groupData &&
                                    <Icon
                                        icon="nimbus:copy"
                                        className="flex flex-shrink-0 w-5 h-5 text-project-red"
                                    />
                                }
                            </button>
                        </div>
                    </div>
            }

            <LeaveGroupButton groupSize={groupSize} userId={user ? user.id : ""} isLeader={groupData?.group.leader_id === user.id}/>
        </div>

    );
}

export default GroupFinder;