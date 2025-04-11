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

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
              {infoList.map(({icon, iconDark, title, description, icons, logos, link}, index) => (
                <motion.li 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className='group bg-white dark:bg-darkTheme border border-gray-200 dark:border-gray-700 
                           rounded-xl p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 
                           hover:shadow-lg transform transition-all duration-300 relative overflow-hidden'
                  onClick={() => link && (window.location.hash = link)}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-darkTheme 
                                  border border-gray-200 dark:border-gray-700 rounded-lg group-hover:bg-gray-50 
                                  dark:group-hover:bg-gray-800 transition-colors duration-300">
                      <Image 
                        src={icon} 
                        alt={title} 
                        className='w-6 h-6 group-hover:scale-110 transition-transform duration-300'
                      />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 dark:text-white group-hover:text-gray-900 
                                 dark:group-hover:text-gray-100 transition-colors duration-300'>
                      {title}
                    </h3>
                  </div>

                  <div className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                    {icons && (
                      <div className="flex flex-wrap gap-4">
                        {icons.map(({src, alt}, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-center justify-center w-12 h-12 bg-white dark:bg-darkTheme 
                                     border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 
                                     dark:hover:bg-gray-800 transition-colors duration-300"
                          >
                            <Image src={src} alt={alt} className="w-6 h-6" />
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {logos && (
                      <div className="space-y-4">
                        {logos.map(({src, alt, text}, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-darkTheme 
                                          border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 
                                          dark:hover:bg-gray-800 transition-colors duration-300">
                              <Image 
                                src={src} 
                                alt={alt} 
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            <span className="text-sm">{text}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {description && !icons && !logos && (
                      <p>{description}</p>
                    )}
                  </div>

                  {link && (
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image 
                        src={assets.right_arrow} 
                        alt="View projects" 
                        className="w-5 h-5"
                      />
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
            <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index) => (
                <motion.li 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                           bg-white dark:bg-darkTheme border border-gray-200 dark:border-gray-700 
                           rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-md 
                           transition-all duration-300' 
                  key={index}
                  title={tool.alt}
                >
                  <Image 
                    src={tool.src} 
                    alt={tool.alt} 
                    className='w-5 sm:w-7 object-contain'
                  />
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
