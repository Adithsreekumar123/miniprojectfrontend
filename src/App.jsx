import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './component/search'
import Navbar from './component/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <><Search /><Navbar /></>
    
  )
}

export default App
