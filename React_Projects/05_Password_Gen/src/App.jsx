import { useCallback, useEffect, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import './App.css'

function App() {
  const [showPass , setPass] = useState(false)
  const [password, setPassword] = useState('123');
  const [length, setLength] = useState(3);
  const [num_Allowed, set_Num_Allowed] = useState(false);
  const [char_Allowed, set_Char_Allowed] = useState(false);

  const Pass_Gen = useCallback(() => {
    let pass = "" ;
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbm" ;

    if(num_Allowed){
      str += "1234567890" ;
    }
    if(char_Allowed){
      str += "!@#$%^&*()_+~" ;
    } 

   for(let i=0 ; i <= length ; i++) {
    let index = Math.floor((Math.random() * str.length) + 1) ;
    console.log(index) ;

    let char = str.charAt(index) ;
    pass += char ;
   }
   setPassword(pass) ;


  } , [length , num_Allowed , char_Allowed ,setPassword]) 

  useEffect(() => {
    Pass_Gen() ;
  } , [length , num_Allowed , char_Allowed])
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }).catch((err) => {
      alert("Failed to copy password: " + err);
    });
  }

  return (
  <div className='w-full flex justify-center h-screen bg-slate-900 p-4'>
    <div className='w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto h-[300px] bg-slate-400 rounded-xl flex flex-col justify-center'>
      <div className='flex justify-center items-center w-full sm:w-10/12 mx-auto py-2 px-2 justify-evenly bg-amber-200 rounded-lg'>
        <input 
          type= {showPass ? 'text' : 'password'} 
          className='rounded-lg py-1 px-3 w-7/12'
          value={password}
         />
         <button 
           className="px-2"
           onClick={() => setPass(() => !showPass)}
         >
           {showPass ? <FaRegEye /> : <FaEyeSlash />}
         </button>
         
         <button className="px-2" onClick={copyToClipboard}>COPY</button>
      </div>

      <div className='flex flex-col justify-center w-full sm:w-10/12 mx-auto h-auto py-4 mt-3 bg-amber-200 rounded-lg'>
        <div className='flex flex-col sm:flex-row justify-evenly items-center'>
          <input 
            type="range" 
            max={15}
            min={3}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-9/12 sm:w-6/12"
          />
          <p className="mt-2 sm:mt-0">Length: {length}</p>
        </div>
        <div className='flex flex-row justify-center items-center mt-4'>
          <input 
            type="checkbox"
            checked={num_Allowed ? true : false}
            onChange={() => set_Num_Allowed(() => !num_Allowed)}
          />
          <p className="ml-2">Numbers</p>
        </div>
        <div className='flex flex-row justify-center items-center mt-4'>
          <input 
            type="checkbox"
            checked={char_Allowed ? true : false} 
            onChange={() => set_Char_Allowed(() => !char_Allowed)}
          />
          <p className="ml-2">Chars</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
