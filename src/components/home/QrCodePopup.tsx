import React from 'react'
import qrbackgroundoutter from '@public/home/qr-background-outter.svg'
import qrbackgroundinner from '@public/home/qr-background-inner.svg'
import qrhead from '@public/home/qr-head.svg'
import { useState } from 'react'
interface QrCodePopupProps{
    setPopup: (value:boolean)=>void
    popup: boolean
}
const QrCodePopup: React.FC<QrCodePopupProps> = ({popup, setPopup }) => {
    if(!popup)return null;
  return (
    <div className='z-10 w-full h-full fixed flex justify-center'>
        <div className='bg-black w-full h-full fixed self-center opacity-50'/>
            
        <div className='w-[calc(100vh*(72/156)*(9/10))] h-[64vh] relative self-center flex flex-col justify-center'>
            <div className='w-2/3 h-[14.4vh] absolute opacity-100 self-center justify-self-center bg-contain bg-no-repeat top-0' style={{backgroundImage: `url(${qrhead.src})`}}/>
                    

            <div className='w-4/5 h-full opacity-100 self-center flex justify-self-center justify-center bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${qrbackgroundoutter.src})`}}>
                <div className='w-11/12 h-[46vh] opacity-100 self-center justify-self-center bg-contain bg-no-repeat bg-center flex flex-col items-center justify-around pt-[5vh] pb-[2vh]' style={{backgroundImage: `url(${qrbackgroundinner.src})`}}>
                    <button className='h-[25vh] w-[25vh] bg-white border-[0.1vh] border-rose-600 rounded-[1vh] text-2.12vh'>ช่อง qr code</button>
                    <button className='h-[4.23vh] w-[13.76vh] bg-white border-[0.1vh] border-rose-600 rounded-[1vh] text-2.12vh' onClick={()=>setPopup(false)}>ย้อนกลับ</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QrCodePopup