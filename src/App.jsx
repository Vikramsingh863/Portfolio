import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold bg-green-600 underline text-danger bg-primary">
      Hello world!
    </h1>
    </>
  )
}

export default App
