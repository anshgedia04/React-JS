import { useState } from 'react'
import './App.css'

function App() {
   const [color , setColor] = useState('olive')

  return (
    <div className='w-full h-screen flex justify-center'
      style={{backgroundColor: color}}>
        <div className='w-auto  h-auto mx-auto p-3 fixed bottom-11 flex bg-slate-400 rounded-md gap-3'>
          <button onClick={() => setColor('red')} className='bg-red-500 font-serif font-semibold py-2 px-4 rounded-md'>red</button>   
          <button onClick={() => setColor('blue')} className='bg-blue-500 font-serif font-semibold py-2 px-4 rounded-md'>blue</button>
          <button onClick={() => setColor('green')} className='bg-green-500 font-serif font-semibold py-2 px-4 rounded-md'>green</button>
          <button onClick={() => setColor('gray')} className='bg-gray-500  font-serif font-semibold py-2 px-4 rounded-md'>gray</button> 
          <button onClick={() => setColor('pink')} className='bg-pink-500  font-serif font-semibold py-2 px-4 rounded-md'>pink</button>  
          <button onClick={() => setColor('yellow')} className='bg-yellow-500 font-serif font-semibold py-2 px-4 rounded-md'>yellow</button>

        </div>

    </div>
  )
}

export default App
