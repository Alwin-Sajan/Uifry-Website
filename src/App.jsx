import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import { frame1, arrow ,star ,banner, backE } from './assets/index';
import About from './components/About';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Testmonial from './components/Testmonial';
import FreqQs from './components/FreqQs';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className=' h-auto  relative '>
      {/* <img className='w-full  -z-10 absolute' src={frame1} alt="" /> */}

      <NavBar />
      <About />
      <Features />
      <Advantages />
      <Testmonial />
      <FreqQs />
      <Footer />

    </div>
  )
}

export default App