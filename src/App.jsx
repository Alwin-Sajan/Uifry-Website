import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import { frame1, arrow ,star ,banner, backE } from './assets/index';
import About from './components/About';

const App = () => {

  return (
    <div className=' h-auto  relative '>
      {/* <img className='w-full  -z-10 absolute' src={frame1} alt="" /> */}

      <NavBar />
      <About />



    </div>
  )
}

export default App