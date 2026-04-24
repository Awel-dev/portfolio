import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";

const contact = () => {
  return (
    <div id='contact' className='flex flex-col items-center justify-center mb-5'>
      <div className='flex flex-col items-center justify-center my-10 mx-6'>
        <h1 className='text-[#1ea297] font-semibold'>GET IN TOUCH</h1>
        <h1 className='text-4xl font-semibold mb-6'>Let's <span className='text-[#1ea297] font-medium'>Connect</span></h1>
        <h1 className='text-gray-400 font-semibold text-center'>Feel free to reach out through any of these channels. 
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.</h1>
      </div>
   
      <div className="flex flex-col md:flex-row md:flex-wrap-reverse  gap-6 items-center justify-center mb-15 w-full">
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=awelsuda278@gmail.com' target='_blank' className='group border border-gray-700 px-5 py-5 my-5 w-[80%] md:w-[40%] xl:w-[25%] flex gap-4 items-center  hover:border-[#366f73] hover:scale-105 duration-300'>
          <div className='p-2 text-[#1ea297] bg-[#142828] group-hover:bg-[#223434]'><MdOutlineMail size={25} /></div>
          <div>
            <h1 className='text-[13px] text-gray-400 font-semibold'>EMAIL</h1>
            <h1 className='font-semibold'>awelsud278@gmail.com</h1>
            <h1 className='text-[13px] text-gray-400 font-semibold'>Drop me a line anytime</h1>
          </div>
        </a>
         
         
        <a href='https://github.com/awel-dev' target="_blank" className='group border border-gray-700 px-5 py-5 my-5 w-[80%] md:w-[40%] xl:w-[25%] flex gap-4 items-center  hover:border-[#366f73] hover:scale-105 duration-300'>
         <div className='p-2 text-[#1ea297] bg-[#142828] group-hover:bg-[#223434]'><FaGithub size={23} /></div>
         <div>
            <h1 className='text-[13px] text-gray-400 font-semibold'>GITHUB</h1>
            <h1 className='font-semibold' >awel-dev</h1>
            <h1 className='text-[13px] text-gray-400 font-semibold'>Check out my code</h1>
         </div>
        </a> 

        <a href='https://www.linkedin.com/in/awel-suda-a6a481397' target="_blank" className='group border-[0.5px]  border-gray-700  px-5 py-5 w-[80%] md:w-[40%] xl:w-[25%] flex gap-4 items-center hover:border-[#366f73] hover:scale-105 duration-300'>
            <div className='p-2 text-[#1ea297] bg-[#142828] group-hover:bg-[#223434]'><FaLinkedinIn size={25} /></div>
            <div>
                <h1 className='text-[13px] text-gray-400 font-semibold'>LINKEDIN</h1>
                <h1 className='font-semibold'>Awel Suda</h1>
                <h1 className='text-[13px] text-gray-400 font-semibold'>Let's connect professionally</h1>
            </div>
        </a>

        </div>

        <div className='border mx-8 px-4 py-3 text-gray-400 mb-10 text-center md:w-[60%] border-gray-600 shadow-sm shadow-gray-600 hover:border-[#366f73] hover:shadow-[#366f73]'>
            <h1 className='flex items-center text-center justify-center gap-1 text-white font-bold text-lg mb-2 '><span className='text-[#0bce83]'><GoDotFill size={22}/></span> Currently Available For Work</h1>
            <h2 className='text-[16px] font-semibold font-mono '>I'm currently open to new opportunities and exciting projects. 
                Whether you need a full-time engineer, a freelance consultant,
                 or just want to chat about tech, feel free to reach out!</h2>
        </div>
      
      
       <div className='flex flex-col items-center justify-center mt-15 mb-15'>
        <h1 className='font-bold text-3xl font-serif'>AS<span className='text-[#1ea297] text-4xl'>.</span></h1>
        <div className='mb-5 mt-3 text-gray-300 text-sm font-semibold'>
            <a href="#home" className='my-4 mx-2 md:mx-5 hover:text-[#1ea297] hover:underline transition duration-300 '>Home</a>
            <a href="#about" className='my-4 mx-2 md:mx-5 hover:text-[#1ea297] hover:underline transition duration-300 '>About</a>
            <a href="#projects" className='my-4 mx-2 md:mx-5 hover:text-[#1ea297] hover:underline transition duration-300 '>Projects</a>
            <a href="#stacks" className='my-4 mx-2 md:mx-5 hover:text-[#1ea297] hover:underline transition duration-300 '>Teck Specs</a>
            <a href="#approach" className='my-4 mx-2 md:mx-5 hover:text-[#1ea297] hover:underline transition duration-300 '>Approach</a>
            <a href="#contact" className='my-4 mx-2 md:mx-5  hover:text-[#1ea297] hover:underline transition duration-300 '>Contact</a>
        </div>
        <div className='flex gap-10 text-gray-300'>
         <a href="https://github.com/awel-dev" target="_blank"> <div className='p-2 bg-[#142828] hover:text-[#1ea297] hover:bg-[#223434] transition duration-200 hover:scale-105'><FaGithub size={20}></FaGithub></div></a>
         <a href="https://www.linkedin.com/in/awel-suda-a6a481397" target="_blank"> <div className='p-2 bg-[#142828] hover:text-[#1ea297] hover:bg-[#223434] transition duration-200 hover:scale-105'><FaLinkedinIn size={20} /></div></a>
        </div>
       </div>

         <div className='text-center m=5 mt-5 mb-15 text-gray-400'>
           <h1 className='flex items-center justify-center gap-1.5 text-lg font-semibold font-serif mb-2 text-gray-300 '>Made By Awel <span className='text-red-600'><FaHeart size={14}/></span></h1>
           <h1 className='text-[14px]'> &copy;  2026 Awel Suda. All rights reserved</h1>
         </div>
      </div>
    
  )
}

export default contact