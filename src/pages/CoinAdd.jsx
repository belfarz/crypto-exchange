import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { AiFillFileImage } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import axios from 'axios'

export async function action({request}){
    const formData = await request.formData()
   
    const coinId = formData.get("id")
    const address = formData.get("address")

    if (!coinId || !address) {
        throw new Error("Invalid input. Please check your data.");
      }

    // Create an object with the coinId and address
  const dataToSend = {
    coinId,
    address
  };

  console.log(dataToSend);

  // Make a POST request to your API endpoint with the data
  try {
    console.log(dataToSend);
    const response = await axios.post('https://kojocalls.onrender.com/api/customers', {coinId, address},{headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }});
    console.log('POST request successful:', response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
        // Handle 400 Bad Request errors
        console.error('Bad Request:', error.response.error);
        throw new Error('Invalid input. Please check your data.'); // Throw a custom error message
      } else {
        // Handle other errors
        console.error('POST request failed:', error);
        throw error;
      }
  }

    return null
}

export default function CoinAdd() {

    const [image ,setImage] = useState(null)
    const [fileName ,setFileName] = useState(null)
    const [address , setAddress] = useState('')
    // const promoted = useActionData()

   

    function handleChange(e) {
        setAddress(e.target.value)
    }

    async function getCoin() {
        const url = `https://api.coingecko.com/api/v3/coins/belfarz/contract/${address}`
        
        axios.get(url).then((response)=>{
            document.querySelector("#id").value = response.data.id 
            document.querySelector("#name").value = response.data.name 
            document.querySelector("#symbol").value = response.data.symbol 
            document.querySelector("#description").value = response.data.description.en
            console.log( response.data.description.en)
            setImage(response.data.image.small)


            const secondApiUrl = `https://api.coingecko.com/api/v3/coins/${response.data.id}?localization=false&tickers=false&market_data=false&community_data=true`;

            // Make the second API call
            axios.get(secondApiUrl)
              .then((secondApiResponse) => {
                // You can now use data from the second API response
                document.querySelector("#launch_date").value = secondApiResponse.data.genesis_date
                console.log(secondApiResponse.data.genesis_date)
                
              })
              .catch((secondApiError) => {
                console.error(secondApiError);
              });
           
        }).catch((Error)=>{
            console.log(Error)
        })
        
    }

    function showPreview({target:{files}}) {
        files[0] && setFileName(files[0].name)
        if (files) {
            setImage(URL.createObjectURL(files[0]))
        }
    }

    function deleteFile() {
        setFileName("No Selected File")
        setImage(null)
    }

  return (
    <div>
        <Form 
            method="post" 
            className=' pb-2 pl-2 lg:flex w-full pr-2'
        >
            <input type="text" name='id' id='id' className='hidden' />
           <div className='lg:w-1/2'>
           <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Contract Details</h1>
            <div className='flex mb-5'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="fruit" className="block mb-2 text-gray-400">Chain</label>
                    <select id="chain" name="fruit" className="w-full p-2 border rounded-full  text-gray-400">
                    <option value="BSC" className='text-gray-400 p-2 '>BTC</option>
                    <option value="ETH" className='text-gray-400 p-2 '>ETH</option>
                    <option value="cherry" className='text-gray-400 p-2 '>SOL</option>
                    <option value="orange" className='text-gray-400 p-2 '>BNB</option>
                    </select>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Contact Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        className="w-full p-2 border rounded-full  text-gray-400" 
                        onBlur={getCoin} 
                        onChange={handleChange}
                    />
                </div>
            </div>
           

            <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Coin Details</h1>
            <div className='flex mb-5'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Name <span className="text-red-500">*</span></label>
                    <input type="text" name="address" id="name" className="w-full p-2 border rounded-full  text-gray-400" required/>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Symbol <span className="text-red-500">*</span></label>
                    <input type="text" name="address" id="symbol" className="w-full p-2 border rounded-full  text-gray-400" required/>
                </div>
            </div>

            <div className='flex mb-5'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Launch Date <span className="text-red-500">*</span></label>
                    <input type="date" name="address" id="launch_date" className="w-full p-2 border rounded-full  text-gray-400" required/>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Launch Time <span className="text-red-500">*</span></label>
                    <input type="time" name="address" id="launch_time" className="w-full p-2 border rounded-full  text-gray-400" required/>
                </div>
            </div>
            <label htmlFor="address" className="block mb-2 text-gray-400">Coin Overview <span className="text-red-500">*</span></label>
            <textarea type="time" name="address" id="description" className="w-full p-2 border rounded-full  text-gray-400"required ></textarea>
           </div>

           <div className='m-3 lg:w-1/2 w-full'>
           <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Contract Details</h1>
            <div id="imageContainer" className='p-4  cursor-pointer flex-col items-center justify-center  max-w-[300px] ' onClick={()=> document.querySelector("#imageUpload").click()}>
            {image ? (
            <img src={image} alt="" width={100} height={80} className='m-auto mb-2' />
            ) : (
            <>
                <span className="block mb-2 text-gray-400 text-[20px]">Click To Upload Logo</span>
                <span className="block mb-2 text-gray-200 text-[12px]">File should not exceed 1MB</span>
            </>
            )}
                        
            
                <input type="file" id="imageUpload" name="imageUpload" accept="image/*" className='hidden' onChange={showPreview}/>
            </div>
            <div className="flex w-full mt-2">
                <AiFillFileImage className='text-white' />
                <span className='flex'>
                    <span className='text-[8px] lg:text-[12px] text-gray-300 '>{fileName}</span>
                    <MdDelete onClick={deleteFile} className='text-white'  />
                </span>
            </div>
            <h1 className="text-[25px] text-gray-300 mt-8 mb-8">Links</h1>  
            <div className='flex mb-5 w-full'>
                <div className='w-1/2 pr-4'>
                    <label htmlFor="fruit" className="block mb-2 text-gray-400">Chain</label>
                    <select id="chain" name="fruit" className="w-full p-2 border rounded-full  text-gray-400">
                    <option value="apple" className='text-gray-400 p-2 bg-white'>Twitter</option>
                    <option value="banana" className='text-gray-400 p-2 bg-white'>Instagram</option>
                    <option value="cherry" className='text-gray-400 p-2 bg-white'>Telegram</option>
                    <option value="orange" className='text-gray-400 p-2 bg-white'>Discord</option>
                    </select>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="address" className="block mb-2 text-gray-400">Link</label>
                    <input type="text" name="address" id="link" className="w-full p-2 border rounded-full  text-gray-400" />
                </div>
            </div>
            
           </div>

           <button type="submit" className='p-5 rounded-md bg-purple-800 text-white' >Submit</button>
         </Form>
    </div>
  )
}
