import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import gold from "../../image/gold-badge.jpg"

export default function Gold() {
  return (
    <div className='p-2'>
    <div className='text-white text-lg flex items-center justify-start'><img src={gold} alt="" width={30} height={30} className='mr-3'/>Gold $4500</div>
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
