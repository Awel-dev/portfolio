import React from 'react'

const approach = () => {
  return (
    <div id='approach' className='flex flex-col items-center justify-center mt-10'>

      <div className='mb-10'>
        <div className='text-[#1ea297] font-semibold text-sm text-center mb-4'>HOW I WORK</div>
        <div className='font-bold text-5xl font-mono'>My <span className='text-[#1ea297]'>Approach</span> </div>
      </div>

      <div className='mb-20 xl:grid xl:grid-cols-3'>
        <div className=' h-100 border border-gray-600 mb-8 mx-15 px-10 pt-30 flex flex-col items-center w-100 bg-gray-950 md:w-130 xl:w-90 xl:mx-6
        hover:bg-linear-to-b hover:from-green-900 hover:to-gray-950 transition duration-300 2xl:w-120'>
            <h1 className='text-3xl font-bold mb-5'>Planning & Strategy</h1>
            <h3 className='font-semibold text-gray-400'>We'll collaborate to map out your website's goals, target audience, and key functionalities. 
                We'll discuss things like site structure, navigation, and content requirements</h3>
        </div>

        <div className='h-100 border mb-8 mx-15 border-gray-600 px-10 pt-30 flex flex-col items-center w-100 bg-gray-950 md:w-130 xl:w-90 xl:mx-6
        hover:bg-linear-to-b hover:from-amber-900 hover:to-gray-950 transition duration-300 2xl:w-120'>
            <h1 className='text-3xl font-bold mb-5'>Development & Progress Update</h1>
            <h3 className='font-semibold text-gray-400'>Once we agree on the plan, I cue my lofi playlist and dive into coding. 
                From initial sketches to polished code, I keep you updated every step of the way.</h3>
        </div>

        <div className='h-100 border mb-8 mx-15 border-gray-600 px-10 pt-30 flex flex-col items-center w-100 bg-gray-950 md:w-130 xl:w-90 xl:mx-6
        hover:bg-linear-to-b hover:from-sky-900 hover:to-gray-950 transition duration-300 2xl:w-120'>
            <h1 className='text-3xl font-bold mb-5'>Development & Launch</h1>
            <h3 className='font-semibold text-gray-400'>This is where the magic happens! Based on the approved design,
                 I'll translate everything into functional code, building your website from the ground up.</h3>
        </div>
      </div>

    </div>
  )
}

export default approach
