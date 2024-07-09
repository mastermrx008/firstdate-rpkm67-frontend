import Aspect from "@public/stat/aspect.svg";
import Creative from "@public/stat/creative.svg";
import Doing from "@public/stat/doing.svg";
import Commu from "@public/stat/commu.svg";
import Image from "next/image";

export default function StatBars(){
    return (
        <div className="flex justify-evenly gap-5">
            <div className="flex items-center flex-col w-[38px] h-[273px] z-10">
                <div className="flex justify-center relative w-full h-[229px] bg-white rounded-t-full">
                    <div className="rounded-full w-[30px] h-[30px] absolute top-2">
                        <Image 
                        src={Aspect}
                        alt="aspect"
                        className="w-[30px]"  
                        />
                    </div>    
                </div>
                <span className="text-center text-[10px]">เปิดมุมมองความคิด</span>
            </div>
            <div className="flex items-center flex-col w-[38px] h-[273px]">
                <div className="flex justify-center relative w-full h-[229px] bg-white rounded-t-full">
                    <div className="rounded-full w-[30px] h-[30px] absolute top-2">
                        <Image 
                        src={Creative}
                        alt="aspect"
                        className="w-[30px]"  
                        />
                    </div>    
                </div>
                <p className="text-center text-[10px]">ลงมือทำจริง</p>
            </div>
            <div className="flex items-center flex-col w-[38px] h-[273px]">
                <div className="flex justify-center relative w-full h-[229px] bg-white rounded-t-full">
                    <div className="rounded-full w-[30px] h-[30px] absolute top-2">
                        <Image 
                        src={Doing}
                        alt="aspect"
                        className="w-[30px]"  
                        />
                    </div>    
                </div>
                <p className="text-center text-[10px]">เพิ่มทักษะการสื่อสาร</p>
            </div>
            <div className="flex items-center flex-col w-[38px] h-[273px]">
                <div className="flex justify-center relative w-full h-[229px] bg-white rounded-t-full">
                    <div className="rounded-full w-[30px] h-[30px] absolute top-2">
                        <Image 
                        src={Commu}
                        alt="aspect"
                        className="w-[30px]"  
                        />
                    </div>    
                </div>
                <p className="text-center text-[10px]">เปิดความคิดสร้างสรรค์</p>
            </div>
      </div>
    )
}
