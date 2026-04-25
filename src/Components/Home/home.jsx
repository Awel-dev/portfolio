import React from 'react'
import laptop from '../../assets/pngwing.com.png'
import { GoDotFill } from "react-icons/go";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoJquery } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";

const home = () => {
  return (
    <div className='lg:flex items-center justify-between gap-4 p-4 m-6' id='home'>

      <div className=' w-[90%] mb-10 ml-3 sm:ml-5 text-center flex flex-col justify-center items-center '>
        <div><img src={laptop} alt="laptop" /></div>
        <div className='text-white flex items-center justify-center gap-1'><GoDotFill className='text-green-500'/><span className='font-semibold'>Available for work</span></div>
      </div>


      <div className='text-white ml-1 sm:ml-4'>
        <div className='mb-6 font-bold text-4xl ]'>
            <h3>Hi, I'm </h3>
            <h3 className=' text-[#1ea297]' >Awel Suda Kamil</h3>
        </div>
        <div className='font-serif text-gray-400 text-lg'>
            <p>A passionate developer with expertise in creating innovative web solutions.
                With a strong foundation in front-end and back-end technologies,
                 I thrive on crafting seamless user experiences and efficient code. 
            </p>
        </div>
        <div className='flex items-center flex-wrap gap-4 mt-8 text-gray-300'>
            <div className='flex items-center gap-0.5 px-2 py-0.5 border border-gray-400 rounded-xl bg-gray-800'>
                <FaHtml5 /> <span>HTML5</span></div>

            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <FaCss3 /> <span>CSS</span></div>

            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <RiTailwindCssLine size={20} /> <span>Tailwind CSS</span></div>

            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <IoLogoJavascript /> <span>JavaScript</span></div>

            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <BiLogoJquery /> <span>jQuery</span></div>
                
            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <FaReact /> <span>React</span></div>

            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <SiVite /> <span>Vite</span></div>

            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <FaNodeJs /> <span>Node.js</span></div>
            <div className='flex items-center gap-0.5 px-2 py-1 border border-gray-400 rounded-xl bg-gray-800'>
                <BiLogoFirebase /> <span>Firebase</span></div>

        </div>
        <div className='mt-8 p-2 flex items-center gap-3'>
        <a href="#projects" className='bg-[#1ea297] hover:bg-[#11171c] hover:border-[#1ea297] border border-[#1ea297] hover:text-white text-black font-bold py-1.5 px-1 rounded flex items-center gap-1 
        transition-colors duration-500 text-[11px] md:text-[16px]'>View My Work <IoIosArrowForward className='display-inline'/></a>
         <a href="#contact" className='bg-[#11171c] border border-[#1ea297] hover:bg-[#1ea297] hover:text-black text-white font-bold py-1.5 px-4 rounded flex items-center gap-1
         transition-colors duration-500 text-[11px] md:text-[16px]'>Get In Touch</a>
        </div>
        
        <div className='mt-4 p-4 flex items-center gap-5 text-gray-400'>
            <div className='text-gray-500 font-semibold '>Follow Me :</div>
            <a href='https://github.com/awel-dev' target="_blank" className='hover:bg-[#1ea297] hover:text-[#1ea297] border border-gray-800 transition duration-200'> <h3 ><FaGithub size={25} className='px-1 py-0.5  rounded border-gray-400 bg-gray-950'/></h3></a>
            <a href='https://www.linkedin.com/in/awel-suda-a6a481397' target="_blank" className='hover:bg-[#1ea297] hover:text-[#1ea297] border border-gray-800 transition duration-200'> <h3><FaLinkedin size={25} className='px-1 py-0.5  rounded border-gray-400 bg-gray-950'/></h3> </a>
            <a href='https://x.com/awelsuda65139' target='_blank' className='hover:bg-[#1ea297] hover:text-[#1ea297] border border-gray-800 transition duration-200'> <h3 ><BsTwitterX size={25} className='px-1 py-0.5  rounded border-gray-400 bg-gray-950'/></h3></a>
            <a href='https://t.me/hkkytech' target="_blank" className='hover:bg-[#1ea297] hover:text-[#1ea297] border border-gray-800 transition duration-200'> <h3 ><FaTelegramPlane size={25} className='px-1 py-0.5 rounded border-gray-400 bg-gray-950'/></h3></a>
            
        </div>
      </div>     
    </div>
  )
}

export default home
