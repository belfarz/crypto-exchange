import React,{useState} from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function MyModal({visible, onClose}) {

    const [totalPrice, setTotalPrice] = useState(0);

    const handleCheckboxChange = (e) => {
      const checkbox = e.target;
      const price = parseFloat(checkbox.value);
      if (checkbox.checked) {
        setTotalPrice((prevTotal) => prevTotal + price);
      } else {
        setTotalPrice((prevTotal) => prevTotal - price);
      }
    };

    const handleClose =(e)=>{
        if(e.target.id === "modal-container" || e.target.id === "close"){
        onClose()
    }
    }

    if(!visible){
        return null
    }
  return (
    <div 
        id="modal-container"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[99] overflow-y-scroll"
        onClick={handleClose}
    >
      <form id="co" className="w-full lg:w-2/3 p-4 ">
      <div className="flex justify-between">
        <div>
          <h1 class="h1n" >Normal Package</h1>
          <p class="p1n">Normal package cannot be combined with special package</p>
        </div>
        <AiOutlineClose className="text-white w-6 h-6" onClick={handleClose} id="close" />
      </div>
      
      <table id="customers">
        <tr>
          <th>Ads</th>
          <th>1 day</th>
          <th>3 days</th>
          <th>7 days</th>
        </tr>
        <tr>
          <td>Promoted Coin</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="150"/> $100</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="390"/> $250</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="$550"/> $450$</td>
        </tr>
        <tr>
          <td>Fixed Banner</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="200"/> $200</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="450"/> $450</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="890"/> $890</td>
        </tr>
        <tr>
          <td>Broadcast Banner</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="100"/> $100</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="250"/> $390</td>
          <td> <input onChange={handleCheckboxChange} type="checkbox" value="450"/> $550</td>
        </tr>
      
      
      </table>
      
      <br/>
    
      <div>
          <div>
              <h1 class="h1s">Special Package</h1>
              <p class="p1s">special package cannot be combined with special package</p>
              
              <table id="customerss">
             
                <tr>
                  <td>Bronze</td>
                  <td> <input onChange={handleCheckboxChange} type="checkbox" value="1500"/>$1500</td>
      
               
                </tr>
                <tr>
                  <td>Gold</td>
              <td> <input onChange={handleCheckboxChange} type="checkbox" value="4500"/>$4500</td>

              
                </tr>
                <tr>
                  <td>Silver</td>
                  <td> <input onChange={handleCheckboxChange} type="checkbox" value="2500"/>$2500</td>
   
            
                </tr>
                <tr>
                  <td>Diamond</td>
                  <td> <input onChange={handleCheckboxChange} type="checkbox" value="7900"/>$7900</td>
        
                  
                </tr>
              
              </table>
              <h3 className="mt-2">Subtotal:</h3>
              <p  id="total" className="text-white text-2xl">{totalPrice ? `$${totalPrice}` : ''}</p>
             
              </div>
      </div>
      <div class="container">
       
      <label class="str12"><strong>I would like to book my ads by:</strong></label><p></p>
        
          <select id="cars" className="mb-4">
            <option value="telegram@"><a href="https://t.me/KOJOCAllS" target="_blank" rel="noopener noreferrer">telegram@Aiden1A</a></option>
          </select><p></p>
       
         
          <div className="w-full bg-purple-800 py-2.5"><a href="https://t.me/Aiden1A" target="_blank" className="w-full" rel="noopener noreferrer">
            <span className=" py-2 w-full px-10">BOOK YOUR AD</span>
          </a></div>

        
        
      </div>
      </form>
    </div>
  );
}