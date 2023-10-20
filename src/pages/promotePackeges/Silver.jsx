import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import silver from "../../image/silver-badge.jpg"

export default function Silver() {
  return (
    <div className='p-2'>
    <div className='text-white text-lg flex items-center justify-start'><img src={silver} alt="" width={30} height={30} className='mr-3'/>Silver $2500</div>
    <div>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">30 days Rotated Banner</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">Silver Badge with frame</span></span>
      <span className='flex my-2 items-center'><GiCheckMark className='text-green-500' /><span className="mx-2">2x Tg Channel Post & Group Pin</span></span>
    </div>
  </div>
  )
}
