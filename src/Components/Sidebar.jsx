import React from 'react'
import { MdOutlineDashboard,MdOutlineHub } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaGlobeAfrica,FaRegBell } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className='sidebar w-[75%] h-[100vh] sticky top-0 bg-black border-r-2 border-[#1D1D1D] flex flex-col'>
        <h2 className='font-bold text-[1.8vw] h-15 pl-3 flex items-center border-b-2 border-[#1D1D1D]'>Vertxlabs, inc</h2>
        <ul className='flex flex-col pt-4 pl-4 gap-4 text-[#555555]'>
          <li className='cursor-pointer hover:text-white transition-all'>Dashboard</li>
          <li className='cursor-pointer hover:text-white transition-all'>Analytics</li>
          <li className='cursor-pointer hover:text-white transition-all'>Connect</li>
          <li className='cursor-pointer hover:text-white transition-all'>Dealroom</li>
          <li className='cursor-pointer hover:text-white transition-all'>Profile</li>
          <li className='cursor-pointer hover:text-white transition-all'>Settings</li>
        </ul>
      </div>
      <div className='resSidebar hidden w-full h-12 text-6xl px-6 fixed bottom-0 justify-between bg-black'>
        <div className='flex flex-col items-center '>
          <MdOutlineDashboard/>
          <p className='text-[.6rem]'>Dashboard</p>
        </div>
        <div className='flex flex-col items-center'>
          <GoGraph/>
          <p className='text-[.6rem]'>Analytics</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaGlobeAfrica/>
          <p className='text-[.6rem]'>Connect</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaRegBell/>
          <p className='text-[.6rem]'>Nottification</p>
        </div>
        <div className='flex flex-col items-center'>
          <MdOutlineHub/>
          <p className='text-[.6rem]'>Dealroom</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar