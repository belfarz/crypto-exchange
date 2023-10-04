import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function AddCoin() {
    const IsActive = {
      border: "1px solid #7d2ae8"
  }
  
  return (
    <div className='mt-20 relative flex-1 lg:ml-64  overflow-x-auto' id='addcoin_container'>
      <h1 className="text-[40px] text-gray-300">List Your Coin For Free</h1>

      <div className="flex">
        <NavLink 
          to="." 
          end
          className="rounded-full pb-1 m-2 pl-5 pr-5 text-[16px] text-gray-400" 
          id='addcoin-type'
          style={({isActive})=> isActive ? IsActive : null}
        >coin</NavLink>
        <NavLink 
          to="presale" 
          className="rounded-full pb-1 m-2 pl-5 pr-5 text-[16px] text-gray-400" 
          id='addcoin-type'
          style={({isActive})=> isActive ? IsActive : null}
        >presale</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
