import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import userAvatar from '@/assets/image/user.png'

const NavBar = () => {
    return (
        <div className='flex justify-between container my-5 mx-auto'>
            <div></div>
            <ul className='flex justify-between gap-3'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className="flex items-center gap-2">
                <Image src={userAvatar} width={50} height={50} alt='auth'/>
                <button className='btn bg-purple-400'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;