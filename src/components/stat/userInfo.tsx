import { Icon } from "@iconify/react"

export default function UserInfo(){
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
                <div className="w-[148px] h-[190px] bg-white rounded-t-full"></div>
                <span className="font-semibold text-2xl">Jane Doe #1</span>
                <span className="font-semibold text-2xl">Intania</span>
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