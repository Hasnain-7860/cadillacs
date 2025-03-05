import React from "react";
import video from '../assets/cad.webm'

const Home = () => {
  return (
    <div className="flex">
      <div className="ml-[20vw] mt-[10vw]">
        <h1 className="text-[60px] text-white font-semibold">Discover, <br /> Develop, Deliver</h1>
        <p className="text-white font-semibold">
          Explore pioneering solutions at our hub, simplifying blockchain.
          Unlock Web2 logins, gasless transactions, and tailored smart
          contracts. Join innovation <br /> today!
        </p>
        <div className=" ">
        <button className='bg-white p-4 pr-[20px] pl-[20px] rounded-[50px]  mt-[10px] mr-[20px]'><a href="">Latest Project</a></button>
        <button className='bg-blue-400 p-4 rounded-[50px] mt-[10px] mr-[20px] hover:bg-white   '><a href="">Learn More</a></button>
        </div>
      </div>
      <div className="w-[50vw] mr-[18vw] mt-[20vh]">
        <video autoPlay muted>
            <source src={video}/>
        </video>
      </div>
    </div>
  );
};

export default Home;