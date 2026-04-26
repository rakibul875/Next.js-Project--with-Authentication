import React from 'react';
import logo from '@/assets/image/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-10 space-y-3'>
            <Image alt='logo' src={logo} width={300} height={200} className='mx-auto'/>
            <p className='text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl px-2'>{format(new Date(), "EEE, MMM dd ,yyy")}</p>
        </div>
    );
};

export default Header;