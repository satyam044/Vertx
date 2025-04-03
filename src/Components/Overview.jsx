import React from 'react'
import Logo from '../assets/vertxlogo.png'
import Verified from '../assets/verified.png'
import Linkedin from '../assets/LinkedIn_logo_initials.png'
import XLogo from '../assets/xlogo.png'
import Gmail from '../assets/gmaillogo.png'

const Overview = () => {
    return (
        <div className='overview pb-20'>
            <header className='h-10 sticky top-15 bg-black border-b-2 border-[#1D1D1D] w-full flex justify-between items-center'>
                <ul className='flex items-center justify-center'>
                    <li className='cursor-pointer hover:bg-[#1D1D1D] h-full py-2 px-6 border-[#1D1D1D]'>Overview</li>
                    <li className='cursor-pointer hover:bg-[#1D1D1D] h-full py-2 px-6 border-l-2 border-[#1D1D1D]'>Portfolio</li>
                    <li className='cursor-pointer hover:bg-[#1D1D1D] h-full py-2 px-6 border-l-2 border-[#1D1D1D]'>Experience</li>
                    <li className='cursor-pointer hover:bg-[#1D1D1D] h-full py-2 px-6 border-x-2 border-[#1D1D1D]'>Media</li>
                </ul>
                <p className='cursor-pointer hover:bg-[#1D1D1D] h-full flex items-center justify-center px-8 border-x-2 border-[#1D1D1D]'>More</p>
            </header>
            <div className='overviewCont w-full p-4'>
                <h2 className='w-[90%] m-auto text-4xl font-bold'>Overview</h2>
                <div className='overviewTCont w-[90%] flex items-center p-8 border-2 rounded-[10px] border-[#1D1D1D] mt-2 mx-auto bg-black'>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 40C34.5 40 29.7917 38.0417 25.875 34.125C21.9583 30.2083 20 25.5 20 20C20 14.5 21.9583 9.79167 25.875 5.875C29.7917 1.95833 34.5 0 40 0C45.5 0 50.2083 1.95833 54.125 5.875C58.0417 9.79167 60 14.5 60 20C60 25.5 58.0417 30.2083 54.125 34.125C50.2083 38.0417 45.5 40 40 40ZM0 80V66C0 63.1667 0.729167 60.5625 2.1875 58.1875C3.64583 55.8125 5.58333 54 8 52.75C13.1667 50.1667 18.4167 48.2292 23.75 46.9375C29.0833 45.6458 34.5 45 40 45C45.5 45 50.9167 45.6458 56.25 46.9375C61.5833 48.2292 66.8333 50.1667 72 52.75C74.4167 54 76.3542 55.8125 77.8125 58.1875C79.2708 60.5625 80 63.1667 80 66V80H0Z" fill="white" />
                    </svg>
                    <div className='w-[15rem] ml-8'>
                        <h4 className='w-full text-[3vw] font-bold flex items-center justify-between'>Mr.ABC <img className='w-6 h-6 object-cover' src={Verified} alt="" /></h4>
                        <p className='flex text-[1.4vw] items-center gap-2'>Co-Founder & CEO @Vertx <img className='w-4 h-4 bg-white p-0.5 object-cover' src={Logo} alt="" /></p>
                        <p className='w-fit mt-2 px-2 text-[0.5rem] bg-white text-black'>Entrepreneur</p>
                        <div className='overviewIcons mt-3 flex gap-2'>
                            <img className='w-8 h-8 object-cover' src={Linkedin} alt="" />
                            <img className='w-8 h-8 object-cover invert' src={XLogo} alt="" />
                            <img className='w-8 h-8 object-cover' src={Gmail} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='overviewB w-[90%] p-4 mx-auto flex justify-between gap-2'>
                <div className='overviewBCont w-[50%] p-6 rounded-[10px] bg-black border-2 border-[#1D1D1D]'>
                    <h4 className='px-2 font-bold'>Founded Companies</h4>
                    <h2 className='my-2 px-2 text-5xl font-bold'>02</h2>
                    <div className='mt-2 p-2 rounded-[10px] cursor-pointer hover:bg-[#1D1D1D] flex items-center justify-between'>
                        <div className='flex'>
                            <img className='w-8 h-8 bg-white rounded-[4px]' src={Logo} alt="" />
                            <div className='pl-3'>
                                <h6 className='flex flex-wrap items-center gap-3 text-[1.4vw] font-bold'>Vertx <span className='px-2 bg-green-400 text-black text-[0.8vw]'>CEO</span></h6>
                                <p className='text-[0.8vw]'>Founded in 2026 in <span className='font-extrabold'>Fintech.</span></p>
                            </div>
                        </div>
                        <p className='text-[0.8vw]'>View Profile</p>
                    </div>
                    <div className='mt-2 p-2 rounded-[10px] cursor-pointer hover:bg-[#1D1D1D] flex items-center justify-between'>
                        <div className='flex'>
                            <div className='w-8 h-8 bg-white rounded-[4px]'></div>
                            <div className='pl-3'>
                                <h6 className='flex flex-wrap items-center gap-x-3 text-[1.4vw] font-bold'>Company <span className='px-2 bg-blue-300 text-black text-[0.8vw]'>PROPRIETOR</span></h6>
                                <p className='text-[0.8vw]'>Details/Information</p>
                                <p className='text-[0.8vw]'>Like acquired /exit/m&a</p>
                            </div>
                        </div>
                        <p className='text-[0.8vw] text-nowrap'>View Profile</p>
                    </div>
                </div>
                <div className='overviewBCont w-[50%] p-6 rounded-[10px] bg-black border-2 border-[#1D1D1D]'>
                    <h4 className='px-2 font-bold'>Experience</h4>
                    <h2 className='my-2 px-2 text-5xl font-bold'>03</h2>
                    <div className='mt-4 p-2 rounded-[10px] cursor-pointer hover:bg-[#1D1D1D] flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-8 h-8 bg-white rounded-[4px]'></div>
                            <h6 className='text-[1.4vw]'>Company 1</h6>
                        </div>
                        <p className='text-[0.8vw]'>View Profile</p>
                    </div>
                    <div className='mt-4 p-2 rounded-[10px] cursor-pointer hover:bg-[#1D1D1D] flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-8 h-8 bg-white rounded-[4px]'></div>
                            <h6 className='text-[1.4vw]'>Company 2</h6>
                        </div>
                        <p className='text-[0.8vw]'>View Profile</p>
                    </div>
                    <div className='mt-4 p-2 rounded-[10px] cursor-pointer hover:bg-[#1D1D1D] flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-8 h-8 bg-white rounded-[4px]'></div>
                            <h6 className='text-[1.4vw]'>Company 3</h6>
                        </div>
                        <p className='text-[0.8vw]'>View Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview