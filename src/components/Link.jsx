import React from 'react'
import {TiLink} from "react-icons/ti"
import { useState } from 'react';
import { BiLogoTelegram } from 'react-icons/bi';
import { RiTwitterXFill } from 'react-icons/ri';
import {BsGlobe2} from "react-icons/bs"



export default function Link({ getLinks, details}) {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div className='relative'>
           <button className=" px-4 rounded" id="menu-btn" onClick={()=>setIsOpen((prev)=>!prev)}><TiLink size={ details ? 40 : 25}/></button>
              
              {isOpen && (
                <ul className="z-[999] flex flex-col justify-center items-center rounded mt-1 p-2 text-sm top-10 absolute" id="dropdown">
                    { getLinks.chat && <a href={getLinks.chat[0]} className="px-2 py-1 hover:bg-gray-500 rounded flex justify-start"><span className='flex justify-center items-center'><BiLogoTelegram size={20} className='mr-2'/>telegram</span></a>}
                    {getLinks.twitter && <a href={getLinks.twitter[0]} className="px-2 py-1 hover:bg-gray-500 rounded flex justify-start"><span className='flex justify-center items-center pr-2'><RiTwitterXFill size={20} className='mr-2'/>twitter</span></a>}
                    {getLinks.website && <a href={getLinks.website[0]} className="px-2 py-1 hover:bg-gray-500 rounded flex justify-start"><span className='flex justify-center items-center'><BsGlobe2 size={20} className='mr-2'/>website</span></a>}
                </ul>
            
                )}
    </div>
  )
}
