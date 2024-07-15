'use client'

import home from '@public/bannlist/home.svg';
import search from '@public/bannlist/search.svg';
import Image from 'next/image';
import Link from 'next/link';

//wait real data
const mockHouseSize = [
    { size: 'S', count: 10 },
    { size: 'M', count: 15 },
    { size: 'L', count: 8 },
    { size: 'XL', count: 5 },
    { size: 'XXL', count: 3}
]

export default function BaanSelect() {
    return (
        <>
        <div>{/*baanSelectComponent*/}</div>
        <div className="relative flex justify-center items-center flex-col">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative flex flex-col items-center mt-4 w-full">
                <div className="flex justify-center items-center mb-1 gap-[4%] w-full">
                    <Link href="/rpkm/baan/home">
                        <Image
                            src={home}
                            alt="home"
                            className="w-auto h-7 m-2 text-black drop-shadow"
                        />
                    </Link>
                    <div className="relative flex justify-center items-center w-[65%]">
                        <input
                            type="text"
                            placeholder="ค้นหาบ้าน"
                            value=""
                            //onChange=""
                            className="w-full h-8 pl-4 rounded-full bg-project-yellow placeholder-rpkm-blue"
                        />
                        <Image
                            src={search}
                            alt="search"
                            className="absolute right-4"
                        />
                    </div> 
                </div>
                <div className="text-white font-semibold z-20 mb-2">ขนาดบ้าน</div>
                <div className="flex justify-center items-center flex-wrap mt-1 gap-[3%] w-[70%]">
                    {mockHouseSize.map((house, index) => (
                            <div key={index} className="flex justify-center items-center text-white bg-rpkm-green 
                                                        w-auto h-9 px-4 rounded-lg font-semibold drop-shadow-lg mb-4">
                                {house.size} ({house.count})
                            </div>
                        ))}
                </div>
                <div className="flex justify-center items-center flex-wrap w-[85%] h-5 mb-6">
                    {/*All house data*/}
                </div>
            </div>
        </div>
        </>
    );
}