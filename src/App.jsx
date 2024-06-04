import React, { useState } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Testmonial from './components/Testmonial';
import FreqQs from './components/FreqQs';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={`${darkMode ? 'bg-black text-[white]' : 'bg-white text-black'} w-screen overflow-x-hidden h-auto relative`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <Advantages darkMode={darkMode} />
      <Testmonial darkMode={darkMode} />
      <FreqQs darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
