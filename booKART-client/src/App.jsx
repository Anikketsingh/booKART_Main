import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from "./home/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return(<>
    <Navbar></Navbar>
    <div className='min-h-screen'>
    <Outlet/>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
