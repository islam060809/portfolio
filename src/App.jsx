import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("hhh")

  return (
    <>
      <button onClick={() => setCount("yyy")}>
        count is {count}
      </button>
    </>
  )
}

export default App
