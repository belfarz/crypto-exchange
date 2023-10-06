import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLoaderData } from 'react-router-dom'
// import {HiOutlineSearch} from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/gi"
// import { Link } from 'react-router-dom'
import Footer from './Footer'
import Scroll from './Scroll'
import { getData } from './api'
// import Sticker from './Sticker'

export function loader() {

  return getData()
  
}

export default function Layout() {

  const scrollData = useLoaderData()

  function Openbar() {
    
    const element = document.querySelector('#sidebar')
    const style = "hidden"

    if (element.classList.contains(style)) {
      if (window.innerWidth > 765 ) {
        element.classList.remove("hidden")
        element.classList.remove("z-[99]")
        element.classList.add("block")
        // document.querySelector('#outlet').classList.remove("ml-2")
        // document.querySelector('#outlet').classList.add("ml-64")
      }else{
        element.classList.remove("hidden")
        element.classList.add("block")
        element.classList.add("w-full")
      }
    }else{
      element.classList.remove("block")
      element.classList.add("hidden")
      // document.querySelector('#outlet').classList.remove("ml-64")
      // document.querySelector('#outlet').classList.add("ml-2")
    }
  }

  return (
    // top nav bar
    <div>
    <div className="fixed top-0 left-0 right-0 p-2 bg-blue-900 flex justify-center z-[99] " id='topbar'>
        <div className='p-1 flex items-center rounded-md '>
            <span className='text-[15px]  ml-3 text-xl text-gray-200 font-100'>KOJO CALLS</span>
        </div>

        <div className="p-1 flex items-center rounded-md px-4 duration-300 cursor-pointerw-auto bg-transparent ml-auto lg:ml-0">
          {/* <HiOutlineSearch className='bi bi-search ' style={{ fontSize: '25px', color: 'white'}}/>
          <input className="text-[16px] lg:ml-4 m-1 p-0 bg-transparent focus:outline-none lg:w-[410px] w-[0px] ml-0"  id='place' placeholder='Search by coin name, symbol or contract address'/> */}
          <GiHamburgerMenu style={{ fontSize: '25px', color: 'white'}} className='m-2 lg:hidden' onClick={Openbar}/>
        </div>

        {/* <div className="flex items-center ">
        
       <Link to="addCoin"><span className='bg-purple-800 text-white font-semibold py-2 px-8 rounded lg:block hidden'>Add Coin</span></Link> 
        </div> */}
        

    </div> 

    {/* <Sticker />  */}
    <div className="lg:ml-64 mt-16"><Scroll data={scrollData}/></div>

    <div className='flex '>
          <Navbar toggle={Openbar} />
        
          
            <Outlet />
       
        
    </div>
    
      <Footer className='mt-auto' />
    
    </div>
  )
}
