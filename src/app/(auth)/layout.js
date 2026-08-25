import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <>
            <header className='py-3'>
                <div className='max-w-2xl mx-auto flex justify-between items-center'>
                    <div>
                        <Image 
                        width={120}
                        height={50}
                        alt='docxio logo'
                        src="/docxio-logo.png"
                        />
                    </div>
                    <div>
                        <ul className='flex gap-4'>
                            <li>
                                <Link className='text-sm font-bolder text-black underline hover:text-[#10b981]' href="/">Home</Link>
                            </li>
                            <li>
                                <Link className='text-sm font-bolder text-black underline hover:text-[#10b981]' href="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div>
                {children}
            </div>
        </>
    );
};

export default AuthLayout;