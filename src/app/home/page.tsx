import Image from 'next/image';
import Link from 'next/link'
import Border from '@/components/Border';
import something from '@public/home/something.svg'
import eBookIcon from '@public/home/icon/ebook.svg';
import contactIcon from '@public/home/icon/contactlist.svg'
import qrcodeIcon from '@public/home/icon/qrcode.svg'
import editIcon from '@public/home/icon/edit.svg'
import smurfCat from '@public/home/smurfcat.png'

export default function Home() {
    
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <Border variant='transparent' className="px-[0%] py-[0%]">
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
                <div className="bg-[#FFBBD2] w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center">
                        <div>CU First Date 2024</div>
                        <div></div>
                    </div>
                </div>
                <div className="bg-[#E9A49B] w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center">
                        <div>Rub Peun Kao Mai 2024</div>
                        <div></div>
                    </div>
                </div>
                <div className="bg-[#F1DFC1] w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center items-center">
                        <Image 
                            src={eBookIcon} 
                            alt="E-book Icon" 
                            style={{ width: '2.63vh', height: '2.63vh' }} 
                        />
                        <div>E-Book</div>
                    </div>
                </div>
                <div className="bg-[#313131] w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center items-center text-white">
                        <Image 
                            src={contactIcon} 
                            alt="Contact List Icon" 
                            style={{ width: '2.63vh', height: '2.63vh' }} 
                        />
                        <div>Emergency Contact</div>
                    </div>
                </div>
            </div>



            <div className="flex justify-center gap-x-[1.76vh] mt-[1.32vh] text-[1.76vh]">
                <Link href="/" className="flex flex-col items-center text-center gap-y-[0.44vh]">
                    <div className="w-[4.8vh] h-[4.8vh] rounded-full flex justify-center items-center shadow-[0px_3px_4px_.5px_#00000048]">
                        <Image 
                                src={qrcodeIcon} 
                                alt="QR Code Icon" 
                                style={{ width: '2.63vh', height: '2.63vh' }} 
                        />
                    </div>
                    <div>My Qr</div>
                </Link>
                <Link href="/" className="flex flex-col items-center text-center gap-y-[0.44vh]">
                    <div className="w-[4.8vh] h-[4.8vh] rounded-full flex justify-center items-center shadow-[0px_3px_4px_.5px_#00000048]">
                        <Image 
                                src={editIcon} 
                                alt="Edit Icon" 
                                style={{ width: '2.63vh', height: '2.63vh' }} 
                        />
                    </div>
                    <div>แก้ไขข้อมูล</div>
                </Link>
                
            </div>

        </div>
      </Border>
    </main>
  );
}