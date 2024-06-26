import React from 'react'
import {useContext} from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo'
import { FaBookBible } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdAccountCircle, MdOutlineLyrics } from "react-icons/md";
import MainDisplay from './MainDisplay';
import StageDisplay from './StageDisplay';
import { LuMonitorX } from "react-icons/lu";
import { TiPlus } from "react-icons/ti";
import CurrentServiceContext from '../context/ServiceContext'

function Navbar() {

  // Close the detail dropdown when clicked outside
  window.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
      if (!dropdown.contains(e.target)) {
        // Click was outside the dropdown, close it
        dropdown.open = false;
      }
    });
  });

  const {setMainDisplayText, setStageDisplayText} = useContext(CurrentServiceContext)
  function handleClearAllScreens(){
    setMainDisplayText("");
    setStageDisplayText("");
  }
  return (
    <div className='bg-black text-white text-2xl h-16 border-b border-orange-600 flex justify-between items-center px-3'>
      <Link to="/">
        <Logo/>
      </Link>

      <span id='middle-section' className='flex md:space-x-24 text-3xl'>
        
        <Link to="/create-song">
          <span className='flex items-baseline  hover:text-orange-600' title='Create song'>
              <MdOutlineLyrics/>
              <TiPlus  className="-m-2" size={20}/>
          </span>
        </Link>

        <Link to="/add-item/lyrics">
          <FaSearch className=' hover:text-orange-600' title='Search'/>
        </Link>

        <Link to="/bible">
        <FaBookBible className=' hover:text-orange-600' title='Bible'/>
        </Link>

        <MainDisplay/>

        <StageDisplay/>

        <LuMonitorX className=' hover:text-orange-600' title='Clear all screens' onClick={handleClearAllScreens}/>
      </span>

     
      <span id="right-section" className='flex space-x-4 text-3xl items-center'>
        <Link to="/settings">
          <IoSettingsSharp title='Settings' className='hover:text-orange-600'/>
        </Link>
        
        <details className="dropdown">
          <summary className='flex items-center space-x-1 hover:text-orange-600'>
            <MdAccountCircle title='Account'className=''/>
            <span className='text-sm hidden lg:block '>bisericaemanuelorg@gmail.com</span>
          </summary>
          <ul className=" my-3 w-auto -mx-[25%] p-2 bg-base-100 rounded-t-none absolute text-sm border border-[#292524]  text-center lg:mx-10">
            <li className='hover:bg-orange-600 border-b border-b-[#292524]'> <Link to="/account">Manage account</Link></li>
            <li className='hover:bg-orange-600'><a>Logout</a></li>
          </ul>
        </details>

      </span>

    </div>
  )
}

export default Navbar