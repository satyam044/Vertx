import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full h-15 overflow-hidden sticky top-0 bg-black border-r-2 border-b-2 border-[#1D1D1D] flex items-center pl-4 justify-between z-50'>
            <p>Profile</p>
            <div className='flex'>
                <p className='h-full cursor-pointer hover:bg-[#1D1D1D] py-4 px-6 border-l-2 border-[#1D1D1D]'>Activity</p>
                <p className='h-full cursor-pointer hover:bg-[#1D1D1D] py-4 px-6 border-l-2 border-[#1D1D1D]'>Log out</p>
            </div>
        </nav>
    )
}

export default Navbar