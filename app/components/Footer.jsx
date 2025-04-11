import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from "motion/react"

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 dark:bg-darkTheme'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className='text-2xl font-semibold dark:text-white mb-2'>Andy Tran</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='w-max flex items-center gap-2 mx-auto dark:text-white'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6'/>
          avtran0806@gmail.com
        </motion.div>
      </motion.div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6'>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='dark:text-gray-300'>© 2025 Andy Tran. All rights reserved.</motion.p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <a target='_blank' href="https://github.com/undahveeti" 
               className='dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors'>
              Github
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}>
            <a target='_blank' href="https://www.linkedin.com/in/tranandyv/" 
               className='dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors'>
              LinkedIn
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            <a target='_blank' href="https://www.instagram.com/andychungs/" 
               className='dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors'>
              Instagram
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
