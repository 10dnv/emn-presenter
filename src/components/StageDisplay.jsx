import { useState, useContext} from 'react';
import React from 'react'
import { createPortal } from 'react-dom';
import { MdMonitor } from "react-icons/md";
import { PiMicrophoneStage } from "react-icons/pi";
import CurrentServiceContext from '../context/ServiceContext'
import parse from 'html-react-parser';


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
    const {stageDisplayText, selectedVerse, currentService, selectedItem} = useContext(CurrentServiceContext)

    function getVerse(){
      if (currentService.items[selectedItem])
      return(
        <p className='max-h-[80vh] overflow-y-clip'>{ parse(currentService.items[selectedItem].content[selectedVerse]?.text)}</p>
        
        )
      };
    function getNextVerse(){
     
      if (currentService.items[selectedItem] && selectedVerse < currentService.items[selectedItem].content.length - 1)
      return(
        parse(currentService.items[selectedItem].content[selectedVerse + 1].text)
        )
        else{
          return ""
        }
      };

    function getTitile(){
      if (currentService.items[selectedItem])
      return(
        <span className=''>{ currentService.items[selectedItem].title}</span>
        
        )
      };
    function getOrder(){
      if (currentService.items[selectedItem])
      {
        let orderItems = String(currentService.items[selectedItem].order).split(" ");
        let selectedItemType = String(currentService.items[selectedItem].content[selectedVerse]?.tip)
        
      return(
        // asta merge
        <div id="order">{ 
          orderItems.map((itm)=>(
            ((itm === selectedItemType)&& (itm.id != 'used'))?(<span className='text-orange-600 px-4' id='used'>{itm}</span>):
            <span className='text-white px-4'>{itm}</span>
        ))

        }</div>
        
        )
      };
    }
    
  return (
 
    <NewWindowPortal >
        <div id ="StageDisplay" className='flex flex-col    text-white bg-black w-full h-full ' >
            
            <div id="title" className=" text-2xl text-orange-600 bg-black flex justify-between h-[5vh] mx-3 my-1">
              <span>Stage display</span> 
              {getTitile()}
            </div>

            <div id="order"  className='text-5xl text-white bg-black flex justify-center h-[5vh]'> 
              {getOrder()}
            </div>

            <p className='text-center text-7xl items-center justify-center flex h-[80vh] '>{getVerse()}</p>

            <div id="next" className=' text-3xl   items-center justify-start pb-4 flex h-[10vh]'>
              <span className='font-bold px-3 text-orange-600'>NEXT &rarr; </span>
              <span className='line-clamp-2'>{getNextVerse()}</span>
            </div>
        </div>
    </NewWindowPortal>
  )
}

export default StageDisplay