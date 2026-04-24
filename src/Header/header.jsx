import React, {useState} from 'react'
import { MdOutlineHome } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import IMG from "../assets/img.jpg"
import { VscThreeBars } from "react-icons/vsc";
import { HiOutlineXMark } from "react-icons/hi2";
import { GoStack } from "react-icons/go";
import { FaCogs } from "react-icons/fa";





const Header = () => {
  const [open,setOpen]=useState(false)
  return (<header className='sticky top-0 z-50 scroll-smooth'>
    <div className=' z-50 min-w-full flex items-center justify-between p-4 bg-black/80 text-gray-300 text-sm font-semibold'>
      <div className='rounded-2xl p-1 bg-gray-900 hover:bg-[#01332d]'> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=awelsuda278@gmail.com" target="_blank" className="flex items-center gap-2"><img className='w-8 h-8 rounded-4xl' src={IMG} alt="my photo" /><span className='text-xl font-semibold font-serif'>AS<span className='text-emerald-500 text-xl'>.</span></span> </a></div>

    <div className='hidden md:flex gap-4 lg:w-[70%] mr-2 lg:gap-8 xl:gap-16'>
      <div className='flex items-center space-x-1 px-2 border border-gray-700 rounded py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><MdOutlineHome size={20}/>
      <span > <a href="#home">Home</a> </span></div>

      <div className='flex items-center space-x-1 px-2 border border-gray-700 rounded py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><IoPersonOutline size={17}/>
      <span> <a href="#about">About</a> </span></div>

      <div className='flex items-center space-x-1 px-2 border border-gray-700 rounded py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><MdWorkOutline />
      <span> <a href="#projects">Projects</a> </span></div>

      <div className='flex items-center space-x-1 px-2 border border-gray-700 rounded py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300 '><GoStack />
      <span> <a href="#stacks">Teck Specs</a> </span></div>

      <div className='flex items-center space-x-1 px-2 border border-gray-700 rounded py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300 '><FaCogs />
      <span> <a href="#approach">Approach</a> </span></div>

      <div className='flex items-center space-x-1 px-2 border border-gray-700 rounded py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300 '><MdEmail />
      <span> <a href="#contact">Contact</a> </span></div>
    </div>
       <button 
          className="md:hidden text-2xl mr-5 text-gray-300"
          onClick={() => setOpen(!open)}
        >{open ? (<HiOutlineXMark size={30} />):(<VscThreeBars size={25}/>)}</button>
    </div>
    {
      open && (
         <div className="fixed top-18 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/50 z-50 flex flex-col justify-center gap-4 text-lg font-semibold items-center text-gray-400 py-8 rounded-b-2xl border-t-0 border border-gray-700 px-4">
          <a href="#home" className=' w-full flex items-center justify-center gap-1 border border-gray-700 rounded-xl py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><MdOutlineHome size={20}/>
          <span > <a href="#home">Home</a> </span></a>

           <a href="#about" className='w-full flex items-center justify-center gap-1 border border-gray-700 rounded-xl py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><IoPersonOutline size={17}/>
           <span> <a href="#about">About</a> </span></a>

           <a href="#projects" className='w-full flex items-center justify-center gap-1 border border-gray-700 rounded-xl  py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><MdWorkOutline />
           <span> <a href="#projects">Projects</a> </span></a>

           <a href="#stacks" className='w-full flex items-center justify-center gap-1 border border-gray-700 rounded-xl py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><GoStack />
           <span> <a href="#stacks">Teck Specs</a> </span></a>

           <a href='#approach' className='w-full flex items-center justify-center gap-1 border border-gray-700 rounded-xl py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><FaCogs />
           <span> <a href="#approach">Approach</a> </span></a>

           <a href="#contact" className='w-full flex items-center justify-center gap-1 border border-gray-700 rounded-xl py-0.5 bg-gray-900 hover:text-[#1ea297] transition duration-300'><MdEmail />
           <span> <a href="#contact">Contact</a> </span></a>
        </div>
      ) 
    }
    </header>
  )
}

export default Header
