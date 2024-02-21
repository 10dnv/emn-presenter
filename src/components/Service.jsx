import React, { useState } from 'react'
import { FaPlus, FaFolderOpen, FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { MdAddBox, MdEditNote, MdOutlinePlaylistRemove } from "react-icons/md";

function Service() {
  
  const empty_service = {
    title:"No service",
    empty:true,
    creation_date:null,
    items:[{
      id:1,
      selected:false,
      type:'lyrics',
      title:"Item 1",
      content:''
    }]
  };
  
  const [currentService, setCurrentService] =useState(empty_service);

  function handleOpenServiceModal(){
    if (currentService.empty === true)
    {
      document.getElementById('new_service_modal').showModal();
    }
  }

  function handleEditServiceModal(){
    if (currentService.empty === false)
    {
      document.getElementById('edit_service_modal').showModal();
    }
  }

  function handleEmptyServiceModal(){
    if (currentService.empty === false)
    {
      document.getElementById('remove_service_modal').showModal();
    }
  }

  function handleAddService(ev){
    const name = document.getElementById("modal-input-name-new");
    const err = document.getElementById("new_service_modal_err_placeholder");
    if (name.value !== ''){
      setCurrentService({...currentService, title:name.value, empty:false});
      name.value='';
      err.innerHTML = '';
      document.getElementById("edit_service").classList.remove("feature-disabled")
      document.getElementById("remove_service").classList.remove("feature-disabled")
      document.getElementById("add_service").classList.add("feature-disabled")
    }else{
      err.innerHTML = "Cannot be empty!"
      ev.preventDefault();
    }
  }


  function handleEditService(ev){
    const name = document.getElementById("modal-input-name-edit");
    const err = document.getElementById("new_service_modal_err_placeholder");
    if (name.value !== ''){
      setCurrentService({...currentService, title:name.value, empty:false});
      name.value='';
      err.innerHTML = '';
    }else{
      err.innerHTML = "Cannot be empty!"
      ev.preventDefault();
    }
  }
  function handleRemoveService(){
    setCurrentService(empty_service);
    document.getElementById("edit_service").classList.add("feature-disabled")
    document.getElementById("remove_service").classList.add("feature-disabled")
    document.getElementById("add_service").classList.remove("feature-disabled")
  }

  return (
    <div className='bg-black border-r border-orange-600 text-white h-[100%] w-[30%] flex flex-col '>
        <span className='text-md font-bold  p-2 mx-auto bg-[#292524] w-[100%]  text-center '>{currentService.title}</span>

        <dialog id="new_service_modal" className="modal">
          <div className="modal-box flex flex-col items-center justify-between gap-2">
            <h3 className="font-bold text-lg">Create new service</h3>
            <input id="modal-input-name-new" type="text" placeholder="Choose a name" className="input input-bordered w-full max-w-xs " />

            <p id='new_service_modal_err_placeholder' className='text-red-600'></p>
            <div className="modal-action">
              <form method="dialog" onSubmit={handleAddService}>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" type='submit' >Create</button>
              </form>
            </div>
          </div>
        </dialog>


        <dialog id="remove_service_modal" className="modal">
          <div className="modal-box flex flex-col items-center justify-between gap-2">
            <h3 className="font-bold text-lg">Are you sure you want to delete <span className='text-orange-600'>{currentService.title}</span>?</h3>

            <div className="modal-action">
              <form method="dialog"  >
                {/* if there is a button in form, it will close the modal */}
                <button id="btn-remove-yes" className="btn mx-5" onClick={()=>handleRemoveService()} >YES</button>
                <button id="btn-remove-no" className="btn " >NO</button>
              </form>
            </div>
          </div>
        </dialog>


        <dialog id="edit_service_modal" className="modal">
          <div className="modal-box flex flex-col items-center justify-between gap-2">
            <h3 className="font-bold text-lg">Edit service</h3>
            <input id="modal-input-name-edit" type="text" placeholder="Choose a name" className="input input-bordered w-full max-w-xs " />

            <p id='edit_service_modal_err_placeholder' className='text-red-600'></p>
            <div className="modal-action">
              <form method="dialog" onSubmit={handleEditService}>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" type='submit' >Update</button>
              </form>
            </div>
          </div>
        </dialog>


        <div id="service-buttons" className='text-md font-bold  p-2 mx-auto  w-[100%]  text-center border-b border-b-[#391a0e] flex justify-around bg-[#292524]'>
            <FaPlus id="add_service" size={20} className='hover:text-orange-600' onClick={()=>handleOpenServiceModal()}/>
            <FaFolderOpen size={20} className='hover:text-orange-600 feature-disabled' />
            <FaEdit id="edit_service" size={20} className='hover:text-orange-600 feature-disabled' onClick={()=>handleEditServiceModal()}/>
            <FaTrash id="remove_service" size={20} className='hover:text-orange-600 feature-disabled'onClick={()=>handleEmptyServiceModal()}/>
            <FaSave id="save_service" size={20} className='hover:text-orange-600 feature-disabled'/>
        </div>

        <div id="list-items" className='h-[90%]'>

        </div>



        <div id="service-items-buttons" className={!currentService.empty?"flex justify-between p-2 flex-grow-0 bg-[#292524]":"hidden"}>
                <div className='flex items-center hover:text-green-500 cursor-pointer' onClick={'a'}>
                    <MdAddBox size={30}/>
                    <span> Add </span>
                </div>

                <div className='flex items-center hover:text-[#F2AF29] cursor-pointer ' onClick={'editServiceItemHandle'}>
                    <MdEditNote size={30}/>
                    <span> Edit </span>
                </div>
                
                <div className='flex items-center hover:text-[#ad343e] cursor-pointer' onClick={'removeServiceItemHandle'}>
                    <MdOutlinePlaylistRemove size={30}/>
                    <span> Remove</span>
                </div>
        </div>
    </div>
  )
}

export default Service