import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { serviceData } from '@/assets/assets'
import {motion} from "motion/react"

const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen bg-gray-50 dark:bg-darkTheme">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>What I offer</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>My Services</h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8'>
            I am a Software Engineer with 2+ years of experience, forefronting startups and automating processes for cost reduction.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-auto gap-6 my-10'>
          {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className='border border-gray-200 dark:border-gray-700 rounded-xl px-8 py-12 
                       bg-white dark:bg-darkTheme hover:bg-lightHover dark:hover:bg-darkHover 
                       hover:-translate-y-1 hover:shadow-black cursor-pointer 
                       transform transition-all duration-300'
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}>
                <Image src={icon} alt={title} className='w-10'/>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className='text-xl font-semibold text-gray-800 dark:text-white my-4'>{title}</motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className='text-gray-600 dark:text-gray-400 leading-relaxed'>{description}</motion.p>
              <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                href={link} 
                className='flex items-center gap-2 mt-6 text-gray-700 dark:text-gray-300 
                          hover:text-gray-900 dark:hover:text-white group'>
                Read more 
                <Image alt='arrow' src={assets.right_arrow} className='w-4 group-hover:translate-x-1 transition-transform'/>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
