import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 dark:bg-darkTheme'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto dark:text-white'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6'/>
          avtran0806@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6'>
        <p className='dark:text-gray-300'>© 2025 Andy Tran. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href="https://github.com/undahveeti" 
               className='dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors'>
              Github
            </a>
          </li>
          <li>
            <a target='_blank' href="https://www.linkedin.com/in/tranandyv/" 
               className='dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors'>
              LinkedIn
            </a>
          </li>
          <li>
            <a target='_blank' href="https://www.instagram.com/andychungs/" 
               className='dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
