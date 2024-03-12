import React from 'react'

function CreateSong() {
  return (
    <div className='bg-black text-white w-[100%] h-[70vh] flex  px-5 '>
        <div id='create-song-left-container' className='w-[50%] '>
            <div id ="create-song-title" className=' py-5 flex justify-center'>
                <h1 className='text-3xl'>Create a new song</h1>
            </div>

            <div id ="create-song-content" className=' pt-5 flex justify-start flex-col gap-5'>
              {/* Song title */}
              <div className="label flex justify-between  ">
                <span className="label-text px-5 text-xl ">Title:</span>
                <input id="input-song-title" type="text" className="input input-bordered w-[70%] max-w-md"  />
              </div>

              {/* Song author */}
              <div className="label flex justify-between ">
                <span className="label-text px-5 text-xl">Author:</span>
                <input id="input-song-author" type="text" className="input input-bordered  w-[70%] max-w-md"  />
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
                <input id="input-song-length" type="text" className="input input-bordered  w-[70%] max-w-md"  />
              </div>

               {/* Song tags */}
               <div className="label flex justify-between ">
                <span className="label-text px-5 text-xl">Tags (space separated):</span>
                <input id="input-song-tags" type="text" className="input input-bordered  w-[70%] max-w-md"  />
              </div>

                <div id ="create-song-lyrics-title" className=' py-7 flex justify-center'>
                      <h1 className='text-3xl'>Lyrics</h1>
              </div>

              <div id ="create-song-lyrics-content" className=' flex justify-center gap-5 '>
                  <div className='flex flex-col items-center w-[100%] gap-5'>
                      <select id="input-song-key" className="select select-bordered w-[70%] max-w-md">
                          <option  selected>V</option>
                          <option>C</option>
                          <option>Pc</option>
                          <option>Br</option>
                      </select>

                      <textarea class="textarea textarea-bordered w-[70%] max-w-md h-[300px]" placeholder="Lyrics..."></textarea>

                      <button className="btn btn-outline btn-accent">Add section</button>
                  </div>
              </div>

            </div>
        </div>
        <div className="divider divider-horizontal"></div>

        <div id='create-song-right-container' className='w-[50%] '>
            <div id ="create-song-lyrics-title" className=' py-5 flex justify-center'>
                    <h1 className='text-3xl'>Preview</h1>
            </div>

            <div id ="create-song-lyrics-content" className='pt-7  flex flex-col gap-5 '>
              
            </div>
        </div>
</div>
  )
}

export default CreateSong