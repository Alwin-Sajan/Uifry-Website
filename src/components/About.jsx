import React from 'react'
import { star, banner, backE, phoneA, phoneB, phoneC, star2, ellipse, logo_icon, logo_icon2 } from './../assets/index';
import { motion } from "framer-motion";
import Reveal from './Reveal';

const About = ({ darkMode }) => {

    return (
        <>
            <Reveal>
                <div className='relative lg:flex lg:px-36 max-md:px-8  pt-16 mt-8 lg:h-screen '>
                    <motion.img initial={{ rotate: 0, scale: 0.89 }}
                        animate={{ rotate: [0, 180], scale: [0.96, 1, 0.97] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} src={backE} className={`${darkMode ? 'hidden' : 'block'} max-md:hidden absolute -mt-32 z-10 max-md:-ml-16`} alt="" />
                    <img src={darkMode ? logo_icon2 : logo_icon} className='hidden w-40 mb-8 max-md:block' alt="" />

                    <div className='lg:w-[55%] max-md:w-full max-md:pr-16 '>
                        
                            <h1 className={`${darkMode ? 'text-[#ff5555]' : 'text-black'} font-[900] relative z-50 text-5xl tracking-tighter leading-[60px] font-clash-bold mt-4`}>Make The Best Financial Descisions</h1>
                            <p className=' opacity-50 font-clash-medium z-50 relative font-[500] mt-4 max-md:mr-16 text-lg max-md:text-sm'>Cum et convallis risus placerat aliquam, nunc.
                                Scelerisque aliquet faucibus tincidunt eu adipiscing
                                sociis arcu lorem porttitor.
                            </p>
                        
                        <div className='lg:flex items-center max-md:mr-8 max-md:grid gap-8'>
                            <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.1 }}
                                className={`text-white ${darkMode ? 'bg-[#ff5555]' : ' bg-black'} z-50 cursor-pointer w-40 h-14 flex items-center max-md:text-xl justify-center rounded mt-4 p-2`}>Get Started {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>}
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} className='w-40 z-50 h-14 flex items-center cursor-pointer justify-center max-md:text-xl text-[20px] font-clash-medium tracking-tight gap-3 font-[500] mt-4'>{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                            </svg>}Watch Video
                            </motion.button>
                        </div>
                        <div className='relative'>
                            <img src={darkMode ? star2 : star} className='rotate-45 absolute lg:mt-16  ml-28 h-10' alt="" />
                            <img src={banner} className='lg:absolute -m-8 w-[88%] mt-2 max-md:mt-8 max-md:ml-4' alt="" />
                        </div>

                    </div>

                    <div className='lg:w-[45%] max-md:hidden h-auto relative max-md:w-full max-md:px-16 max-md:pt-36 '>
                        <motion.img whileHover={{ scale: 1.01, rotate: 15 }} whileTap={{ scale: 1.13 }} src={phoneA} className='absolute z-50 -mt-28 -ml-24 w-[500px]' alt="" />
                        <motion.img whileHover={{ scale: 1.01, rotate: 15, zIndex: 50 }} src={phoneB} className='absolute z-40 -mt-10 ml-4 ' alt="" />
                        <motion.img whileHover={{ scale: 1.01, rotate: 15, zIndex: 50 }} src={phoneA} className='absolute z-30  mt-5 ml-32' />
                        <img src={ellipse} className='absolute z-20 lg:-mt-28 size-[60vw] ml-8 h-[45vw] -rotate-12' alt="" />
                        <motion.img initial={{ rotate: 0, scale: 0.89 }}
                            animate={{ rotate: [0, 180], scale: [0.96, 1, 0.97] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} src={backE} className='absolute z-10 rotate-180 mt-56' alt="" />
                        <img src={darkMode ? star2 : star} className='absolute z-50 w-10 mt-96 pt-12 ml-16 rotate-6' alt="" />
                    </div>

                </div>
            </Reveal>
        </>
    )
}

export default About