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
      <Border variant='transparent'>
        <div className="max-w-80 w-full h-screen">
            <h1 className="text-center text-black -mt-12 font-theseasons italic" style={{fontSize: '40px', fontFamily: 'var(--font-theseasons)'}}>
            Welcome,
            </h1>
            <div className="flex justify-center items-center">
                <h1 className="text-center bg-gradient-to-t bg-clip-text text-transparent from-project-fuchsia from-30% via-80% to-95% to-project-cream italic pr-1" style={{fontSize: '24px', fontFamily: 'var(--font-theseasons)'}}>
                CU
                </h1>
                <h1 className="text-center bg-gradient-to-t bg-clip-text text-transparent from-project-fuchsia from-30% via-80% to-95% to-project-cream italic pr-1" style={{fontSize: '26px', fontFamily: 'var(--font-theseasons)'}}>
                108
                </h1>
            </div>
            

            <center>
                <div className="flex flex-col items-center text-center gap-y-3 w-36 h-64 self-center">
                    <div className="w-full h-48 bg-black rounded-t-full border-white shadow-[0px_0px_4px_.4px_#00000036]" style={{borderWidth: '6px', borderStyle: 'solid'}}>
                        <Image 
                            src={smurfCat}
                            alt="something"
                            width={132}
                            height={144}
                            className='rounded-t-full'
                        />
                    </div>
                    <h1 className="text-2xl font-semibold text-center text-black ">
                        Jane Doe #1<br/>
                        Intania
                    </h1>
                </div>
            </center>
            
            
            <center className="my-3.5">
                <Image 
                    src={something}
                    alt="something"
                    width={97}
                    height={14}
                />
            </center>
            
            
            <div className="w-full flex items-center flex-col gap-y-4 font-medium text-xl">
                <div className="bg-[#FFBBD2] w-4/5 h-12 rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center">
                        <div>CU First Date 2024</div>
                        <div></div>
                    </div>
                </div>
                <div className="bg-[#E9A49B] w-4/5 h-12 rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center">
                        <div>Rub Peun Kao Mai 2024</div>
                        <div></div>
                    </div>
                </div>
                <div className="bg-[#F1DFC1] w-4/5 h-12 rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center">
                        <Image 
                            src={eBookIcon} 
                            alt="E-book Icon" 
                            width={24} 
                            height={24} 
                        />
                        <div>E-Book</div>
                    </div>
                </div>
                <div className="bg-[#313131] w-4/5 h-12 rounded-lg drop-shadow-md place-content-center">
                    <div className="flex space-x-1 justify-center text-white">
                        <Image 
                            src={contactIcon} 
                            alt="Contact List Icon" 
                            width={24} 
                            height={24} 
                        />
                        <div>Contact List</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-x-4 mt-6">
                <Link href="/" className="flex flex-col items-center text-center gap-y-1">
                    <div className="w-11 h-11 rounded-full flex justify-center shadow-[0px_3px_4px_.5px_#00000048]">
                        <Image 
                                src={qrcodeIcon} 
                                alt="QR Code Icon" 
                                width={24} 
                                height={24} 
                        />
                    </div>
                    <div>My Qr</div>
                </Link>
                <Link href="/" className="flex flex-col items-center text-center gap-y-1">
                    <div className="w-11 h-11 rounded-full flex justify-center shadow-[0px_3px_4px_.5px_#00000048]">
                        <Image 
                                src={editIcon} 
                                alt="Edit Icon" 
                                width={24} 
                                height={24} 
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