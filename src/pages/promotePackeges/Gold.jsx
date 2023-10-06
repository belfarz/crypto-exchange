import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

export default function Gold() {
  return (
    <div className='p-2'>
    <span className='text-white text-lg'>Silver $3250</span>
    <div>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">30 days Rotated Banner</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">30 days Promoted Coin</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">Gold Badge with frame</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">1 Twitter Poste</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">4x Tg Channel Post & Group Pin</span></span>
    </div>
  </div>
  )
}
