import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listitem from './components/Listitem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Listitem/>
    </>
  )
}

export default App
