import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import diamond from "../../image/diamond-badge.jpg"

export default function Diamond() {
  return (
    <div className='p-2'>
    <div className='text-white text-lg flex items-center justify-start'> <img src={diamond} alt="" width={30} height={30} className='mr-3' />Diamond $7900</div>
    <div>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">30 days Wide Banner</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">30 days Promoted Coin</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">Diamond Badge with frame</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">1 Twitter Post</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">8x Tg Channel Post & Group Pin</span></span>
    

    </div>
  </div>
  )
}
