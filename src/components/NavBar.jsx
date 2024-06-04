import React, { useState, useEffect } from 'react';
import { logo_icon, star, star2, logo_icon2 } from './../assets/index';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [mode, setMode] = useState(() => localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    toggleDarkMode(); // Ensure this updates the parent component's state
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative ml-32 pl-2 pt-2 max-md:px-4 flex items-center">
      <img className="w-auto h-10 rotate-45 mt-24 -ml-24 absolute max-md:size-8" src={darkMode ? star2 : star} alt="" />

      <div className="flex-grow">
        <ul className={`p-4 pl-2 flex flex-col md:flex-row font-clash-bold text-[20px] font-[700] leading-[26px] items-center gap-4 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
          <li className="w-[117px]">
            <a href="">
              <img className="w-[117px]" src={darkMode ? logo_icon2 : logo_icon} alt="hi" />
            </a>
          </li>
          <li className={`inline-block font-[900] ${darkMode ? 'text-white' : 'text-[#FF5555]'}`}>
            <a href="">Home</a>
          </li>
          <li className="inline-block">
            <a href="#About">About Us</a>
          </li>
          <li className="inline-block">
            <a href="">Pricing</a>
          </li>
          <li className="inline-block">
            <a href="">Features</a>
          </li>
          <li className="inline-block">
            <button onClick={toggleMode}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <button className="md:hidden ml-2" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <button className={`ph-[150px] m-4 p-4 w-[176px] ml-[298px] rounded text-white ${darkMode ? 'bg-[#ff5555]' : 'bg-black'} hidden md:block`}>
        Download
      </button>
      <img className="w-auto h-16 mt-4 ml-8 pt-4 hidden md:block" src={darkMode ? star2 : star} alt="" />
    </div>
  );
};

export default NavBar;
