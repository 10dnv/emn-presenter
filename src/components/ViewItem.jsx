import { useContext, useEffect, useState } from 'react';
import React from 'react'
import CurrentServiceContext from '../context/ServiceContext'
import parse from 'html-react-parser';
import { createPortal } from 'react-dom';


function NewWindowPortal({ children }) {
  const [newWindow, setNewWindow] = useState(null);
  const styles = `
  @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`

  
  const openNewWindow = () => {
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
      <button onClick={openNewWindow}>Open New Window</button>
      {newWindow && createPortal(children, newWindow.document.body )}
    </>
  );
}

function ViewItem() {

  const {currentService, setCurrentService} = useContext(CurrentServiceContext);
  const [previewItem, setPreviewItem] = useState({});
  const [mainDisplayText, setMainDisplayText] = useState("");

  function handleDisplaySelectedItem(){
    for(const item of currentService.items)
    {
        if(item.selected === true)
        {
          //  console.log(item);
           setPreviewItem(item);
           break;
        }
    }
    }

    function displayPreviewItem(){
      // console.log(previewItem);
      return(previewItem.content?.map((song, id)=>(
                  <li  className='py-2 flex items-center hover:bg-orange-600' id={song.tip} key={song.tip} onClick={handlePrepareDisplaySlide}>
                      <span className=' min-w-12 w-12 font-bold'>{song.tip}</span>
                      <span>{parse(song.text)}</span>
                  </li>
              )));

          }

    useEffect(() => {
      handleDisplaySelectedItem();
  },[JSON.stringify(currentService)])

    function handlePrepareDisplaySlide(ev){
      // console.log(previewItem.content)

      {
        previewItem.content?.map((data) =>(

          (ev.currentTarget.id === data.tip)?setMainDisplayText(parse(data.text)):null
        ))
    }
  }
  return (
    <div className='bg-black text-white w-[100%] h-[70vh] flex  px-5 '>

       <div id='preview-song-container' className='w-[50%] '>
            <div id ="content-title" className=' pt-5 flex justify-center'>
                    <h1 className='text-3xl'>{previewItem.title}</h1>
            </div>

            <div id ="content-title" className=' pt-8 flex flex-col'>
                    <h2 className='text-sm text-orange-600'>Author: {previewItem.author}</h2>
                    <h2 className='text-sm pb-5 '>Order: {previewItem.order}</h2>
            </div>

            <ul className='  px-5  flex flex-col pt-8 overflow-auto h-[100%]'>
                  {displayPreviewItem()}
              </ul>
        </div>

        <div className="divider divider-horizontal"></div>

        <div id='preview-monitor' className='w-[50%] '>
          <NewWindowPortal >
            <div id ="MainDisplay" className='flex items-center justify-center  text-white bg-black w-full h-full ' >
            {/* <Textfit className='w-full h-full bg-red-600 justify-center items-center'> */}
            <p className='text-center text-7xl'>{mainDisplayText}</p>
              {/* </Textfit> */}

            </div>
        </NewWindowPortal>
        </div>

    </div>
  )
}

export default ViewItem