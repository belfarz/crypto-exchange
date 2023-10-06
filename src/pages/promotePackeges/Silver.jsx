import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

export default function Silver() {
  return (
    <div className='p-2'>
    <span className='text-white text-lg'>Silver $3250</span>
    <div>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">30 days Rotated Banner</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">Silver Badge with frame</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">2x Tg Channel Post & Group Pin</span></span>
    </div>
  </div>
  )
}
