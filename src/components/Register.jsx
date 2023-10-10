import React from 'react'

export default function Register({visible, onClose,onFormSwitch}) {

        const handleClose =(e)=>{
            if(e.target.id === "modal-container"){
            onClose()
        }
        }
        
        if(!visible){
            return null
        }
        
    return (
        <div 
        id="modal-container"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[99]"
        onClick={handleClose}
    >
    <div className=" p-5 rounded-lg w-[450px] aspect-w-1 aspect-h-1 bg-purple-800" id='login-container'>
        <h1 className="font-semibold text-center text-2xl text-white my-4">
        Register
        </h1>

        

        <div className="flex flex-col justify-start items-start">

            <label htmlFor="" className='text-white text-sm my-2'>Email Address <span className="text-red-500">*</span></label>
        <input
            id='login-input'
            type="text"
            className="border  p-2 rounded-full mb-3 w-full "
            required
        />

        <label htmlFor="" className='text-white text-sm my-2'>Password <span className="text-red-500">*</span></label>
        <input
            id='login-input'
            type="password"
            className="border  p-2 rounded-full mb-6 w-full "
            required
        />

        </div>
        <div className="text-center ">
        <button className="px-5 py-2 rounded-full bg-yellow-400 mb-6 w-1/4 text-white ">
            Register
        </button>
        </div>
        <div className='flex flex-col pt-2' id='login-bottom'>
            <span className='text-white my-2' onClick={()=>onFormSwitch("login")}>Already have an account</span>
        </div>
    </div>
    </div>
  )
}
