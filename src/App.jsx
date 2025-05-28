import { useState } from 'react'
import Authentication from './components/authentication'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Authentication />
    </>
  )
}

export default App
