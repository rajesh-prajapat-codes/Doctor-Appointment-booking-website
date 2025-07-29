import React from 'react'
import adminLogo from '../assets/assets_admin/admin_logo.svg';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={adminLogo} alt="Admin Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium '>
        <NavLink to= '/' >
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none bg-purple-500 h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to = '/doctors'>  
          <li className='py-1'>All Doctors</li>
          <hr className='border-none outline-none  bg-purple-500 h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to = '/about'>
          <li className='py-1'>About</li>
          <hr className='border-none outline-none  bg-purple-500 h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to= '/contact' >
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none  bg-purple-500 h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        <button className='bg-purple-500 text-white px-8 py-3 rounded-full font-light hidden md:block '>Create Acount</button>
      </div>
    </div>
  )
}

export default Navbar