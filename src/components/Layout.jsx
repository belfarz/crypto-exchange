import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import {GiRabbit} from "react-icons/gi"
import {HiOutlineSearch} from "react-icons/hi"
export default function Layout() {
  return (
    // top nav bar
    <div className='relative'>
    <div className="fixed top-0 left-0 right-0 p-2 bg-blue-900 flex justify-between " id='topbar'>
        <div className='p-1 flex items-center rounded-md '>
            <GiRabbit style={{ fontSize: '35px', color: 'white'}}/> <span className='text-[15px]  ml-3 text-xl text-gray-200 font-100'>MOONTOK</span>
        </div>

        <div class="p-1 flex items-center rounded-md 
        px-4 duration-300 cursor-pointer  bg-gray-700 w-auto ">
          <HiOutlineSearch className='bi bi-search ' style={{ fontSize: '25px', color: 'white'}}/>
          <input class="text-[16px] ml-4 m-1 w-full bg-transparent focus:outline-none w-[410px]" placeholder='Search by coin name, symbol or contract address'/>
        </div>

        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded shadow-md '>Add Coin</button>

    </div> 

    <div className='flex '>
          <Navbar />
        <div className='relative flex-1 ml-64 overflow-x-auto' id='outlet'>
          {/* Content */}
        <div className='' >
            {/* Outlet content */}
            <Outlet />
        </div>
        </div>
    </div>
    </div>
  )
}
