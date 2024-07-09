import { Icon } from "@iconify/react";
import { useAuth } from "@/context/AuthContext";
import placeholder from "@public/placeholder.svg";
import Image from "next/image";

export default function UserInfo(){
    const { user } = useAuth();

    return (
        <div className="flex justify-center gap-2 items-end">
            <div className="flex items-center flex-col">
                <Icon
                icon="ri:edit-fill"
                className="w-11 h-11 p-3 rounded-full bg-white text-black"
                />
                <span className="text-center font-medium text-base">แก้ไขข้อมูล</span>
            </div>
            <div className="flex flex-col justify-center text-center">
                <div className="flex justify-center items-center w-36 h-48 bg-white rounded-t-full drop-shadow">
                    <Image
                        src={user?.photoUrl || placeholder}
                        alt="profile"
                        className="w-full p-1"
                    />
                </div>
                <div className="flex justify-center items-center font-semibold text-2xl gap-2">
                    <span>{user?.firstname}</span>
                    <span>{user?.year}</span>
                </div>
                <span className="font-semibold text-2xl">{user?.faculty}</span>
            </div>
            <div className="flex items-center flex-col">
                <Icon
                icon="material-symbols:map"
                className="w-11 h-11 p-3 rounded-full bg-white text-black"
                />
                <span className="text-center font-medium text-base">แผนที่</span>
            </div> 
        </div>
    )
}