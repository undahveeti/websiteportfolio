import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative group"
      >
        <Image 
          src={assets.profile_img} 
          alt='Andy Tran profile picture' 
          className='rounded-full w-40 sm:w-48 md:w-56 transition-transform duration-300 group-hover:scale-105'
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute -bottom-2 -right-2 bg-black text-white px-3 py-1 rounded-full text-sm"
        >
          Available for work
        </motion.div>
      </motion.div>

      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3'
      >
        Hi! I'm Andy Tran  
        <motion.div
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          whileHover={{ rotate: 20 }}
        >
          <Image src={assets.hand_icon} alt='Waving hand icon' className='w-6'/>
        </motion.div>
      </motion.h3>

      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-bold text-black dark:text-white'
      >
        Software Engineer
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300'
      >
        I love building scalable applications with powerful backend systems that make things run smoothly. My passion is creating intuitive experiences that feel natural and effortless for everyone who uses them.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <motion.a 
          href="#contact" 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='px-10 py-3 rounded-full bg-black text-white flex items-center gap-2 shadow-lg hover:shadow-black/50'
        >
          Let's Connect 
          <motion.div
            initial={{ x: -5 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}>
            <Image src={assets.right_arrow_white} alt='Right arrow icon' className='w-4'/>
          </motion.div>
        </motion.a>
        
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Tran_Andy_Resume_2025.pdf" 
          download="Tran_Andy_Resume_2025.pdf"
          className='px-10 py-3 rounded-full border border-gray-300 dark:border-gray-700 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800'
        >
          Download CV
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity }}>
            <Image src={assets.download_icon} alt='Download icon' className='w-4'/>
          </motion.div>
        </motion.a>
      </div>
    </div>
  )
}

export default Header
