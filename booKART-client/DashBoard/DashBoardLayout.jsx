import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from './Slidebar';


function DashBoardLayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <Slidebar></Slidebar>
        <Outlet/>
        </div>
  )
}

export default DashBoardLayout