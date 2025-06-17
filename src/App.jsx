import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className='flex'>
      <input type="button" value='+' onClick={increment}/>
      <h4>{count}</h4>
      <input type="button" value='-' onClick={decrement}/>
    </div>
  )
}

export default App
