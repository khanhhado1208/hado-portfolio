import React from 'react';
import { Logo } from '../assets/index';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-[180px_1fr_180px] bg-black text-white border-white border-2'>
      <Link to='/' className='flex items-center justify-center border-black border-r-2 pr-2'>
        <img src={Logo} alt="HaDo" style={{ width: '50px', height: '30px', marginRight: '0.5rem' }} />
        <span className="text-sm whitespace-nowrap font-bold">HA DO | STUDENT</span>
      </Link>

      <Link to='/contact' className='md:col-start-3 border-black md:border-1-2 flex gap-2 items-center justify-center text-lg hover:bg-green-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        Let's talk
      </Link>
      
      <nav className='col-span-2  md:row-start-1 md:col-start-2 md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center justify-center'>
        <ul className='flex gap-6 max-w-sm overflow-auto snap-always p-4 text-lg'>
          <li>
            <NavLink 
              to='/' 
              className="text-white hover:text-white hover:text-xl hover:shadow-md transition duration-300"
            >
              Home
            </NavLink> 
          </li>
          <li>
            <NavLink 
              to='/about' 
              className="text-white hover:text-white hover:text-xl hover:shadow-md transition duration-300"
            >
              About
            </NavLink>
          </li>
      
        </ul>
      </nav> 
    </header>
  );
}

export default Header;
