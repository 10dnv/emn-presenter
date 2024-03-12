import { useState, useEffect, useContext} from 'react';
import React from 'react'
import { createPortal } from 'react-dom';
import { MdMonitor } from "react-icons/md";
import CurrentServiceContext from '../context/ServiceContext'


function NewWindowPortal({ children }) {
  const [newWindow, setNewWindow] = useState(null);
  const styles = `
  @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`

  
  const openNewWindow = () => {
    console.log("created monitor window")
    const newWindowRef = window.open('', '_blank');
    setNewWindow(newWindowRef);

    // Inject the CSS styles into the new window
    const styleSheet = newWindowRef.document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    newWindowRef.document.head.appendChild(styleSheet);
  };
  
  return (
    <>
        <MdMonitor className=' hover:text-orange-600' title='Monitor' onClick={openNewWindow}/>
      {newWindow && createPortal(children, newWindow.document.body )}
    </>
  );
}

function MainDisplay() {
    const {mainDisplayText} = useContext(CurrentServiceContext)
  return (
 
    <NewWindowPortal >
            <div id ="MainDisplay" className='flex items-center justify-center  text-white bg-black w-full h-full ' >
            <p className='text-center text-7xl'>{mainDisplayText}</p>
            </div>
    </NewWindowPortal>
  )
}

export default MainDisplay