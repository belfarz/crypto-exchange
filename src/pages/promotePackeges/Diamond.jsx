import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

export default function Diamond() {
  return (
    <div className='p-2'>
    <span className='text-white text-lg'>Diamond $7900</span>
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
