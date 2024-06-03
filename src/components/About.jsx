import React from 'react'
import { star ,banner, backE, phoneA, phoneB, phoneC, ellipse } from './../assets/index';

const About = () => {
  return (
    <>
    <div className=' relative  flex px-36 pt-16'>
        <img src={backE} className='absolute -mt-28 -z-[2]' alt="" />

        <div className='w-[55%]'>
          <h1 className=' font-[900] text-[54px] tracking-tighter leading-[60px] font-clash-bold mt-4'>Make The Best Financial Descisions</h1>
          <p className=' opacity-50 font-clash-medium font-[500] mt-4 text-lg'>Cum et convallis risus placerat aliquam, nunc.
            Scelerisque aliquet faucibus tincidunt eu adipiscing
            sociis arcu lorem porttitor.
          </p>
          <div className='flex items-center   gap-8'>
            <button className='text-white bg-black w-40 h-14 flex items-center justify-center rounded mt-4 p-2'>Get Started {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>}
            </button>
            <button className='w-40 h-14 flex items-center justify-center text-[20px] font-clash-medium tracking-tight gap-3 font-[500] mt-4'>{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>}Watch Video
            </button>
          </div>
          <div className='relative'>
            <img src={star} className='rotate-45 absolute mt-16 ml-28 h-10' alt="" />
            <img src={banner} className='absolute -m-8 w-[88%] mt-2' alt="" />
          </div>
        </div>

        <div className='w-[45%] relative'>
            <img src={phoneA} className='absolute z-50 -mt-28 -ml-24 w-[500px]' alt="" />
            <img src={phoneB} className='absolute z-40 -mt-10 ml-4 ' alt="" />
            <img src={phoneA} className='absolute z-30  mt-5 ml-32'/>
            <img src={ellipse} className='absolute z-20 -mt-28 size-[60vw] ml-8 h-[45vw] -rotate-12' alt="" />
            <img src={backE} className='absolute z-10 rotate-180 mt-56' alt="" />
            <img src={star} className='absolute z-50 w-10 mt-96 pt-12 ml-16 rotate-6' alt="" />
        </div>

      </div>

    </>
  )
}

export default About