import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen bg-gray-50'>
      <div className='max-w-[1400px] mx-auto px-6 lg:px-12 py-20'>
        <div className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 mb-2'>Introduction</h4>
          <h2 className='text-5xl font-semibold'>About me</h2>
        </div>
        
        <div className='flex w-full flex-col lg:flex-row items-start gap-12 lg:gap-20'>
          <div className='w-full max-w-sm mx-auto lg:mx-0 lg:w-1/3'>
            <div className='sticky top-24'>
              <Image 
                src={assets.user_image} 
                alt='user' 
                className='w-full rounded-3xl shadow-lg'
              />
            </div>
          </div>

          <div className='flex-1'>
            <p className='text-lg text-gray-700 leading-relaxed mb-12'>
              I am an experienced Software Engineer with over 2 years of professional experience in the field. 
              Throughout my career, I have had the privilege of being at the forefront of multiple businesses 
              and start-ups, contributing to their success and growth.
            </p>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <li 
                  key={index}
                  className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                >
                  <Image src={icon} alt={title} className='w-8 mb-4'/>
                  <h3 className='text-xl font-semibold text-gray-800 mb-3'>{title}</h3>
                  <p className='text-gray-600'>{description}</p>
                </li>
              ))}
            </ul>
            <h4 className='my-6 text-gray-700'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index} >
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
