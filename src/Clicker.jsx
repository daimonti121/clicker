import { useState, useEffect } from 'react'
import './App.css'

function Clicker() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  useEffect(() => {console.log('click'); return () => console.log('goodbye'); }, [count])

  return (
    <div className='flex'>
      <input type="button" value='+' onClick={increment}/>
      <h4>{count}</h4>
      <input type="button" value='-' onClick={decrement}/>
    </div>
  )
}

export default Clicker;