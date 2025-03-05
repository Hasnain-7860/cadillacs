import React from 'react'
import logo from '../assets/logoc.webp';

const Navbar = () => {
  return (
   
        <div className='flex justify-around pt-4 pr-[10vw] pl-[18vw] '>
            <div className='w-[150px] h-[45px] justify-center flex items-center pt-2'>
                <a href="">
                    <img  src={logo} alt="" />
                </a>
            </div>
            <div className="flex gap-8 rounded-[30px] border-solid border-[1px] p-4 pl-10 pr-10  border-white  text-[13px] text-white ">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="a">About Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Industries</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
            <div className='flex gap-[40px] text-[13px] pr-[100px]'>
                <button className='bg-blue-400 rounded-[40px]   p-3 pl-10 pr-10 hover:bg-white '>Learn More</button>
                <button className=' bg-white rounded-[40px] p-3 pl-10 pr-10 hover:bg-gray-100'>Latest Project</button>
            </div>

        </div>
    
  )
}

export default Navbar