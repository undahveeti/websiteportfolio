import React from 'react'
import {motion} from "motion/react"

const Experience = () => {
  const experiences = [
    {
      company: "TechStart Inc.",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      achievements: [
        "Led development of a scalable microservices architecture",
        "Reduced API response time by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      company: "Innovate Solutions",
      role: "Software Engineer",
      period: "2020 - 2022",
      achievements: [
        "Developed and maintained full-stack applications",
        "Implemented automated testing reducing bugs by 30%",
        "Collaborated with cross-functional teams on major features"
      ]
    }
  ];

  return (
    <div id='experience' className='w-full min-h-screen bg-gray-50 dark:bg-darkTheme px-6 lg:px-12 py-20'>
      <div className='max-w-[1400px] mx-auto'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>My Journey</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>Professional Experience</h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8'>
            A timeline of my professional growth and key achievements throughout my career.
          </motion.p>
        </motion.div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700'></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-1/2`}
            >
              <div className={`p-6 rounded-xl bg-white dark:bg-darkTheme border border-gray-200 dark:border-gray-700 
                shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                <div className='mb-4'>
                  <h3 className='text-xl font-semibold dark:text-white'>{exp.role}</h3>
                  <p className='text-gray-600 dark:text-gray-400'>{exp.company}</p>
                  <p className='text-sm text-gray-500 dark:text-gray-500'>{exp.period}</p>
                </div>
                <ul className='space-y-2'>
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + index * 0.2 }}
                      className='flex items-start gap-2 text-gray-700 dark:text-gray-300'
                    >
                      <span className='text-green-500 mt-1'>•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* Timeline dot */}
              <div className={`absolute top-6 w-4 h-4 rounded-full bg-blue-500 
                ${index % 2 === 0 ? '-left-2' : '-right-2'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience 