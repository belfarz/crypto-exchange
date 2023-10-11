import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function MyModal({visible, onClose}) {

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
          <td> <input type="checkbox" value="130"/>$130</td>
          <td> <input type="checkbox" value="350"/>$350</td>
          <td> <input type="checkbox" value="$630"/>$630</td>
        </tr>
        <tr>
          <td>Rotate Banner</td>
          <td> <input type="checkbox" value="190"/>$190</td>
          <td> <input type="checkbox" value="510"/>$510</td>
          <td> <input type="checkbox" value="930"/>$930</td>
        </tr>
        <tr>
          <td>Wide Banner</td>
          <td> <input type="checkbox" value="300"/>$300</td>
          <td> <input type="checkbox" value="810"/>$810</td>
          <td> <input type="checkbox" value="1450"/>$1450</td>
        </tr>
        <tr>
          <td>popup Banner</td>
          <td> <input type="checkbox" value="880"/>$880</td>
          <td> <input type="checkbox" value="2500"/>$2500</td>
          <td> <input type="checkbox" value="5200"/>$5200</td>
          
        </tr>
      
      </table>
      <h3 >Subtotal:</h3>
      <p  id="total"></p>
      <br/>
    
      <div>
          <div>
              <h1 class="h1s">Special Package</h1>
              <p class="p1s">special package cannot be combined with special package</p>
              
              <table id="customerss">
             
                <tr>
                  <td>Bronze</td>
                  <td> <input type="checkbox" value="2260"/>$2260</td>
      
               
                </tr>
                <tr>
                  <td>Gold</td>
              <td> <input type="checkbox" value="5800"/>$5800</td>

              
                </tr>
                <tr>
                  <td>Silver</td>
                  <td> <input type="checkbox" value="32500"/>$3250</td>
   
            
                </tr>
                <tr>
                  <td>Diamond</td>
                  <td> <input type="checkbox" value="1130"/>$11300</td>
        
                  
                </tr>
              
              </table>
              <h3 >Subtotal:</h3>
              <p  id="totall"></p>
             
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