import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { serviceData } from '@/assets/assets'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <h4 className='text-center mb-2 text-lg'>What I offer</h4>
          <h2 className='text-center text-5xl font-semibold'>My Services</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
            I am a Software Engineer with 2+ years of experience, forefronting startups and automating processes for cost reduction.
          </p>

        <div className='grid grid-cols-1 md:grid-cols-auto gap-6 my-10'>
          {serviceData.map(({icon, title, description, link}, index)=>(
            <div 
              key={index} 
              className='border border-gray-200 rounded-xl px-8 py-12 
                       bg-white hover:bg-lightHover hover:-translate-y-1 
                       hover:shadow-black cursor-pointer 
                       transform transition-all duration-300'
            >
              <Image src={icon} alt={title} className='w-10'/>
              <h3 className='text-xl font-semibold text-gray-800 my-4'>{title}</h3>
              <p className='text-gray-600 leading-relaxed'>{description}</p>
              <a href={link} className='flex items-center gap-2 mt-6 text-gray-700 hover:text-gray-900'>
                Read more <Image alt='arrow' src={assets.right_arrow} className='w-4'/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
