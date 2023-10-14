import React, { useState } from 'react'
import fixedImg from "../image/fixed.jpg"
import testImg from "../image/test.jpg"

import MyModal from '../components/MyModal'
import { NavLink, Outlet } from 'react-router-dom'

export default function Promote() {

    
      const IsActive = {
        fontWeight: "bold",
        background: 'rgba(20, 21, 23, 0.8)',
        border: "none",
        borderRadius: "4px",
    }
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose =()=> setShowMyModal(false)
    
  return (
    <div className='mt-24 relative flex-1 ml-2 lg:ml-64 overflow-x-auto'>
    <h1 className="ppp">Promote Packages Prices</h1>
    <div className="flex flex-wrap justify-center">

        <div className="col-4 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={fixedImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option1" className='mr-2 '/> <label id='radio-label' htmlFor="option1" className=''>$150 - 1day </label> </span>
                <span className='flex'><input type="radio" name="options" id="option2" className='mr-2 '/> <label id='radio-label' htmlFor="option2" className=''>$390 -3days+channel pin  </label> </span>
                <span className='flex'><input type="radio" name="options" id="option3" className='mr-2 '/> <label id='radio-label' htmlFor="option3" className=''>$550$ -7days+channel pin </label> </span>    
                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>

        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option4" className='mr-2 '/> <label id='radio-label' htmlFor="option4" className=''>$200 - 1 DAY  </label> </span>
                <span className='flex'><input type="radio" name="options" id="option5" className='mr-2 '/> <label id='radio-label' htmlFor="option5" className=''>$450 - 3days+channel pin </label> </span>
                <span className='flex'><input type="radio" name="options" id="option6" className='mr-2 '/> <label id='radio-label' htmlFor="option6" className=''>$890 - 7 days+channel pin  </label> </span>    
                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>

         <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center flex-col mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span className='flex'><input type="radio" name="options" id="option7" className='mr-2 '/> <label id='radio-label' htmlFor="option7" className=''>$100- 1day+ installation channel </label> </span>
                <span className='flex'><input type="radio" name="options" id="option8" className='mr-2 '/> <label id='radio-label' htmlFor="option8" className=''>$250 - 3days  </label> </span>
                <span className='flex'><input type="radio" name="options" id="option9" className='mr-2 '/> <label id='radio-label' htmlFor="option9" className=''>$450 - 7days  </label> </span>    
                <button className="buttonck rounded-full w-full my-2" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>


      
        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2  ">
            <div className=" flex flex-col ">
              <div className="flex justify-center p-2 rounded bg-black ">
                <NavLink to="." end className=' w-1/4 flex justify-center items-center   p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}>Bronze</NavLink>
                <NavLink to="silver" className=' w-1/4 flex justify-center items-center  p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}>Silver</NavLink>
                <NavLink to="gold" className=' w-1/4 flex justify-center items-center   p-3 text-sm' id='promote-plan' style={({isActive})=> isActive ? IsActive : null}>Gold</NavLink>
                <NavLink to="diamond" className=' w-1/4 flex justify-center items-center p-3 text-sm' style={({isActive})=> isActive ? IsActive : null}>Diamond</NavLink>
              </div>
              <div className="flex flex-col h-[250px]" >
                    <Outlet />
                   
               </div>
               <button className="buttonck rounded-full w-full bottom-0" onClick={()=> setShowMyModal(true)}>BOOK YOUR AD</button>
            </div>
        </div>

   
    </div>
    <MyModal visible={showMyModal} onClose={handleOnClose} />
    </div>


  )
}
