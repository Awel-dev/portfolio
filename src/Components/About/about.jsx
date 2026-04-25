import React from 'react'
import { FaCode } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

const About = () => {
  return (
    <div id='about' className='w-full'>
      <div className='flex flex-col items-center'>
        <div className='text-[#1ea297] ml-5 sm:ml-14 mb-6' >ABOUT ME</div>
        <div className='text-[#1ea297] ml-10 mr-2 sm:ml-14 text-4xl font-bold font-mono mb-10' ><p >Building With Purpose, <span className='text-white'>coding with passion</span></p></div>
        <div className='text-gray-400 ml-10 sm:ml-14 mr-10 xl:ml-20'>
            <p className='mb-4 '>I’m a skilled and passionate full-stack developer who helps businesses get a
                 fresh, creative start through well-built web applications.
                  I’m detail-oriented, committed, and strong in problem-solving,
                   time management, and organization.</p>

                   <p>I’ve developed and deployed real-world 
                    web applications using clean coding principles
                     and test-driven development</p>
        </div>

        <div className='text-gray-400 shadow-sm shadow-gray-600 pb-4 px-2 mb-20 ml-9 sm:ml-14 mr-10 mt-8 border border-gray-600 w-fit h-fit text-center pt-4 font-semibold text-sm sm:text-xl
         bg-[#11171c]'>
          <p>"I aim to build products that feel good to use, scale reliably, 
            and remain enjoyable to maintain as they grow"</p>
        </div>
      </div>

      <div className='w-full h-fit flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center'>

        <div className='text-gray-400 w-[90%] mb-15 p-4 border  border-gray-800 shadow-sm shadow-gray-700 
        md:w-90 lg:w-120 xl:w-150'>
          <div className='py-4 px-5 w-20 text-[#1ea297] bg-gray-800 text-center mb-4'><FaCode size={30} /></div>
          <div>
            <div className='font-bold text-xl mb-2'>Clean Code</div>
            <div>I write clean, maintainable code that’s
               easy to understand and extend. </div>
          </div>
        </div>

        <div className='text-gray-400 w-[90%] mb-15 p-4 border border-gray-800 shadow-sm shadow-gray-700
        md:w-90 lg:w-120 xl:w-150'>
          <div className='py-4 px-5 w-20 text-[#1ea297] bg-gray-800 text-center mb-4'><FaBolt size={30}/></div>
          <div>
            <div className='font-bold text-xl mb-2'>Performance</div>
            <div>Performance-first development to ensure fast 
              load times and smooth UX </div>
          </div>
        </div>

       <div className='text-gray-400  w-[90%] mb-15 p-4 border  border-gray-800 shadow-sm shadow-gray-700 
       md:w-90 lg:w-120 xl:w-150'>
          <div className='py-4 px-5 w-20 text-[#1ea297] bg-gray-800 text-center mb-4'><IoIosPeople size={30}/></div>
          <div>
            <div className='font-bold text-xl mb-2'>Collaboration</div>
            <div>Strong communicator who works well with teams and stakeholders. </div>
          </div>
        </div>


         <div className='text-gray-400  w-[90%] mb-15 p-4 border  border-gray-800 shadow-sm shadow-gray-700 
         md:w-90 lg:w-120 xl:w-150'>
          <div className='py-4 px-5 w-20 text-[#1ea297] bg-gray-800 text-center mb-4'><FaRegLightbulb size={30}/></div>
          <div>
            <div className='font-bold text-xl mb-2'>Innovation</div>
            <div>Always exploring new technologies to build better and smarter solutions. </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
