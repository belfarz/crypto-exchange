import React from "react";

export default function MyModal({visible, onClose}) {

    const handleClose =(e)=>{
        if(e.target.id === "modal-container"){
        onClose()
    }
    }

    if(!visible){
        return null
    }
  return (
    <div 
        id="modal-container"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[99]"
        onClick={handleClose}
    >
      <form id="co">
      <h1 class="h1n" >Normal Package</h1>
      <p class="p1n">Normal package cannot be combined with special package</p>
      
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
        
          <select id="cars">
            <option value="telegram@">telegram@koojo</option>
          </select><p></p>
       
          <strong class="str12">Username</strong> <p></p>
    
          <input type="Username" placeholder="" name="Username"/><p></p>
   
          <strong class="str12">Contract Address</strong> <p></p>
    
    <input type="ContractAddress" placeholder="" name="ContractAddress"/><p></p>
    <strong class="str12">Name</strong> <p></p>
    
    <input type="Name" placeholder="" name="Name"/><p></p>


  
          <button className="buttonck w-1/2 rounded-full" >BOOK YOUR AD</button>
   
        
        
        
      </div>
      </form>
    </div>
  );
}