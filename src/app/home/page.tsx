'use client'

import Image from 'next/image';
import Link from 'next/link'
import Border from '@/components/Border';
import something from '@public/home/something.svg'
import eBookIcon from '@public/home/icon/ebook.svg';
import contactIcon from '@public/home/icon/contactlist.svg'
import qrcodeIcon from '@public/home/icon/qrcode.svg'
import editIcon from '@public/home/icon/edit.svg'
import smurfCat from '@public/home/smurfcat.png'
import checkIcon from '@public/home/icon/check.svg'
import alertIcon from '@public/home/icon/alert.svg'
import CustomButton from '@/components/home/CustomButton';
import { useEffect, useState } from 'react';
import QrCodePopup from '@/components/home/QrCodePopup';



export default function Home() {
    const [popup, setPopup] = useState<boolean>(false);
    const somethings=()=>{
        console.log("work");
    }
    const checkElement = 
        <Image 
            src={checkIcon} 
            alt="Contact List Icon" 
            style={{ width: '2.63vh', height: '2.63vh' }} 
        />;
    const alertElement = 
        <Image 
            src={alertIcon} 
            alt="Contact List Icon" 
            style={{ width: '2.63vh', height: '2.63vh' }} 
        />;

    const fdIcon = checkElement;
    const rpIcon = alertElement;
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <Border variant='transparent' className="pl-[0%] pr-[0%] pt-[0%]">
        <div className="flex flex-col w-[90%] h-[90vh] opacity-100 justify-center">
            
            
            <h1 className="text-center text-black font-season italic text-[4.4vh]">
            Welcome,
            </h1>
            <div className="flex justify-center items-center">
                <h1 className="text-center bg-gradient-to-t bg-clip-text text-transparent from-project-fuchsia from-30% via-80% to-95% to-project-cream italic pr-1 font-season text-[2.85vh]">
                CU
                </h1>
                <h1 className="text-center bg-gradient-to-t bg-clip-text text-transparent from-project-fuchsia from-30% via-80% to-95% to-project-cream italic pr-1 font-season text-[3.3vh]">
                108
                </h1>
            </div>
            


            <center>
                <div className="flex flex-col items-center text-center justify-between w-[15.81vh] h-[29.2vh] self-center">
                    <div className="w-full h-[75%] bg-black rounded-t-full border-white shadow-[0px_0px_4px_.4px_#00000036]" style={{borderWidth: '0.66vh', borderStyle: 'solid'}}>
                        <Image 
                            src={smurfCat}
                            alt="something"
                            style={{ width: '100%', height: '100%' }}
                            className='rounded-t-full'
                        />
                    </div>
                    <h1 className="text-[2.63vh] font-semibold text-center text-black">
                        Jane Doe #1<br/>
                        Intania
                    </h1>
                </div>
            </center>
            
            

            <center className="my-[1.32vh]">
                <Image 
                    src={something}
                    alt="something"
                    width={97}
                    height={14}
                />
            </center>
            
            
            <div className="w-full flex items-center flex-col h-[26.34vh] justify-between font-medium text-[2.2vh]">
                <CustomButton varient='first-date'>
                        <div>CU First Date 2024</div>
                        {fdIcon}
                </CustomButton>
                <CustomButton varient='rub-peun'>
                        <div>Rub Peun Kao Mai 2024</div>
                        {rpIcon}
                </CustomButton>
                <CustomButton varient='e-book'>
                        <Image 
                            src={eBookIcon} 
                            alt="E-book Icon" 
                            style={{ width: '2.63vh', height: '2.63vh' }} 
                        />
                        <div>E-Book</div>
                </CustomButton>
                <CustomButton varient='contact-list' className='text-white'>
                        <Image 
                            src={contactIcon} 
                            alt="Contact List Icon" 
                            style={{ width: '2.63vh', height: '2.63vh' }} 
                        />
                        <div>Emergency Contact</div>
                </CustomButton>
            </div>



            <div className="flex justify-center gap-x-[1.76vh] mt-[1.32vh] text-[1.76vh]">
                <div className="flex flex-col items-center text-center gap-y-[0.44vh]">
                    <button className="w-[4.8vh] h-[4.8vh] rounded-full flex justify-center items-center shadow-[0px_3px_4px_.5px_#00000048] hover:scale-105">
                        <Image 
                                src={qrcodeIcon} 
                                alt="QR Code Icon" 
                                style={{ width: '2.63vh', height: '2.63vh' }} 
                                onClick={()=>setPopup(true)}
                        />
                    </button>
                    <div>My Qr</div>
                </div>
                <div className="flex flex-col items-center text-center gap-y-[0.44vh]">
                    <Link href="/" className="w-[4.8vh] h-[4.8vh] rounded-full flex justify-center items-center shadow-[0px_3px_4px_.5px_#00000048] hover:scale-105">
                        <Image 
                                src={editIcon} 
                                alt="Edit Icon" 
                                style={{ width: '2.63vh', height: '2.63vh' }} 
                        />
                    </Link>
                    <div>แก้ไขข้อมูล</div>
                </div>
                
            </div>

        </div>
      </Border>
    <QrCodePopup setPopup = {setPopup} popup = {popup}/>
    </main>
  );
}