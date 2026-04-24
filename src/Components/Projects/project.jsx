import React from 'react'
import { projectInfo } from './projectinfo'
import Projectcard from './projectcard'
import { GoArrowUpRight } from "react-icons/go";

function project() {
  return (
    <div id='projects' className='flex flex-col items-center justify-center mt-10 sm:w-fit mx-14 '>
        <div className='text-sm text-[#1ea297] mb-5'>FEATURED WORK</div>
      <div className='text-3xl mx-15 font-semibold font-serif'> <span className='text-[#1ea297]'>Projects that</span> speak for themselves</div>
      <div className='mt-6 text-gray-400'>A selection of my recent work</div>
      <div className='md:grid md:grid-cols-2 xl:grid xl:grid-cols-3  gap-8'>
      {projectInfo.map((infos)=>(
        <Projectcard key={infos.imgLink} data={infos}/>
      ))}</div>
      <div>
        <a href="" className='flex items-center gap-2 my-10 text-xl border px-4 py-2 border-gray-500
        font-semibold shadow-sm shadow-gray-500 hover:bg-[#1ea297] transition-all duration-300 hover:text-black hover:scale-105 hover:border-[#1ea297]'><span>VIEW ALL PROJECTS</span> <GoArrowUpRight size={25} /> </a>
      </div>
    </div>
  )
}

export default project
