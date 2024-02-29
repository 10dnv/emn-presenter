import { useState, useContext} from 'react';
import React from 'react'
import { createPortal } from 'react-dom';
import { MdMonitor } from "react-icons/md";
import { PiMicrophoneStage } from "react-icons/pi";
import CurrentServiceContext from '../context/ServiceContext'


function NewWindowPortal({ children }) {
  const [newWindow, setNewWindow] = useState(null);
  const styles = `
  @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`

  
  const openNewWindow = () => {
    console.log("created stage monitor window")
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
        <span className='flex items-baseline hover:text-orange-600'>
            <MdMonitor className='' title='Stage Display' onClick={openNewWindow}/>
            <PiMicrophoneStage size={20} />
        </span>
      {newWindow && createPortal(children, newWindow.document.body )}
    </>
  );
}

function StageDisplay() {
  const {stageDisplayText} = useContext(CurrentServiceContext)
  return (
 
    <NewWindowPortal >
            <div id="title" className=" text-2xl text-red-500 bg-black flex justify-center">Stage Display</div>
            <div id ="StageDisplay" className='flex items-center justify-center  text-white bg-black w-full h-full ' >
            <p className='text-center text-7xl'>{stageDisplayText}</p>
            </div>
    </NewWindowPortal>
  )
}

export default StageDisplay