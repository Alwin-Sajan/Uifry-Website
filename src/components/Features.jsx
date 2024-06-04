import React from 'react'
import { backE, ellipse, star2, phoneA, star } from '../assets'

const Features = ({darkMode}) => {
    const buot = (<icon className='text-[#ff5555] mr-1'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg></icon>
    )
        ;
    return (
        <div className='lg:px-36 lg:mt-48 relative lg:flex max-md:px-8  h-auto mb-8 '>
            {/* <img src={frame2} className='absolute -z-10 -ml-36 -mt-24' alt="" /> */}

            <div className='lg:w-[50%] max-md:w-full h-auto relative'>
                <img src={phoneA} className='lg:absolute max-md:relative z-40 -mt-16 rotate-[15deg]' alt="" />
                <img src={ellipse} className='absolute z-30 size-[50vw] -rotate-[15deg] lg:-mt-28 max-md:size-96 max-md:-mt-96 lg:-ml-16' alt="" />
                <img src={darkMode ? star2 : star} className='absolute z-20 -ml-24 mt-8 rotate-45 w-12 ' alt="" />
                <img src={backE} className='absolute z-10 -ml-32 max-md:-mt-96 ' alt="" />
            </div>

            <div className='lg:w-[50%]   font-clash-bold p-4 relative '>
                <h2 className='font-[600] tracking-widest text-[#FF5555]'>FEATURES</h2>
                <h1 className='font-[900] -ml-1 text-5xl'>Uifry Premium</h1>



                <h3 className='font-[900] text-lg mt-8 flex '>{buot} Budgeting Intervals </h3>
                <p className='opacity-50 font-[600] mt-2 text-LG leading-6'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Thincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>

                
                <h3 className='font-[900] text-lg mt-4 flex '>{buot} Budgeting Intervals </h3>
                <p className='opacity-50 font-[600] mt-2 text-LG leading-6'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Thincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>

                
                <h3 className='font-[900] text-lg mt-4 flex '>{buot} Budgeting Intervals </h3>
                <p className='opacity-50 font-[600] mt-2 text-LG leading-6'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Thincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>

            </div>
        </div>
    )
}

export default Features