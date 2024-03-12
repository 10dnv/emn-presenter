import {React, useContext} from 'react'
import CurrentServiceContext from '../context/ServiceContext'
import { useNavigate } from 'react-router-dom';
import { MdOutlineLyrics } from "react-icons/md";
import { RiSlideshow2Fill } from "react-icons/ri";

function AddItem() {
    const navigate = useNavigate();
    const {currentService, setCurrentService} = useContext(CurrentServiceContext);

    function handleAddLyricsItem(){
        navigate("/add-item/lyrics");
      }
    // Prevent adding item if list is empty
    if(currentService.empty)
    {
        return <div className='bg-black text-white w-[100%] flex flex-col items-center'></div>
        // To be replaced by homescreen
    }

  return (
    <div className='bg-black text-white w-[100%] flex flex-col items-center'>
        <div id ="content-title" className=' mt-[10%]'>
            <h1 className='text-3xl'>Add item to service: <span className='text-orange-600'>{currentService.title}</span></h1>
        </div>

        <div id="header-zone" className='flex h-[50%] w-[50%] justify-center  items-center gap-16'>
                <button className="btn btn-outline btn-warning  btn-md lg:btn-lg" onClick={()=>handleAddLyricsItem()}><MdOutlineLyrics  />Lyrics</button>
                <button className="btn btn-outline  btn-warning  btn-md lg:btn-lg btn-disabled"><RiSlideshow2Fill />Slides</button>
        </div>
    </div>
  )
}

export default AddItem