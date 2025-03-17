import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { workData } from '@/assets/assets'

const Work = () => {
  return (
    <div id='work' className='w-full min-h-screen bg-gray-50 dark:bg-darkTheme px-6 lg:px-12 py-20'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>My portfolio</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>My latest work</h2>
          <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8'>
            Welcome to my development portfolio! Explore a collection of projects that showcase my skills and expertise in software development.
          </p>
        </div>

        <div className='grid grid-cols-auto my-10 gap-5'>
          {workData.map((project, index)=>(
            <div key={index} 
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{backgroundImage: `url(${project.bgImage})`}}>
              <div className='bg-white dark:bg-darkTheme dark:border dark:border-gray-700 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7'>
                <div className='p-5'>
                  <h2 className='font-semibold dark:text-white'>{project.title}</h2>
                  <p className='text-sm text-gray-700 dark:text-gray-400'>{project.description}</p>
                </div>    
                <div className='border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 dark:group-hover:bg-lime-500 transition'>
                  <Image src={assets.send_icon} alt='send icon' className='w-5'></Image>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 
                             border border-gray-300 dark:border-gray-700 rounded-full py-3 px-10 mx-auto my-20 
                             hover:bg-lightHover dark:hover:bg-darkHover duration-500'>
          Show more 
          <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4 group-hover:translate-x-1 transition-transform'></Image>
        </a>
      </div>
    </div>
  )
}

export default Work
