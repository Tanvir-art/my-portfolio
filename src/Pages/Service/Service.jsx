import React from 'react'
import { IoLogoFigma } from "react-icons/io5";
import { FaReact, FaNodeJs  } from "react-icons/fa";
const Service = () => {
  return (
    <div className='px-10 bg-black text-white'>
       <h2 className='text-2xl md:text-4xl lg:text-5xl  font-bold text-[#eab308] py-10 text-center'>My service</h2>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32 pt-20'>

        <div className='flex flex-col items-center justify-center gap-4 bg-[#141410] px-20 py-24'>
        <p className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]'><IoLogoFigma/></p>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Figma to React</h2>
        <p className='text-sm lg:text-lg leading-[33px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam ipsum assumenda, qui corrupti reiciendis culpa facilis laborum iste? Sed!</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 bg-[#141410] px-20 py-24'>
        <p className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]'><FaReact/></p>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Frontend Development</h2>
        <p className='text-lg leading-[33px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam ipsum assumenda, qui corrupti reiciendis culpa facilis laborum iste? Sed!</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 bg-[#141410] px-20 py-24'>
        <p className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]'><FaNodeJs /></p>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Backend Development</h2>
        <p className='text-lg leading-[33px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam ipsum assumenda, qui corrupti reiciendis culpa facilis laborum iste? Sed!</p>
        </div>



       </div>
    </div>
  )
}

export default Service
