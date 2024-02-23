import React from 'react'

function AddItemLyrics() {
  return (
    <div className='bg-black text-white w-[100%] h-full flex  px-5 '>
          

        <div id='lyrics-search-container' className='w-[50%] '>
            <div id ="content-title" className=' pt-5 flex justify-center'>
                <h1 className='text-3xl'>Search for <span className='text-orange-600'>lyrics</span></h1>
            </div>

            <div className="flex justify-around pt-8">
                <label className="cursor-pointer label flex gap-1">
                    <input type="checkbox"  className="checkbox checkbox-warning" disabled title='Not supported yet'/>
                    <span className="label-text px-1">Own database</span>
                </label>
                
                <label className="cursor-pointer label flex gap-1">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
                    <span className="label-text px-1">Resurse Crestine</span>
                </label>
            </div>

            <div id ="search-bar" className=' pt-8 flex justify-center'>
                <input type="text" placeholder="Enter song name" className="input input-bordered w-full max-w-[80%] rounded-sm" />
            </div>

            {/* <div className="  bg-base-100  flex justify-center mt-8 rounded-sm overflow-auto"> */}
            <div className="    flex justify-center mt-8 rounded-sm overflow-auto">
                <div className="justify-center flex-col">
                    <h2 className="text-center">Search results:</h2>
                    <ul id="search-results">

                    </ul>
                
                </div>
            </div>
            
        </div>
        
        <div className="divider divider-horizontal"></div>

        <div id='preview-song-container' className='w-[50%]'>
            <div id ="content-title" className=' pt-5 flex justify-center'>
                    <h1 className='text-3xl'>Preview song</h1>
                </div>
            </div>

    </div>
  )
}

export default AddItemLyrics