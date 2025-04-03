import React from 'react'
import Navbar from './Components/Navbar'
import Profiles from './Components/Profiles'
import Sidebar from './Components/Sidebar'
import Overview from './Components/Overview'

const App = () => {
  return (
    <div className='w-full flex'>
      <div className='homeL w-[15rem] flex'>
        <Profiles />
        <Sidebar />
      </div>
      <div className='homeR w-[80%]'>
        <Navbar/>
        <Overview/>
      </div>
    </div>
  )
}

export default App