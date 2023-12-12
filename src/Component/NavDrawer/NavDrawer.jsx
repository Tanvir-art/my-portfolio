import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { FaHome, FaPeopleArrows, FaPenNib, FaShoppingBag } from "react-icons/fa"

import { FaEnvelopeOpen } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const NavDrawer = () => {
  return (
    <div className="bg-[#141410] flex justify-between py-4 z-20 pl-4">

      <div className="drawer pt-3">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="px-6 py-3 rounded bg-[#eab308] drawer-button">
            Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="flex flex-col gap-6 justify-center items-center p-4  min-h-full bg-[#141410] ">
          <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44 text-white'> <FaHome className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/'> Home </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44 text-white'> <FaPeopleArrows  className='mr-3 text-xl text-yellow-500'/> <NavLink to='/about'> About </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44 text-white'> <FaShoppingBag  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/service'> Service </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44 text-white'> <FaPenNib  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/skill'> Skills </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded w-44 text-white'> <FaGear  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/portfolio'> Portfolio </NavLink> </li>
            <li className='border-solid border-2 border-yellow-500 flex gap-3 items-center px-6 py-3 rounded mb-4 w-44 text-white'> <FaEnvelopeOpen  className='mr-3 text-xl text-yellow-500'/>  <NavLink to='/contact'> Contact </NavLink> </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-6 mr-2">
        <Link to='https://github.com/Tanvir-art' target="_blank">
            <button className="px-6 py-3 rounded bg-[#eab308]"><FaGithub className="text-xl"/></button>
        </Link>

        <Link to='https://www.linkedin.com/in/tanvir-hasan-a4126b237/' target="_blank">
            <button className="px-6 py-3 rounded bg-[#eab308]"><FaLinkedin className="text-xl"/></button>
        </Link>
      </div>
    </div>
  );
};

export default NavDrawer;
