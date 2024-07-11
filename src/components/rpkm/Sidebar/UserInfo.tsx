import React from 'react'
import Image from 'next/image'

import pencilIcon from '@public/bar/icon/pencil.svg'
import placeholder from '@public/placeholder.svg'
import qrCodeIcon from '@public/home/icon/qrcode.svg'
import { useAuth } from '@/context/AuthContext'
function UserInfo() {
    const { user } = useAuth();
  return (
    <div className="flex flex-col items-center text-center w-full h-[34.03vh] self-center relative gap-y-[0.47vh]">
                
                <div
                  className="w-[15.25vh] h-[19.59vh] rounded-t-full shadow-[0px_0px_4px_.4px_#00000036] overflow-hidden"
                >
                  <Image
                    src={user?.photoUrl ? user?.photoUrl : placeholder.src}
                    alt="profile picture"
                    width={10}
                    height={10}
                    style={{ width: '100%', height: '22.066vh', top: '-2.934vh'}}
                  />
                </div>
                <h1 className="text-[2.11vh] font-semibold text-center text-black">
                  {user?.firstname} {user?.lastname}
                </h1>
                <button className='flex flex-col'>
                  <h1 className="text-[1.41vh] font-semibold text-center text-black">
                    {user?.baan}
                  </h1>
                  <div className='flex justify-center justify-items-center items-center gap-x-[0.23vh]'>
                  <h1 className="text-[1.41vh] font-semibold text-center text-black underline">
                    แก้ไขข้อมูลส่วนตัว
                  </h1>
                  <Image 
                    src={pencilIcon}
                    alt="pencil"
                    width={10}
                    height={10}
                    style={{ width: '0.94vh', height: '0.94vh' }}
                  />
                  </div>
                </button>
          <button
            className="w-[4.8vh] h-[4.8vh] rounded-full flex justify-center items-center shadow-[0px_3px_4px_.5px_#00000048] hover:scale-105 bg-[#F1DFC1]"
            onClick={()=>console.log("qrcode")}
          >
            <Image
              src={qrCodeIcon}
              alt="QR-Code Icon"
              style={{ width: '2.63vh', height: '2.63vh' }}
            />
          </button>
            </div>
  )
}

export default UserInfo