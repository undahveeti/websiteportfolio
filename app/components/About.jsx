import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen bg-gray-50 dark:bg-darkTheme'>
      <div className='max-w-[1400px] mx-auto px-6 lg:px-12 py-20'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>Introduction</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>About me</h2>
        </motion.div>
        
        <div className='flex w-full flex-col lg:flex-row items-start gap-12 lg:gap-20'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full max-w-sm mx-auto lg:mx-0 lg:w-1/3'>
            <div className='sticky top-24'>
              <Image 
                src={assets.user_image} 
                alt='user' 
                className='w-full rounded-3xl shadow-lg'
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex-1'>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12'>
              I am an experienced Software Engineer with over 2 years of professional experience in the field. 
              Throughout my career, I have had the privilege of being at the forefront of multiple businesses 
              and start-ups, contributing to their success and growth.
            </motion.p>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <motion.li 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className='bg-white dark:bg-darkTheme border border-gray-200 dark:border-gray-700 
                           rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover 
                           hover:-translate-y-1 hover:shadow-black transform transition-all duration-300'
                >
                  <Image src={icon} alt={title} className='w-8 mb-4'/>
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-3'>{title}</h3>
                  <p className='text-gray-600 dark:text-gray-400'>{description}</p>
                </motion.li>
              ))}
            </ul>
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='my-6 text-gray-700 dark:text-gray-300'>
              Tools I use
            </motion.h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <motion.li 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                             bg-white dark:bg-darkTheme border border-gray-400 dark:border-gray-700 
                             rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                  key={index}
                >
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
