import React,{useState} from 'react'
import { IoCopyOutline } from 'react-icons/io5';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { BsCheck2All } from 'react-icons/bs';

export default function Copy({text}) {

    
      // Declare a state variable called "variable" and a function to update it, "setVariable"
      const [variable, setVariable] = useState(false);
    
      // Function to toggle the variable to true
      const toggleVariable = () => {
        setVariable(true);
    
        // Wait for 5 seconds and then set the variable back to false
        setTimeout(() => {
          setVariable(false);
        }, 1000); // 5000 milliseconds = 5 seconds
      };

  return (
    <CopyToClipboard text={text} onCopy={()=>toggleVariable()}>
        {
        variable ? <BsCheck2All className='text-green-500'/> : <IoCopyOutline /> 
        }
               
    </CopyToClipboard>
  )
}
