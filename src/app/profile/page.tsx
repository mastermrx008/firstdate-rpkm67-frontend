"use client";

import Border from '@/components/Border';
import FDLogo from '@public/FIrst Date Logo.svg';
import bowLine from '@public/stat/bowline.svg';
import TwoCircleMenu from '@/components/TwoCircleMenu';
import UserInfo from '@/components/profile/UserInfo'
import StatBars from "@/components/profile/StatBars"
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Profile(){
    const { user } = useAuth();
    if( !user ) return;

    return (
        <main className="flex justify-center items-center flex-col bg-2">
            <TwoCircleMenu />
            <div className="flex justify-center items-center w-full h-screen overflow-y-auto">
            <Border variant="light-pink">
                <div className="flex flex-col items-center z-10">
                    <Image
                        src={FDLogo}
                        alt="logo"
                        className="w-44 mt-5 mb-2"
                    />
                    <UserInfo user={user}/>
                    <Image
                        src={bowLine}
                        alt="bowLine"
                        className="w-32 mb-3 mt-1"
                    />
                    <StatBars stamp={user?.stamp}/>
                    <div className="w-5/6 mt-10 z-10 drop-shadow">
                        <Link
                            href="/firstdate/home"
                            className="flex flex-row items-center justify-center bg-project-pink px-2 py-[10px] gap-x-2 rounded-lg text-white"
                        >
                            <p className="font-athiti text-xl font-medium text-black">กลับไปเดินทางต่อ</p>
                        </Link>
                    </div>
                </div>               
            </Border>
            </div>       
        </main>
    )
}