import React from 'react'
import { BiCreditCardFront } from "react-icons/bi";
import { TbStackBack } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { GrBottomCorner } from "react-icons/gr";
import { GrTopCorner } from "react-icons/gr";


const stacks = () => {
  return (
    <div id='stacks' className='flex flex-col items-center justify-center'>
      <div className='text-sm text-[#1ea297] mt-10'>WEBSITE DEVELOPMENT</div>
        <div className='font-semibold font-serif text-4xl mb-10 mt-2'><span className='text-[#1ea297]'>TECH </span> SPECS.</div>
        <div className='grid grid-cols-2 gap-5 sm:gap-10 ml-5 mb-20 mr-4 xl:w-3/4'>
           
            <div className='border border-gray-700 px-5 py-3 hover:border-[#2b7c75] transition-transform duration-300 relative'>
                <div className='absolute -top-1 -left-1 text-[#1ea297] p-0'><GrTopCorner size={25} /></div>
                <div className='absolute -top-1 -right-1 rotate-90 text-[#1ea297] p-0'><GrTopCorner size={25} /></div>
                <div className='absolute -bottom-1 -left-1 rotate-90 text-[#1ea297] p-0'> <GrBottomCorner size={25}/></div>
                <div className='absolute -bottom-1 -right-1 text-[#1ea297] p-0'><GrBottomCorner size={25}/></div>

                <div className='pl-4 py-3 bg-gray-800 w-14 mb-3 text-[#1ea297]'><FaCode size={25}/></div>
                <div className=''>
                    <h1 className='text-xl font-bold mb-3'>CORE LANGUAGES AND TOOLS</h1>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Javascript </span></div>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>C++ </span></div>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Java</span></div>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>HTML5</span></div>
                   <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>CSS3</span></div>
                    <div className='px-1 sm:pl-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Git and gitHub</span></div>
                    <div className='px-1 sm:pl-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Vercel</span></div>
                </div>
            </div>

            <div className='border border-gray-700 px-5 py-3 hover:border-[#2b7c75] transition-transform duration-300 relative'>
                <div className='absolute -top-1 -left-1 text-[#1ea297] '><GrTopCorner size={25} /></div>
                <div className='absolute -top-1 -right-1 rotate-90 text-[#1ea297] '><GrTopCorner size={25} /></div>
                <div className='absolute -bottom-1 -left-1 rotate-90 text-[#1ea297] '> <GrBottomCorner size={25}/></div>
                <div className='absolute -bottom-1 -right-1 text-[#1ea297]'><GrBottomCorner size={25}/></div>
                <div className='pl-4 py-3 bg-gray-800 w-14 mb-3 text-[#1ea297]'><BiCreditCardFront size={25}/></div>
                <div>
                    <h1 className='text-xl font-bold mb-3'>WEB FRONTEND</h1>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>React.js</span></div>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Vite</span></div>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Tailwind css</span></div>
                    <div className='px-1 sm:pl-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Redux toolkit</span></div>
                </div>
            </div>

            <div className='border border-gray-700 px-5 py-3 hover:border-[#2b7c75] transition-transform duration-300 relative'>
                <div className='absolute -top-1 -left-1 text-[#1ea297]'><GrTopCorner size={25} /></div>
                <div className='absolute -top-1 -right-1 rotate-90 text-[#1ea297]'><GrTopCorner size={25} /></div>
                <div className='absolute -bottom-1 -left-1 rotate-90 text-[#1ea297] '> <GrBottomCorner size={25}/></div>
                <div className='absolute -bottom-1 -right-1 text-[#1ea297]'><GrBottomCorner size={25}/></div>
                <div className='pl-4 py-3 bg-gray-800 w-14 mb-3 text-[#1ea297]'><TbStackBack size={25}/></div>
                <div>
                    <h1 className='text-xl font-bold mb-3'>BACKEND ENGENERING</h1>
                     <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>NodeJs</span></div>
                     <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Express.js</span></div>
                     <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Rest APIs</span></div>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>Firebase</span></div>
                     <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>GraphQL</span></div>
                </div>
            </div>

            <div className='border border-gray-700 px-5 py-3 hover:border-[#2b7c75] transition-transform duration-300 relative'>
                <div className='absolute -top-1 -left-1 text-[#1ea297]'><GrTopCorner size={25} /></div>
                <div className='absolute -top-1 -right-1 rotate-90 text-[#1ea297]'><GrTopCorner size={25} /></div>
                <div className='absolute -bottom-1 -left-1 rotate-90 text-[#1ea297] '> <GrBottomCorner size={25}/></div>
                <div className='absolute -bottom-1 -right-1 text-[#1ea297]'><GrBottomCorner size={25}/></div>
                <div className='pl-4 py-3 bg-gray-800 w-14 mb-3 text-[#1ea297]'><FaDatabase size={25} /></div>
                <div>
                    <h1 className='text-xl font-bold mb-3'>DATABASE AND AUTH</h1>
                    <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>MySQL</span></div>
                     <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>MongoDB</span></div>
                     <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>PostegreSQL</span></div>
                     <div className='px-1 sm:px-4 flex items-center gap-2 text-gray-400'><span className=' text-[#1ea297]'><FaSquare size={6}/></span> <span>JWT / OAuth</span></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default stacks
