import React from 'react'
import { backE, cPhoto, ellipse, star2, gphoto, star } from '../assets'

const Testmonial = ({darkMode}) => {
    return (
        <div className='lg:px-36 relative font-clash-bold'>
            {/* <img src={frame5} className='absolute -ml-40 -mt-8 -z-10' alt="" /> */}
            <h2 className='font-[600] text-center tracking-widest '>TESTIMONIAL</h2>
            <h1 className={`font-[900] -ml-1 mt-2 text-5xl text-center lg:px-48 ${darkMode?'text-[#ff5555]':'text-black'}`}>WHAT OUR USERS SAY ABOUT US ?</h1>
            <div className='flex '>

                <div className='lg:w-[50%] relative'>
                    <img src={gphoto} className='absolute z-50 mt-16  ' alt="" />
                    <img src={ellipse} className='absolute z-40 -ml-16' alt="" />
                    <img src={backE} className='absolute z-20 mt-16 -ml-16' alt="" />
                </div>
                <div className='lg:w-[50%] px-20 mt-20'>
                    <h2 className='text-2xl font-[700] flex items-center mt-8' >The Best Financial Accounting App Ever!</h2>
                    <p className='opacity-50 mt-4 font-[600]'>"Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam."</p>
                    <div className='flex items-center'>
                        <img src={cPhoto} className='w-10 mt-8' alt="" />
                        <img src={cPhoto} className='w-8 mt-8 ml-2 opacity-80' alt="" />
                        <img src={cPhoto} className='w-8 mt-8 ml-2 opacity-80' alt="" />
                        <img src={cPhoto} className='w-8 mt-8 ml-2 opacity-80' alt="" />
                    </div>
                    <h4 className='font-[700] mt-4'>Nick John</h4>
                    <img src={darkMode ? star2 : star} className='w-12 mt-28 -ml-60' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testmonial