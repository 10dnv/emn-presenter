import { useState, useContext} from 'react';
import React from 'react'
import { createPortal } from 'react-dom';
import { MdMonitor } from "react-icons/md";
import { PiMicrophoneStage } from "react-icons/pi";
import CurrentServiceContext from '../context/ServiceContext'


function NewWindowPortal({ children }) {
  const [newWindow, setNewWindow] = useState(null);

  const openNewWindow = () => {
    console.log("created stage monitor window")
    const newWindowRef = window.open('', '_blank');
    var htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stage Display</title>
      </head>
   
      <body>
      <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>`;
    newWindowRef.document.write(htmlContent);
    setNewWindow(newWindowRef);
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
        <div id ="StageDisplay" className='flex flex-col items-center   text-white bg-black w-full h-full ' >
            
            <div id="title" className=" text-2xl text-orange-600 bg-black flex justify-center h-[5vh]">
              Stage display
            </div>

            <div id="order"  className='text-5xl text-white bg-black flex justify-center h-[5vh]'> 
              V1-C-V2-C-B-V3
            </div>

            <p className='text-center text-7xl items-center justify-center flex h-[90vh]'>{stageDisplayText}</p>
        </div>
    </NewWindowPortal>
  )
}

export default StageDisplay