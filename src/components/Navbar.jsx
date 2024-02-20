import React from 'react'
import { Link } from "react-router-dom";
import Logo from './Logo'
import { FaBookBible } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { MdMonitor } from "react-icons/md";

function Navbar() {
  return (
    <div className='bg-black text-white text-2xl h-16 border-b-2 border-orange-600 flex justify-between items-center px-3'>
      <Link to="/">
        <Logo/>
      </Link>

      <span id='middle-section' className='flex space-x-24 text-3xl'>
        <Link to="/search">
          <FaSearch className=' hover:text-orange-600' title='Search'/>
        </Link>

        <Link to="/bible">
        <FaBookBible className=' hover:text-orange-600' title='Bible'/>
        </Link>

        <Link to="/monitor">
          <MdMonitor className=' hover:text-orange-600' title='Monitor'/>
        </Link>
      </span>

     
      <span id="right-section" className='flex space-x-4 text-3xl'>
        <Link to="/settings">
          <IoSettingsSharp title='Settings' className='hover:text-orange-600'/>
        </Link>
        
        <Link to="/account">
          <span className='flex items-center space-x-1 hover:text-orange-600'>
              <MdAccountCircle title='Account'className=''/>
              <p className='text-sm'>bisericaemanuelorg@gmail.com</p>
          </span>
        </Link>
      </span>

    </div>
  )
}

export default Navbar