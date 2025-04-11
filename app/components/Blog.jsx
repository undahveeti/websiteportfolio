import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from "motion/react"

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn how to design and implement scalable microservices architecture using Node.js and Docker.",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: assets.blog1, // You'll need to add this to your assets
      category: "Backend Development"
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Advanced techniques for improving React application performance and reducing bundle size.",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: assets.blog2, // You'll need to add this to your assets
      category: "Frontend Development"
    },
    {
      title: "CI/CD Best Practices",
      excerpt: "A comprehensive guide to setting up efficient CI/CD pipelines for your projects.",
      date: "February 10, 2024",
      readTime: "10 min read",
      image: assets.blog3, // You'll need to add this to your assets
      category: "DevOps"
    }
  ];

  return (
    <div id='blog' className='w-full min-h-screen bg-gray-50 dark:bg-darkTheme px-6 lg:px-12 py-20'>
      <div className='max-w-[1400px] mx-auto'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>Technical Insights</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>Blog & Articles</h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8'>
            Sharing knowledge and insights about software development, best practices, and industry trends.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white dark:bg-darkTheme rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative h-48'>
                <Image 
                  src={post.image} 
                  alt={post.title}
                  className='object-cover'
                  fill
                />
                <div className='absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm'>
                  {post.category}
                </div>
              </div>
              <div className='p-6'>
                <div className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4'>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className='text-xl font-semibold dark:text-white mb-2'>{post.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{post.excerpt}</p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className='inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Read more
                  <Image src={assets.right_arrow} alt='Read more' className='w-4'/>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-center mt-12'
        >
          <a 
            href="#" 
            className='inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full 
                      hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors duration-300'
          >
            View all articles
            <Image src={assets.right_arrow_white} alt='View all' className='w-4'/>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog 