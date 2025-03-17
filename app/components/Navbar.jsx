import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
      ${isScrolled ? "bg-white dark:bg-darkTheme bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
      <a href="#top">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Website logo" className='w-28 cursor-pointer mr-14' />
      </a>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
        ${isScrolled ? "" : "bg-white dark:bg-darkTheme border dark:border-gray-400 shadow-sm bg-opacity-50 dark:bg-opacity-50"}`}>
        <li><a href="#top" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">About me</a></li>
        <li><a href="#services" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Services</a></li>
        <li><a href="#work" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">My Work</a></li>
        <li><a href="#contact" className="dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Contact me</a></li>
      </ul>
      <div className='flex items-center gap-4'>
        <button onClick={()=>setIsDarkMode(prev => !prev)}>
          <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
        </button>
        <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 
          border border-gray-500 dark:border-gray-400 rounded-full ml-4 
          dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'>
          Contact
          <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow icon" className='w-3' />
        </a>
        <button className='block md:hidden ml-3' onClick={openMenu}>
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
        </button> 
      </div>
      {/* ----------------- mobile menu ------------------ */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 
        w-64 z-50 h-screen bg-rose-50 dark:bg-darkTheme border-l dark:border-gray-400 transition duration-500'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
          <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
        </div>
        <li><a onClick={closeMenu} href="#top" className="dark:text-white">Home</a></li>
        <li><a onClick={closeMenu} href="#about" className="dark:text-white">About me</a></li>
        <li><a onClick={closeMenu} href="#services" className="dark:text-white">Services</a></li>
        <li><a onClick={closeMenu} href="#work" className="dark:text-white">My Work</a></li>
        <li><a onClick={closeMenu} href="#contact" className="dark:text-white">Contact me</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
