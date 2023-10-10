import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './api'


export default function Login({visible, onClose,onFormSwitch}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const data = await loginUser({email,password})
      console.log(data)
      navigate("/promote")
  } catch (error) {
      return error.message
  }
  };

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
  <div className=" p-5 rounded-lg w-[450px] aspect-w-1 aspect-h-1 bg-purple-800" id='login-container'>
    <h1 className="font-semibold text-center text-2xl text-white my-4">
      Log In
    </h1>
    <div className="flex flex-col justify-start items-start">
        <label htmlFor="" className='text-white text-sm my-2'>Email Address <span className="text-red-500">*</span></label>
      <input
        
        type="text"
        className="border  p-2 rounded-full mb-3 w-full pl-3"
        required
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="" className='text-white text-sm my-2'>Password <span className="text-red-500">*</span></label>
      <input
        
        type="password"
        className="border  p-2 rounded-full mb-6 w-full pl-3 "
        required
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="text-center ">
      <button className="px-5 py-2 rounded-full bg-yellow-400 mb-6 w-1/4 text-white " onClick={handleLogin}>
        Sign in
      </button>
    </div>
    <div className='flex flex-col pt-2' id='login-bottom'>
        <span className='text-white my-2' onClick={()=>onFormSwitch("register")}>New to Kojo Calls?</span>
        <span className='text-white my-2'>Forget Password</span>
    </div>
  </div>
</div>
  )
}
