import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 10 ; counter Updates but not render-on UI.that is why we use useState ;
  
  const [counter, setCounter] = useState(1) ;

  function inc() {
    let val = parseInt(document.getElementById('change_by').value) ;
    console.log(val);
    setCounter(counter + val) ;
    console.log('Increment'+ counter)
  }

  function dec() {
    let val = parseInt(document.getElementById('change_by').value) ;
    setCounter(counter - val) ;
    console.log('Decrement' + counter)
  }


  return (
    <div className="main">
      <h1> counter is :  {counter}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      
      <div>
          <label htmlFor="change_by">Change BY</label>
          <input type="number" id='change_by'/>
      </div>
    </div>
  )
}

export default App
