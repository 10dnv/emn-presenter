import React from 'react'
import Navbar  from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'

function Layout({ children }) {
  return (
    <div className='bg-black h-[100vh] w-[100%] flex flex-col'>
        <Navbar/>
        <div className='flex h-[100%]'>
            <Sidebar/>
            {/* <Content/> */}
            { children }
        </div>
    </div>
  )
}

export default Layout