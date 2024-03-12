import { useContext, useEffect, useState } from 'react';
import React from 'react'
import CurrentServiceContext from '../context/ServiceContext'
import parse from 'html-react-parser';

function ViewItem() {

  const {currentService, setCurrentService, mainDisplayText, setMainDisplayText, setStageDisplayText,selectedVerse, setSelectedVerse} = useContext(CurrentServiceContext);
  const [previewItem, setPreviewItem] = useState({});


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
                  <li  className='py-2 flex items-center hover:bg-orange-600' id={song.tip} key={id} onClick={handlePrepareDisplaySlide}>
                      <span className=' min-w-12 w-12 font-bold'>{song.tip}</span>
                      <span>{parse(song?.text)}</span>
                  </li>
              )));

          }

    useEffect(() => {
      handleDisplaySelectedItem();
  },[JSON.stringify(currentService)])

    function handlePrepareDisplaySlide(ev){
      console.log(previewItem)

      {
        previewItem.content?.map((data, idx) =>(

          (ev.currentTarget.id === data?.tip)?(
            setSelectedVerse(idx)):null
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
        </div>

    </div>
  )
}

export default ViewItem