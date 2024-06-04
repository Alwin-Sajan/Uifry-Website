import React from 'react';
import { backE, card, ellipse, phoneA, phoneB, star, star2 } from './../assets/index'
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Advantages = ({ darkMode }) => {
    const bell = (
        <icon className='rounded-[100%] p-2 bg-[#ff5555] text-white mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        </icon>
    );
    const stat = (
        <icon className='rounded-[100%] p-2 bg-[#ff5555] text-white mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
        </icon>
    )
    return (
        <div className='h-auto mb-28 lg:mb-16'>
            <Reveal>
                <div className='flex lg:px-32 max-md:px-8 relative z-20 pt-12 h-auto max-lg:min-h-max max-lg:mb-20 font-clash-bold'>
                    {/* <img src={frame3} className='absolute -ml-40 -z-10' alt="" /> */}
                    <div className='w-[50%] mt-48 max-md:mb-16'>
                        <h2 className='font-[600] max-md:w-[50%] tracking-widest text-[#FF5555]'>ADVANTAGE</h2>
                        <h1 className='font-[900] max-md:w-[50%] -ml-1 text-5xl'>Why Choose Uifry?</h1>

                        <h2 className='text-2xl font-[700] flex items-center mt-8 ' >{bell} Clever Notifications</h2>

                        <p className='opacity-50 mt-4 font-[600] max-md:absolute max-md:pr-20 '>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>

                    <div className='w-[50%] max-md:-ml-[50%] max-md:w-[100%] lg:min-h-[100vh] relative lg:mb-16'>
                        <img src={darkMode ? star2 : star} className='absolute w-16 lg:ml-[560px] max-md:size-10 mt-8' alt="" />
                        <motion.img initial={{ rotate: '15deg' }} whileHover={{ scale: 1.2, rotate: 15 }} whileTap={{ scale: 1.5 }} src={phoneB} className='rotate-[15deg] absolute max-md:ml-32 z-40 mt-4 ml-8' alt="" />
                        <img src={ellipse} className='absolute z-20 mt-4 -ml-8 max-md:ml-16 ' alt="" />
                        <motion.img initial={{ rotate: 0, scale: 0.89 }}
                            animate={{ rotate: [0, 180], scale: [0.96, 1, 0.97] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} src={backE} className='absolute z-10 mt-36 max-md:ml-28 -ml-20' alt="" />

                    </div>

                </div>
            </Reveal>

            <Reveal>
                <div className='lg:flex max-md:grid max-md:col-span-1 max-md:mt-32 lg:px-32 max-md:px-8 font-clash-bold relative lg:mt-20'>
                    {/* <img src={frame4} className='absolute  -ml-40 -z-10' alt="" /> */}
                    <div className='lg:w-[50%] max-md:w-full relative'>
                        <img src={darkMode ? star2 : star} className='absolute mt-8 w-10 max-md:size-10 rotate-45 lg:ml-[444px]' alt="" />
                        <img src={phoneA} className='rotate-[15deg] mt-16 z-30 absolute max-md:ml-4' alt="" />
                        <motion.img whileHover={{ scale: 1.2, rotate: '15deg' }} src={card} className='lg:absolute z-50 mt-60 h-36 lg:ml-36' alt="" />
                        <img src={ellipse} className='absolute z-20 lg:mt-8 max-md:-mt-72 lg:-ml-20' alt="" />
                        <motion.img initial={{ rotate: 0, scale: 0.89 }}
                            animate={{ rotate: [0, 180], scale: [0.96, 1, 0.97] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} src={backE} className='absolute z-10 lg:mt-32 lg:size-[40vw] max-md:-mt-32' alt="" />
                    </div>
                    <div className='lg:w-[50%] mt-56 max-md:relative lg:mb-28'>
                        <h2 className='text-2xl font-[700] flex items-center mt-8' >{stat}Fully Customizable</h2>
                        <p className='opacity-50 mt-4 lg:mr-16 font-[600]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                        <img src={darkMode ? star2 : star} className=' mt-40 w-12 lg:ml-72' alt="" />
                    </div>
                </div>
            </Reveal>

        </div>
    )
}

export default Advantages