import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Solution from './Components/Solution'
import Services from './Components/Services'


const App = () => {
  return (
    <div className='bg-black h-[1400vh] '>
       <div className='bg-[linear-gradient(to_top,#0c5ebf,#1b50a7,#1f4290,#1f357a,#1c2964,#182256,#131c48,#0f163b,#0c1331,#0b0f27,#07091e,#010314)] h-[87vh] ml-9 mr-9 rounded-xl relative flex-wrap '>
       <Navbar/>
       <Home/>
      </div>
      <Solution/>
      <div className="bg-[linear-gradient(to_bottom,#0d5bba,#1b4fa7,#204494,#213982,#202e70,#1e2862,#1b2354,#181d46,#161938,#14162a,#11111c,#0b0b0d)] h-[100%] mr-[25px] ml-[25px] ">
        <Services/>
      </div>
    </div>
  )
}

export default App