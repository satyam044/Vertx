import React, { useState } from 'react'
import Logo from '../assets/vertxlogo.png'

const Profiles = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenu = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <>
            <div className='profiles w-[25%] h-[100vh] sticky top-0 bg-black border-r-2 border-[#1D1D1D] flex flex-col'>
                <div className='h-15 flex items-center justify-center px-2 border-b-2 border-[#1D1D1D]'>
                    <img src={Logo} alt="" className='cursor-pointer w-10 h-10 object-cover bg-white rounded-full p-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='h-full w-full py-3 flex items-center justify-center border-b-2 border-[#1D1D1D] bg-[#1D1D1D]'><div className='cursor-pointer w-10 h-10 bg-white rounded-full p-2 relative'><div className='h-3 w-3 border-2 bg-green-400 rounded-full absolute bottom-0 right-0'></div></div></div>
                    <div className='h-full w-full py-3 flex items-center justify-center border-b-2 border-[#1D1D1D] hover:bg-[#1D1D1D]'><div className='cursor-pointer w-10 h-10 bg-white rounded-full p-2 relative'><div className='h-3 w-3 border-2 bg-red-400 rounded-full absolute bottom-0 right-0'></div></div></div>
                    <div className='h-full w-full py-3 flex items-center justify-center border-b-2 border-[#1D1D1D] hover:bg-[#1D1D1D]'><div className='cursor-pointer w-10 h-10 bg-white rounded-full p-2 relative'><div className='h-3 w-3 border-2 bg-green-400 rounded-full absolute bottom-0 right-0'></div></div></div>
                </div>
            </div>
            <div className='resNavbar hidden w-full h-full px-4 bg-black justify-between items-center sticky top-0'>
                <div className='cursor-pointer w-6 h-6 bg-white rounded-full p-2 relative'></div>
                <img src={Logo} alt="" className='cursor-pointer w-10 h-10 object-contain p-2' />
                <svg onClick={handleMenu} width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20C2.3125 20 1.72396 19.7552 1.23438 19.2656C0.744792 18.776 0.5 18.1875 0.5 17.5C0.5 16.8125 0.744792 16.224 1.23438 15.7344C1.72396 15.2448 2.3125 15 3 15C3.6875 15 4.27604 15.2448 4.76562 15.7344C5.25521 16.224 5.5 16.8125 5.5 17.5C5.5 18.1875 5.25521 18.776 4.76562 19.2656C4.27604 19.7552 3.6875 20 3 20ZM3 12.5C2.3125 12.5 1.72396 12.2552 1.23438 11.7656C0.744792 11.276 0.5 10.6875 0.5 10C0.5 9.3125 0.744792 8.72396 1.23438 8.23438C1.72396 7.74479 2.3125 7.5 3 7.5C3.6875 7.5 4.27604 7.74479 4.76562 8.23438C5.25521 8.72396 5.5 9.3125 5.5 10C5.5 10.6875 5.25521 11.276 4.76562 11.7656C4.27604 12.2552 3.6875 12.5 3 12.5ZM3 5C2.3125 5 1.72396 4.75521 1.23438 4.26562C0.744792 3.77604 0.5 3.1875 0.5 2.5C0.5 1.8125 0.744792 1.22396 1.23438 0.734375C1.72396 0.244792 2.3125 0 3 0C3.6875 0 4.27604 0.244792 4.76562 0.734375C5.25521 1.22396 5.5 1.8125 5.5 2.5C5.5 3.1875 5.25521 3.77604 4.76562 4.26562C4.27604 4.75521 3.6875 5 3 5Z" fill="white" />
                </svg>
                <button className={`${menuClicked ? "block" : "hidden"} absolute px-2 right-2 top-15 rounded-[4px] text-black bg-gray-200 hover:bg-red-400`}>Logout</button>
            </div>
        </>
    )
}

export default Profiles