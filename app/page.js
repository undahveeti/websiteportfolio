'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Experience from "./components/Experience";
import SkillsRadar from "./components/SkillsRadar";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: dark)').matches){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Experience isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <SkillsRadar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Blog isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>  
    <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  );
}
