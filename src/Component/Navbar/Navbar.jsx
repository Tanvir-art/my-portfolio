import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaPeopleArrows, FaPenNib, FaShoppingBag } from "react-icons/fa"

import { FaEnvelopeOpen } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex flex-col min-h-full gap-6 bg-[#141410] text-white fixed px-[20px]' > 
      <div className='pt-6'>
        <img src='/images/preview.png' className='w-20 mx-auto' alt="profile" />
      </div>

      <div>
        <h2 className='text-center text-3xl font-bold'>Tanvir Hasan</h2>
      </div>

      <div >
        <ul className='flex flex-col gap-6 items-center text-xl font-medium'>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44'> <FaHome className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/'> Home </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44'> <FaPeopleArrows  className='mr-3 text-xl text-yellow-500'/> <NavLink to='/about'> About </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44'> <FaShoppingBag  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/service'> Service </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44'> <FaPenNib  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/skill'> Skills </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44'> <FaGear  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/portfolio'> Portfolio </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded mb-4 w-44'> <FaEnvelopeOpen  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/contact'> Contact </NavLink> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
