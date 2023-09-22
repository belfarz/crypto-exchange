import React from 'react'
import testImg from "../image/test.png"

export default function Promote() {
  return (
    <div className='mt-24'>
    <h1 className="ppp">Promote Packages Prices</h1>
    <div className="flex flex-wrap justify-center">
        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2">
                <div className=' flex justify-center mb-4 '><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span><input type="radio" name="options" id="option1"/>$130 - 1 DAY </span>
                <span><input type="radio" name="options" id="option2"/> $630 - 7 DAYS  </span>
                <span><input type="radio" name="options" id="option3"/> $630 - 7 DAYS </span>
                <button className="buttonck w-full" onclick="redirectToTelegram()">BOOK YOUR AD</button>
            </div>
        </div>

        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span><input type="radio" name="options" id="option7"/>$130 - 1 DAY </span>
                <span><input type="radio" name="options" id="option8"/> $630 - 7 DAYS</span>
                <span><input type="radio" name="options" id="option9"/> $630 - 7 DAYS  </span>
                <button className="buttonck w-full" onclick="redirectToTelegram2()">BOOK YOUR AD</button>
            </div>
        </div>

        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span><input type="radio" name="options" id="option10"/>$130 - 1 DAY </span>
                <span><input type="radio" name="options" id="option11"/> $630 - 7 DAYS  </span>
                <span><input type="radio" name="options" id="option12"/> $630 - 7 DAYS </span>
                <button className="buttonck w-full" onclick="redirectToTelegram4()">BOOK YOUR AD</button>
            </div>
        </div>

        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span><input type="radio" name="options" id="option13"/>$130 - 1 DAY </span>
                <span><input type="radio" name="options" id="option14"/> $630 - 7 DAYS</span>
                <span><input type="radio" name="options" id="option15"/> $630 - 7 DAYS</span>
                <button className="buttonck w-full" onclick="redirectToTelegram3()">BOOK YOUR AD</button>
            </div>
        </div>

        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span><input type="radio" name="options" id="option16"/>$130 - 1 DAY</span>
                <span><input type="radio" name="options" id="option17"/> $630 - 7 DAYS</span>
                <span><input type="radio" name="options" id="option18"/> $630 - 7 DAYS </span>
                <button className="buttonck w-full" onclick="redirectToTelegram2()">BOOK YOUR AD</button>
            </div>
        </div>

        <div className="col-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2 ">
            <div className=" flex flex-col p-2 ">
                <div className=' flex justify-center mb-4'><img src={testImg} alt="" className="w-full max-w-full h-auto" /></div>
                <span><input type="radio" name="options" id="option4"/>$130 - 1 DAY</span>
                <span><input type="radio" name="options" id="option5"/> $630 - 7 DAYS</span>
                <span><input type="radio" name="options" id="option6"/> $630 - 7 DAYS </span>
                <button className="buttonck w-full" onclick="redirectToTelegram1()">BOOK YOUR AD</button>
            </div>
        </div>
    </div>
    </div>


  )
}
