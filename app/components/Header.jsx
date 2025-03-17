import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Header = () => {
  return (
    <div className = 'w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0, rotate: -180}}
      whileInView={{scale: 1, rotate: 0}}
      transition={{duration: 0.8,type: 'spring',stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration: 0.6,delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I'm Andy Tran  <motion.div
        initial={{ rotate: -45 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}>
        <Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.div>
      </motion.h3>
      <motion.h1 
      initial={{y: -30, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration: 0.8,delay: 0.5}}
      className = 'text-3xl sm:text-6xl lg:text-[66px]'>Software Engineer based in L.A.</motion.h1>
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6,delay: 0.7}}
      className='max-w-2xl mx-auto'>
        I am a Software Engineer with 2+ years of experience, forefronting startups and automating processes for cost reduction.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a href="#contact" 
        initial={{y: 30, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        whileHover={{ scale: 1.05 }}
        transition={{duration: 0.6,delay: 1}}
        className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >contact me <motion.div
          initial={{ x: -5 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}>
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.div></motion.a>
        <motion.a 
         initial={{y: 30, opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         whileHover={{ scale: 1.05 }}
         transition={{duration: 0.6,delay: 1.2}}
        href="/sample-resume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            my resume<motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}>
              <Image src={assets.download_icon} alt='' className='w-4'/>
            </motion.div></motion.a>
      </div>
    </div>
  )
}

export default Header
