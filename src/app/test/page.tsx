'use client'
import { useEffect } from 'react';
import Border from '@/components/Border';

export default function Test() {
    useEffect(() => {
        fetch('https://rpkm67-dev.sgcu.in.th/api/v1/auth/google-url')
            .then(response => response.json())
            .then(data => {
                const authUrl = data.url;
                window.location.href = authUrl; // Redirect the user
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle errors here, e.g., show an error message to the user
            });
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <main className="w-full h-screen flex justify-center items-center flex-col">
            <Border variant="dark-pink">
                <h1 className="text-4xl font text-center text-white font-season italic">
                    Button
                </h1>
                <p className="font-sarun">test สวัสดีครับ</p>
            </Border>
        </main>
    );
}