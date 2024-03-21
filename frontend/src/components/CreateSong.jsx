import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteForever } from "react-icons/md";
import { BiSolidDuplicate } from "react-icons/bi";
import { MdSaveAlt } from "react-icons/md";
import {Reorder} from "framer-motion";

function CreateSong() {

  const [newSong, setNewSong] = useState({
    title:"",
    author:"",
    key:"",
    length:0,
    tags:"",
    content:[] // each item will have id, tip, selected, text
  });

  const [selectedItemId, setSelectedItemId] = useState(0);

  function handleAddSongSection(){
    const song_title = document.getElementById("input-song-title").value;
    const song_author = document.getElementById("input-song-author").value;
    const song_key = document.getElementById("input-song-key").value;
    const song_length = document.getElementById("input-song-length").value;
    const song_tags = document.getElementById("input-song-tags").value;
    const section_type = document.getElementById("input-section-type").value;
    const section_text = document.getElementById("input-section-text").value;
    
    setNewSong({
      title:song_title,
      author:song_author,
      key:song_key,
      length:song_length,
      tags:song_tags,
      content: [...newSong.content, {'id':uuidv4(), 'selected':false,'tip':section_type, 'text':section_text}]
    })
    //Reset "add section area"
    document.getElementById("input-section-type").value = "V"
    document.getElementById("input-section-text").value = ""
  }

  function displaySong(){
    console.log(newSong);
    return(newSong.content?.map((slide)=>(
                <li  className={slide.selected?"bg-orange-600 py-2 flex items-center justify-between":'py-2 flex items-center hover:bg-orange-600'} id={slide.id} key={slide.id} onClick={setSelectedItem}>
                    <span className='flex'>
                        <span className=' min-w-12 w-12 font-bold'>{slide.tip}</span>
                        <span className='whitespace-pre-wrap'>{slide?.text}</span>
                    </span>
                    <span className='flex gap-2'>
                      {slide.selected && <BiSolidDuplicate  id={slide.id} size='24' className='text-black hover:text-white' onClick={handleDuplicateSection} title='duplicate section'/>}
                      {slide.selected && <MdDeleteForever  id={slide.id} size='24' className='text-black hover:text-white' onClick={handleRemoveSection} title='remove section'/>}
                   </span>
                </li>
            )));

  }

  function setSelectedItem(ev){

    newSong.content.forEach(element => {
      
      if (ev.currentTarget.id === element.id)
      {
        element.selected = true;
        setSelectedItemId(element.id);
      }else{
        element.selected = false;
      }
    });
  }

  useEffect(() => {
    displaySong();
},[JSON.stringify(newSong.content)])


  function handleRemoveSection(ev){
    let itemId = ev.currentTarget.id;
    setNewSong(oldSong => ({
      ...oldSong,
      content: [...newSong.content.filter((item) => item.id !== itemId)]
    }));
  }

  function handleDuplicateSection(ev){
    let existingItemId = ev.currentTarget.id;
    
    newSong.content.forEach(element => {
      if(existingItemId === element.id)
      {
        setNewSong({
          content: [...newSong.content, {'id':uuidv4(), 'selected':false,'tip':element.tip, 'text':element.text}]
        })
      }
    });
  }

  function handleSaveNewSong(){
    console.log(newSong)
  }

  return (
    <div className='bg-black text-white w-[100%] h-[80vh] flex  px-5 '>
        <div id='create-song-left-container' className='w-[50%] overflow-auto flex-grow-1 '>
            <div id ="create-song-title" className=' py-5 flex justify-center'>
                <h1 className='text-3xl'>Create a new song</h1>
            </div>

            <div id ="create-song-content" className=' pt-5 flex justify-start flex-col gap-5'>
              {/* Song title */}
              <div className="label flex justify-between  ">
                <span className="label-text px-5 text-xl ">Title:</span>
                <input id="input-song-title" type="text" className="input input-bordered w-[70%] max-w-md" value="dummy_title" />
              </div>

              {/* Song author */}
              <div className="label flex justify-between ">
                <span className="label-text px-5 text-xl">Author:</span>
                <input id="input-song-author" type="text" className="input input-bordered  w-[70%] max-w-md "value="dummy_author"  />
              </div>

              {/* Song key */}
              <div className="label flex justify-between ">
              <span className="label-text px-5 text-xl">Default Key:</span>
              <select id="input-song-key" className="select select-bordered w-[70%] max-w-md">
                <option  selected>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>A</option>
                <option>B</option>
              </select>
              </div>

               {/* Song Length */}
               <div className="label flex justify-between ">
                <span className="label-text px-5 text-xl">Length (seconds):</span>
                <input id="input-song-length" type="text" className="input input-bordered  w-[70%] max-w-md" value="120"  />
              </div>

               {/* Song tags */}
               <div className="label flex justify-between ">
                <span className="label-text px-5 text-xl">Tags (space separated):</span>
                <input id="input-song-tags" type="text" className="input input-bordered  w-[70%] max-w-md" value="christmas, pop" />
              </div>

                <div id ="create-song-lyrics-title" className=' py-7 flex justify-center'>
                      <h1 className='text-3xl'>Lyrics</h1>
              </div>

              <div id ="create-song-lyrics-content" className=' flex justify-center gap-5 '>
                  <div className='flex flex-col items-center w-[100%] gap-5'>
                      <select id="input-section-type" className="select select-bordered w-[70%] max-w-md">
                          <option  selected>V</option>
                          <option>C</option>
                          <option>Pc</option>
                          <option>Br</option>
                      </select>

                      <textarea id="input-section-text" className="textarea textarea-bordered w-[70%] max-w-md h-[300px]" placeholder="Lyrics..."></textarea>
                      <button className="btn btn-outline btn-accent" onClick={handleAddSongSection}>Add section</button>
                  </div>
              </div>

            </div>
        </div>
        <div className="divider divider-horizontal"></div>

        <div id='create-song-right-container' className='w-[50%]  overflow-auto flex-grow-1 '>
            <div id ="create-song-lyrics-title" className=' py-5 flex justify-center'>
                    <h1 className='text-3xl'>Preview</h1>
            </div>
            <div id ="create-song-lyrics-title" className='  flex justify-center'>
                     <button className={newSong.content.length?"btn btn-outline btn-warning":"btn btn-disabled"} onClick={handleSaveNewSong}><MdSaveAlt size={20}/> Save to database</button>
            </div>

            <div id ="create-song-lyrics-content" className='pt-7  flex flex-col gap-5 '>
              {displaySong()}
            </div>
        </div>
</div>
  )
}

export default CreateSong