import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from "motion/react"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      image: assets.testimonial1, // You'll need to add this to your assets
      quote: "Andy's technical expertise and problem-solving skills were instrumental in our project's success. His ability to deliver high-quality code under tight deadlines is impressive.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateX",
      image: assets.testimonial2, // You'll need to add this to your assets
      quote: "Working with Andy was a pleasure. His attention to detail and commitment to best practices resulted in a robust and scalable solution for our platform.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Developer at CodeCraft",
      image: assets.testimonial3, // You'll need to add this to your assets
      quote: "Andy's collaborative approach and technical knowledge made him an invaluable team member. He consistently delivered innovative solutions to complex problems.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id='testimonials' className='w-full min-h-screen bg-gray-50 dark:bg-darkTheme px-6 lg:px-12 py-20'>
      <div className='max-w-[1400px] mx-auto'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>Client Feedback</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>Testimonials</h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8'>
            What people I've worked with have to say about my work and collaboration.
          </motion.p>
        </motion.div>

        <div className='relative max-w-4xl mx-auto'>
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10
                      w-10 h-10 rounded-full bg-white dark:bg-darkTheme shadow-lg
                      flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800
                      transition-colors duration-300'
          >
            <Image src={assets.left_arrow} alt='Previous' className='w-4'/>
          </button>
          <button 
            onClick={nextTestimonial}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10
                      w-10 h-10 rounded-full bg-white dark:bg-darkTheme shadow-lg
                      flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800
                      transition-colors duration-300'
          >
            <Image src={assets.right_arrow} alt='Next' className='w-4'/>
          </button>

          {/* Testimonials Carousel */}
          <div className='relative h-[400px] overflow-hidden'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  scale: index === activeIndex ? 1 : 0.9
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex items-center justify-center ${
                  index === activeIndex ? 'z-10' : 'z-0'
                }`}
              >
                <div className='bg-white dark:bg-darkTheme rounded-xl p-8 shadow-lg w-full max-w-2xl mx-auto'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='w-16 h-16 rounded-full overflow-hidden'>
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold dark:text-white'>{testimonial.name}</h3>
                      <p className='text-gray-600 dark:text-gray-400'>{testimonial.role}</p>
                    </div>
                  </div>
                  <p className='text-gray-700 dark:text-gray-300 text-lg mb-6'>{testimonial.quote}</p>
                  <div className='flex gap-1'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Image 
                        key={i} 
                        src={assets.star_icon} 
                        alt='Star' 
                        className='w-5'
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials 