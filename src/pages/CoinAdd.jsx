import React from 'react'
import { Form } from 'react-router-dom'

export default function CoinAdd() {
  return (
    <div>
        <Form className=' pb-2 pl-2 lg:flex w-full'>
           <div className='lg:w-1/2'>
           <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Contract Details</h1>
            <div className='flex mb-5'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="fruit" className="block mb-2 text-gray-400">Chain</label>
                    <select id="chain" name="fruit" className="w-full p-2 border border-gray-300 rounded text-gray-400">
                    <option value="apple" className='text-gray-400 p-2 bg-white'>Apple</option>
                    <option value="banana" className='text-gray-400 p-2 bg-white'>Banana</option>
                    <option value="cherry" className='text-gray-400 p-2 bg-white'>Cherry</option>
                    <option value="orange" className='text-gray-400 p-2 bg-white'>Orange</option>
                    </select>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Contact Address</label>
                    <input type="text" name="address" id="address" className="w-full p-2 border border-gray-300 rounded text-gray-400" />
                </div>
            </div>
            <span className='p-2 pl-5 pr-5 bg-orange-400 rounded-md text-white font-bold text-[14px]'>Add Chain</span>

            <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Coin Details</h1>
            <div className='flex mb-5'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Name</label>
                    <input type="text" name="address" id="address" className="w-full p-2 border border-gray-300 rounded text-gray-400" />
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Symbol</label>
                    <input type="text" name="address" id="address" className="w-full p-2 border border-gray-300 rounded text-gray-400" />
                </div>
            </div>

            <div className='flex mb-5'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Launch Date</label>
                    <input type="date" name="address" id="address" className="w-full p-2 border border-gray-300 rounded text-gray-400" />
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Launch Time</label>
                    <input type="time" name="address" id="address" className="w-full p-2 border border-gray-300 rounded text-gray-400" />
                </div>
            </div>
            <label htmlFor="address" className="block mb-2 text-gray-400">Coin Overview</label>
            <textarea type="time" name="address" id="address" className="w-full p-2 border border-gray-300 rounded text-gray-400" ></textarea>
           </div>

           <div className='m-3 w-1/2'>
           <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Contract Details</h1>
            <div id="imageContainer" className='p-4  w-[250px] h-[100px] cursor-pointer flex-col align' onClick={()=> document.querySelector("#imageUpload").click()}>
                <span className="block mb-2 text-gray-400 text-[20px]">Click To Upload Logo</span>
                <span className="block mb-2 text-gray-200 text-[12px]">File should not exceed 1mb</span>
                <input type="file" id="imageUpload" name="imageUpload" accept="image/*" className='hidden'/>
            </div>
            <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Links</h1>  
            <div className='flex mb-5'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="fruit" className="block mb-2 text-gray-400">Chain</label>
                    <select id="chain" name="fruit" className="w-full p-2 border border-gray-300 rounded text-gray-400">
                    <option value="apple" className='text-gray-400 p-2 bg-white'>Apple</option>
                    <option value="banana" className='text-gray-400 p-2 bg-white'>Banana</option>
                    <option value="cherry" className='text-gray-400 p-2 bg-white'>Cherry</option>
                    <option value="orange" className='text-gray-400 p-2 bg-white'>Orange</option>
                    </select>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Contact Address</label>
                    <input type="text" name="address" id="address" className="w-full p-2 border border-gray-300 rounded text-gray-400" />
                </div>
            </div>
            <span className='p-2 pl-5 pr-5 bg-orange-400 rounded-md text-white font-bold text-[14px]'>Add Chain</span>
           </div>
         </Form>
    </div>
  )
}
