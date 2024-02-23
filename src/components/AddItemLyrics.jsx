import React from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
import { useState, useContext } from 'react';
import { BiSolidLeftArrow } from "react-icons/bi";
import CurrentServiceContext from '../context/ServiceContext'

function AddItemLyrics() {
    const API_URL_SEARCH_SONGS = "https://www.resursecrestine.ro/ajax/api/proiectie/cauta-cantec?q="
    const API_ONE_SONG = "https://www.resursecrestine.ro/ajax/api/proiectie/cere-cantec-dupa-id?id="

    const [searchQuerry, setSearchQuerry] = useState('');
    const [songResponse, setSongResponse] = useState([]);
    const [previewSong, setPreviewSong]   = useState([]);
    const [songTitle, setSongTitle]       = useState('');
    const {currentService, setCurrentService} = useContext(CurrentServiceContext);
    
    const search_lyrics = async (querry) =>{
        await axios.get(API_URL_SEARCH_SONGS + querry)
        .then(res => {
            setSongResponse([]);
            res.data?.cantari.map((data,idx) =>(
                setSongResponse(songResponse => [...songResponse, data])
            ))
        })
        .catch((error) => {
        console.log(error)
        });

        console.log(songResponse);
    }

    const handleSearchQuerry = (e) => {
        setSearchQuerry(e.target.value);
        search_lyrics(searchQuerry);
    };

    function displaySearchResults(){
        return(songResponse.map((song, id)=>(
            <li className='hover:bg-orange-600'  id={song.id} key={song.id} onClick={() => read_song(song.id)}>{song.text.replace(/(<([^>]+)>)/ig, '').replace('&mdash;', '    | Autor:')}</li>
        )));

    };

    const read_song = async (querry) =>{
        await axios.get(API_ONE_SONG + querry)
        .then(res => {
            setPreviewSong(res.data?.cantec.continut);
            setSongTitle(res.data?.cantec.titlu);
        })
        .catch((error) => {
        console.log(error)
        });
        console.log(previewSong);
    }

    function displayPreviewSong(){
        return(previewSong.map((song, id)=>(
                    <li  className='py-2 flex items-center hover:bg-orange-600' id={song.tip} key={song.tip} onClick={() => ('')}>
                        <span className=' min-w-12 w-12'>{song.tip}</span>
                        <span>{parse(song.text)}</span>
                    </li>
                )));

                
            }

  return (
    <div className='bg-black text-white w-[100%] h-[70vh] flex  px-5 '>
          
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
                <input type="text" placeholder="Enter song name" className="input input-bordered w-full max-w-[80%] rounded-sm" onChange={handleSearchQuerry}/>
            </div>

            <div className="justify-center flex-col p-8">
                    <h2 className="text-center text-orange-600 font-bold">Search results:</h2>
            </div>

            {/* <div className="  bg-base-100  flex justify-center mt-8 rounded-sm overflow-auto"> */}
            <div className="  flex  pt-3 rounded-sm overflow-auto h-[70%]  ">
                    
                    <ul id="search-results" className='pt-3 flex flex-col justify-start '>
                        {displaySearchResults()}
                    </ul>
                
            </div>
            
        </div>
        
        <div className="divider divider-horizontal"></div>

        <div id='preview-song-container' className='w-[50%] '>
            <div id ="content-title" className=' pt-5 flex justify-center'>
                    <h1 className='text-3xl'>Preview song</h1>
            </div>

            <div id ="content-title" className=' pt-8 flex justify-center'>
                    <h2 className='text-2xl text-orange-600'>{songTitle}</h2>
            </div>

            <div id ="content-title" className=' pt-8 flex justify-center'>
                    <button className={!currentService.empty && (songTitle)?"btn btn-outline btn-accent":"btn btn-outline btn-disabled"}><BiSolidLeftArrow /> Add to service</button>
            </div>
            
            <div className="  flex  pt-3 rounded-sm overflow-auto h-[80%]  w-[100%] justify-center">
                {/* preview song */}
                <ul className='  px-5 flex flex-col pt-8 overflow-auto '>
                        {displayPreviewSong()}
                        
                </ul>
            </div>

        </div>

    </div>
  )
}

export default AddItemLyrics