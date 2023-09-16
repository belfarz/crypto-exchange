import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import {BsBuildings} from "react-icons/bs"
import {HiOutlineSearch} from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/gi"
export default function Layout() {

  function Openbar() {
    
    const element = document.querySelector('#sidebar')
    const style = "hidden"

    if (element.classList.contains(style)) {
      element.classList.remove("hidden")
      element.classList.add("block")
      document.querySelector('#outlet').classList.remove("ml-5")
      document.querySelector('#outlet').classList.add("ml-64")
    }else{
      element.classList.remove("block")
      element.classList.add("hidden")
      document.querySelector('#outlet').classList.remove("ml-64")
      document.querySelector('#outlet').classList.add("ml-5")
    }
  }

  return (
    // top nav bar
    <div className='relative'>
    <div className="fixed top-0 left-0 right-0 p-2 bg-blue-900 flex justify-between " id='topbar'>
        <div className='p-1 flex items-center rounded-md '>
            <BsBuildings style={{ fontSize: '35px', color: 'white'}}/> <span className='text-[15px]  ml-3 text-xl text-gray-200 font-100'>KOJO CALLS</span>
        </div>

        <div class="p-1 flex items-center rounded-md px-4 duration-300 cursor-pointer lg:bg-gray-700 w-auto bg-transparent ml-auto lg:ml-0">
          <HiOutlineSearch className='bi bi-search ' style={{ fontSize: '25px', color: 'white'}}/>
          <input class="text-[16px] lg:ml-4 m-1 p-0 bg-transparent focus:outline-none lg:w-[410px] w-[0px] ml-0"  id='place' placeholder='Search by coin name, symbol or contract address'/>
          <GiHamburgerMenu style={{ fontSize: '25px', color: 'white'}} className='m-2 lg:hidden' onClick={Openbar}/>
        </div>
        <div className="flex items-center ">
          {/* <GiHamburgerMenu style={{ fontSize: '25px', color: 'white'}} className='m-2 lg:hidden' onClick={Openbar}/> */}
          <button className='bg-gradient-to-bl from-amber-500 to-black text-white font-semibold py-1 px-6 rounded lg:block hidden'>Add Coin</button>
        </div>
        

    </div> 

    <div className='flex '>
          <Navbar />
        <div className='relative flex-1 ml-5 lg:ml-64  overflow-x-auto' id='outlet'>
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
