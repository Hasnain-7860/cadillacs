import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Solution from './Components/Solution'
import Services from './Components/Services'


const App = () => {
  return (
    <div className='bg-black h-[1400vh] '>
       <div className='bg-blue-400 h-[87vh] ml-9 mr-9 rounded-xl relative flex-wrap '>
       <Navbar/>
       <Home/>
      </div>
      <Solution/>
      <div className="bg-blue-400 h-[100%] mr-[25px] ml-[25px] ">
        <Services/>
      </div>
    </div>
  )
}

export default App