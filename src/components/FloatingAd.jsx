import React from 'react'
import popup from "../image/popup.gif"

export default function FloatingAd() {
    return (
        <div
            id="modal-container"
            className="fixed flex items-end  justify-end z-[-99] w-full"
            // onClick={handleClose}
        >
            <div className='flex justify-end p-5 bg-black'>
            <img src={popup} alt="" id='popup'/>
            </div>
        </div>
    )
}
