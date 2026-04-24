import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";

export default function projectcard({data}) {
  return (
    <div className=' group overflow-hidden mt-20 mb-4 flex flex-col justify-center border border-gray-700 shadow-sm shadow-gray-500 bg-[#11171c]'>
      <img src={data.imgLink} alt="" className='h-100 md:h-80 group-hover:scale-107 transition-transform duration-700 object-cover' />
      <div className=''>
        <h2 className='mx-6 font-bold text-xl my-4'>{data.title}</h2>
        <p className='mx-6 mt-3 text-gray-400'>{data.discr}</p>
      </div>
      <div className='mt-6 mx-6 flex flex-wrap '>
   {data.stack.map((tech, index) => (
    <span key={index} className="mr-3 my-2 bg-gray-700 px-2 py-1 border border-gray-500  ">
      {tech}
    </span>
     ))}
   </div>  
   <div className=' my-8 ml-6 mr-4 flex gap-5 xl:mr-10 xl:gap-6'> 
    <a href={data.detail} target='_blank' className=' text-center w-full border bg-[#1ea297] border-gray-400 py-2 px-15 hover:scale-105 transition duration-300 md:px-5 font-semibold hover:text-black'>View Detail</a>
    <a href={data.live} target='_blank' className='pt-3 px-2 border text-center border-[#1ea297] shadow-sm shadow-emerald-300 hover:scale-110 transition duration-300'><GoArrowUpRight size={20}/></a>
    <a href={data.github} target='_blank' className='py-3 px-2 border text-center border-[#1ea297] shadow-sm shadow-emerald-300 hover:scale-110 transition duration-300'><IoLogoGithub /></a>
   </div>
    </div>
  )
}