import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { PiTrainRegional } from "react-icons/pi";

const Services = () => {
  return (
    <div className="w-[100%]  flex-wrap  lg:grid grid-cols-3  pl-[16%] pr-[12.5%]  relative top-8 rounded-[20px] mb-[180px]    ">
    <div className="border-solid  border-blue-500 border-[1px] w-[23vw] h-[55vh]  ">
      <div className="mt-[140px] ">
        <h1 className="flex text-[30px] justify-center items-center font-semibold text-white gap-2 ">
          <HiOutlineDesktopComputer className="size-[70px] text-white" />
          <h1>Web2 Logins</h1>
        </h1>
      </div>
      <div className=" mt-40 ml-[20px]">
        <p className="text-white font-semibold">
          Simplifying blockchain access with familiar Web2 login
          experience.
        </p>
        <button className="text-white bg-blue-400 order-solid border-2 border-white p-[10px] rounded-[25px] mt-3 pl-[30px] pr-[30px] hover:bg-white text-black">
          <a href="">Learn More</a>
        </button>
      </div>
    </div>
    <div className="border-solid border-2 border-blue-500 border-[1px] w-[23vw] h-[55vh]  ">
      <div className="mt-[140px] ">
        <h1 className="flex text-[30px] justify-center items-center font-semibold text-white gap-2 pl-9 ">
          <MdSettings className="size-[70px] text-white" />
          <h1>Gasless Implementation</h1>
        </h1>
      </div>
      <div className=" mt-40 ml-[20px]">
        <p className="text-white font-semibold">
          Affordable and hassle-free blockchain transactions without high
          gas fees.
        </p>
        <button className="text-white bg-blue-400 order-solid border-2 border-white p-[10px] rounded-[25px] mt-3 pl-[30px] pr-[30px] hover:bg-white text-black">
          <a href="">Learn More</a>
        </button>
      </div>
    </div>
    <div className="border-solid border-2 border-blue-500 border-[1px] w-[23vw] h-[55vh]  ">
      <div className="mt-[140px] ">
        <h1 className="flex text-[30px] justify-center items-center font-semibold text-white gap-2 ">
          {" "}
          <MdOutlineGeneratingTokens className="size-[70px] text-white" />
          <h1>Token Contracts</h1>
        </h1>
      </div>
      <div className=" mt-40 ml-[20px]">
        <p className="text-white font-semibold">
          Simplified blockchain finance with user-friendly token
          transactions and presale arrangements.
        </p>
        <button className="text-white bg-blue-400 order-solid border-2 border-white p-[10px] rounded-[25px] mt-3 pl-[30px] pr-[30px] hover:bg-white text-black">
          <a href="">Learn More</a>
        </button>
      </div>
    </div>
    <div className="border-solid border-2 border-blue-500 border-[1px] w-[23vw] h-[55vh]  ">
      <div className="mt-[140px] ">
        <h1 className="flex text-[30px]  justify-center items-center font-semibold text-white gap-2 ">
          <MdOutlineDashboardCustomize className="size-[70px] text-white" />
          <h1>Customized Contracts</h1>
        </h1>
      </div>
      <div className=" mt-40 ml-[20px]">
        <p className="text-white font-semibold">
          Tailored solutions for RWA, Business Escrow, and Enterprise use
          cases.
        </p>
        <button className="text-white bg-blue-400 order-solid border-2 border-white p-[10px] rounded-[25px] mt-3 pl-[30px] pr-[30px] hover:bg-white text-black">
          <a href="">Learn More</a>
        </button>
      </div>
    </div>
    <div className="border-solid border-2 border-blue-500 border-[1px] w-[23vw] h-[55vh]  ">
      <div className="mt-[140px] ">
        <h1 className="flex text-[30px] justify-center items-center font-semibold text-white gap-2 ">
          <PiPlugsConnectedFill className="size-[70px] text-white" />
          <h1>DAOS</h1>
        </h1>
      </div>
      <div className=" mt-40 ml-[20px]">
        <p className="text-white font-semibold">
          Decentralized Autonomous Organizations for fair and democratic
          decision-making on the blockchain.
        </p>
        <button className="text-white bg-blue-400 order-solid border-2 border-white p-[10px] rounded-[25px] mt-3 pl-[30px] pr-[30px] hover:bg-white text-black">
          <a href="">Learn More</a>
        </button>
      </div>
    </div>
    <div className="border-solid border-2 border-blue-500 border-[1px] w-[23vw] h-[55vh]  ">
      <div className="mt-[140px] ">
        <h1 className="flex text-[30px] justify-center items-center font-semibold text-white gap-2 ">
          <PiTrainRegional className="size-[70px] text-white" />
          <h1>Integrations</h1>
        </h1>
      </div>
      <div className=" mt-40 ml-[20px]">
        <p className="text-white font-semibold">
          Seamless integration of blockchain with server, database,
          Docker, and MultiSig configurations.
        </p>
        <button className="text-white bg-blue-400 order-solid border-2 border-white p-[10px] rounded-[25px] mt-3 pl-[30px] pr-[30px] hover:bg-white text-black">
          <a href="">Learn More</a>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Services