import React from "react";
import { logo2 } from './../assets/index';



const Footer = () => {
    const call = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
    );
    const message = (<icon className='text-[#ff5555] mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg></icon>);
    return (
        <div className="flex flex-col gap-4 p-4 w-full pb-8 ">
            <div className="flex flex-col md:flex-row w-full justify-center lg:items-start md:items-start gap-4 md:gap-8 items-center ">
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <div className="flex items-center gap-1">
                        <img src={logo2} alt="logo2" />
                        <p className="text-lg lg:text-2xl font-semibold cursor-pointer  hover:text-[#FF5555]">
                            uifry
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={call} alt="call icon" />
                        <p className="text-sm lg:text-base cursor-pointer  hover:text-[#FF5555]">
                            help@frybix.com
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={message} alt="message icon" />
                        <p className="text-sm lg:text-base cursor-pointer  hover:text-[#FF5555]">
                            +1 234 456 678 89
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 items-center md:items-start">
                    <h1 className="text-lg lg:text-2xl font-medium text-[#FF5555] cursor-default">
                        Links
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Home</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">About Us</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Bookings</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Blog</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 items-center md:items-start">
                    <h1 className="text-lg lg:text-2xl font-medium text-[#FF5555] cursor-default">
                        Legal
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Terms Of Use</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Privacy Policy</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Cookie Policy</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 items-center md:items-start">
                    <h1 className="text-lg lg:text-2xl font-medium text-[#FF5555] cursor-default">
                        Product
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Take Tour</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Live Chat</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">Reviews</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 items-center md:items-start">
                    <h1 className="text-lg lg:text-2xl font-medium text-[#FF5555] cursor-default">
                        Newsletter
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className="cursor-pointer  hover:text-[#FF5555]">
                            Stay up to date
                        </p>
                    </div>
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="h-10 w-full md:w-auto rounded-l-md text-center border border-gray-300 focus:outline-none focus:border-[#FF5555]"
                        />
                        <button className="h-10 px-4 text-white bg-[#FF5555] rounded-r-md cursor-pointer hover:bg-black  hover:text-[#FF5555] font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-4 w-full">
                <p className="py-2 border-t-2 border-gray-400 w-full md:w-[50vw] text-center cursor-pointer  hover:text-[#FF5555]">
                    Copyright 2024 uifry.com all rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;