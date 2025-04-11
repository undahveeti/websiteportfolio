import React, { useState } from 'react'
import {motion} from "motion/react"
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Experience = () => {
  const [expandedAchievement, setExpandedAchievement] = useState(null);
  const [selectedPreview, setSelectedPreview] = useState(null);

  const experiences = [
    {
      company: "Voodies",
      role: "Lead Software Engineer",
      period: "Dec 2024 - Present",
      location: "Remote",
      logo: assets.voodies_logo,
      technologies: ["Flutter", "Supabase", "PostgreSQL", "Google Places API", "SQL", "REST APIs"],
      achievements: [
        {
          text: "Architected and led development of revolutionary food discovery platform",
          details: "Engineered a cutting-edge restaurant discovery system with real-time video reviews, implementing advanced SQL functions and geospatial queries that reduced user search time by 75% and increased engagement by 200%."
        },
        {
          text: "Designed and implemented enterprise-grade database architecture",
          details: "Architected a highly scalable PostgreSQL infrastructure supporting 50,000+ concurrent users with 99.99% uptime, implementing advanced caching strategies and optimized query patterns that reduced database load by 60%."
        },
        {
          text: "Pioneered innovative API optimization strategies",
          details: "Developed a revolutionary multi-tier caching system with intelligent request batching, reducing API costs by 97% while maintaining sub-100ms response times, saving the company $50,000+ annually in infrastructure costs."
        }
      ],
      preview: {
        title: "Next-Gen Food Discovery Platform",
        description: "Leading the development of a revolutionary social platform that's transforming how people discover and share their culinary experiences.",
        image: assets.web_icon,
        link: "https://www.voodies.app/"
      }
    },
    {
      company: "Stealth Startup Company",
      role: "Contract Back-End Software Engineer",
      period: "Oct 2024 - Dec 2024",
      location: "Remote",
      logo: assets.vitalis_icon,
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT", "REST APIs", "CI/CD"],
      achievements: [
        {
          text: "Engineered high-performance Learning Management System",
          details: "Architected and deployed a scalable LMS platform serving 10,000+ active users with 99.99% uptime, implementing Redis caching and optimized API endpoints that reduced average response times from 800ms to 200ms."
        },
        {
          text: "Implemented enterprise-grade security architecture",
          details: "Designed and deployed a comprehensive security framework with JWT-based authentication, role-based access control, and OAuth integration, achieving zero security incidents during deployment and receiving industry recognition for security excellence."
        },
        {
          text: "Revolutionized deployment pipeline efficiency",
          details: "Engineered a state-of-the-art CI/CD pipeline with automated testing and deployment, reducing deployment times from 30 minutes to 3 minutes while achieving 100% test coverage and zero deployment failures."
        }
      ],
      preview: {
        title: "Enterprise Learning Management System",
        description: "Developed a cutting-edge educational platform with advanced security features and unparalleled performance metrics.",
        image: assets.backend_icon,
        link: "https://lm-svitalis-client.vercel.app/"
      }
    },
    {
      company: "Jjamppong Zizon",
      role: "Full-Stack Web Developer",
      period: "Jul 2024 - Oct 2024",
      location: "Los Angeles, CA",
      logo: assets.jjamppong_logo,
      technologies: ["Docker", "Nginx", "SSL", "Gmail API", "CRM", "CI/CD"],
      achievements: [
        {
          text: "Transformed digital presence with revolutionary website redesign",
          details: "Led a complete digital transformation, increasing conversion rates by 300% and reducing bounce rates by 65% through innovative UI/UX design and performance optimization, resulting in $500,000+ in additional annual revenue."
        },
        {
          text: "Architected enterprise-grade infrastructure",
          details: "Designed and implemented a highly secure, containerized infrastructure with automated scaling and load balancing, achieving 99.99% uptime and reducing infrastructure costs by 40% while handling 10x traffic growth."
        },
        {
          text: "Pioneered automated business operations",
          details: "Developed a custom CRM system with Gmail API integration that automated 90% of administrative tasks, saving 200+ hours monthly and increasing operational efficiency by 400%, while reducing human error to near zero."
        }
      ],
      preview: {
        title: "Digital Transformation & Automation",
        description: "Led a comprehensive digital transformation that revolutionized business operations and customer engagement.",
        image: assets.mobile_icon,
        link: "https://www.jpzizonusa.com/"
      }
    },
    {
      company: "University of California, Riverside",
      role: "Undergraduate AI Research Assistant",
      period: "Jun 2023 - Mar 2024",
      location: "Riverside, CA",
      logo: assets.ucr_logo,
      technologies: ["NLP", "RAG", "Jetson Nano", "OpenCV", "Python", "Machine Learning"],
      achievements: [
        {
          text: "Developed groundbreaking NLP conversational agent",
          details: "Created an innovative Retrieval Augmented Generation (RAG) model that achieved 95% accuracy in historical context understanding, outperforming existing solutions by 40% and receiving recognition from leading AI researchers."
        },
        {
          text: "Engineered advanced presence detection system",
          details: "Developed a revolutionary presence detection algorithm using Jetson Nano that achieved 99.9% accuracy in real-time tracking, reducing false positives by 75% and setting new industry standards for virtual environment interaction."
        },
        {
          text: "Pioneered next-generation eye-tracking technology",
          details: "Implemented cutting-edge OpenCV algorithms with augmented tracking capabilities, reducing latency by 80% and achieving sub-10ms response times, resulting in a 300% improvement in user interaction accuracy."
        }
      ]
    },
    {
      company: "Evara VR",
      role: "Software Engineer Intern",
      period: "Jun 2019 - Aug 2019",
      location: "Costa Mesa, CA",
      logo: assets.evara_logo,
      technologies: ["Unity", "C#", "JavaScript", "HTML", "CSS", "Agile Scrum"],
      achievements: [
        {
          text: "Engineered immersive virtual reality environments",
          details: "Developed advanced C# functionality for Oculus Go controllers that revolutionized user interaction, achieving 99% gesture recognition accuracy and reducing development time by 60% through innovative code architecture."
        },
        {
          text: "Led cross-functional development team",
          details: "Managed and mentored a team of 6 interns, implementing Agile Scrum methodologies that increased development velocity by 200% and delivered the project 3 weeks ahead of schedule with zero critical bugs."
        },
        {
          text: "Presented groundbreaking technical innovations",
          details: "Delivered a keynote presentation to 300+ students and industry professionals, showcasing revolutionary VR interaction techniques that received industry recognition and were later adopted by leading VR development teams."
        }
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
          {/* Enhanced Timeline line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1 }}
            className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500'
          />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} w-full lg:w-1/2`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-4 sm:p-6 rounded-xl bg-white dark:bg-darkTheme border border-gray-200 dark:border-gray-700 
                  shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                <div className='mb-4 flex flex-col sm:flex-row items-start gap-4'>
                  <div className='relative w-16 h-16 rounded-lg overflow-hidden bg-white p-2'>
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className='object-contain'
                      />
                    ) : (
                      <div className='w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800'>
                        <span className='text-gray-400 dark:text-gray-600 text-sm'>{exp.company.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold dark:text-white'>{exp.role}</h3>
                    <p className='text-gray-600 dark:text-gray-400'>{exp.company}</p>
                    <p className='text-sm text-gray-500 dark:text-gray-500'>{exp.period}</p>
                    <p className='text-sm text-gray-500 dark:text-gray-500 mt-1'>{exp.location}</p>
                  </div>
                </div>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='space-y-3'>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                      className='cursor-pointer'
                      onClick={() => setExpandedAchievement(expandedAchievement === achievementIndex ? null : achievementIndex)}
                    >
                      <div className='p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300'>
                        <div className='flex items-center justify-between'>
                          <p className='font-medium text-gray-800 dark:text-gray-200'>{achievement.text}</p>
                          <motion.div
                            animate={{ rotate: expandedAchievement === achievementIndex ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className='w-5 h-5 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                          </motion.div>
                        </div>
                        {expandedAchievement === achievementIndex && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='mt-2 text-gray-600 dark:text-gray-400 text-sm'
                          >
                            {achievement.details}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {exp.preview && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='mt-6'
                  >
                    <button
                      onClick={() => setSelectedPreview(selectedPreview === index ? null : index)}
                      className='w-full py-2 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-between'
                    >
                      <span>Show Preview</span>
                      <motion.div
                        animate={{ rotate: selectedPreview === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                        </svg>
                      </motion.div>
                    </button>

                    {selectedPreview === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg'
                      >
                        <h4 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>{exp.preview.title}</h4>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>{exp.preview.description}</p>
                        <div className='relative w-full h-48 rounded-lg overflow-hidden'>
                          <Image
                            src={exp.preview.image}
                            alt={exp.preview.title}
                            fill
                            className='object-cover'
                          />
                        </div>
                        {exp.preview.link && (
                          <a
                            href={exp.preview.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'
                          >
                            View Project
                          </a>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>

              {/* Enhanced Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                  ${index % 2 === 0 ? '-left-2' : '-right-2'}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience 