import React, { useState } from 'react'
import {motion} from "motion/react"

const SkillsRadar = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skills = {
    'Frontend': [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 90 }
    ],
    'Backend': [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'REST API', level: 85 }
    ],
    'DevOps': [
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 75 }
    ]
  };

  const allSkills = Object.values(skills).flat();

  const getSkillColor = (level) => {
    if (level >= 90) return 'text-green-500';
    if (level >= 80) return 'text-blue-500';
    if (level >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div id='skills' className='w-full min-h-screen bg-gray-50 dark:bg-darkTheme px-6 lg:px-12 py-20'>
      <div className='max-w-[1400px] mx-auto'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h4 className='text-lg text-gray-600 dark:text-gray-400 mb-2'>Technical Expertise</h4>
          <h2 className='text-5xl font-semibold dark:text-white'>Skills Radar</h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8'>
            A visual representation of my technical skills and proficiency levels.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className='flex justify-center gap-4 mb-12'>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              selectedCategory === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            All Skills
          </button>
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='relative w-full aspect-square max-w-md mx-auto'>
            {/* Radar Chart Background */}
            <div className='absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full'></div>
            <div className='absolute inset-8 border-2 border-gray-200 dark:border-gray-700 rounded-full'></div>
            <div className='absolute inset-16 border-2 border-gray-200 dark:border-gray-700 rounded-full'></div>
            <div className='absolute inset-24 border-2 border-gray-200 dark:border-gray-700 rounded-full'></div>
            
            {/* Skills Points */}
            {(selectedCategory === 'all' ? allSkills : skills[selectedCategory]).map((skill, index) => {
              const angle = (index * 360) / (selectedCategory === 'all' ? allSkills.length : skills[selectedCategory].length);
              const radius = (skill.level / 100) * 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`absolute w-4 h-4 ${getSkillColor(skill.level)} rounded-full cursor-pointer`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className='absolute -top-8 left-0 w-max text-sm'>
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className='space-y-6'>
            {(selectedCategory === 'all' ? allSkills : skills[selectedCategory]).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex items-center gap-4 group cursor-pointer'
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`w-24 ${getSkillColor(skill.level)}`}>{skill.name}</div>
                <div className='flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${getSkillColor(skill.level).replace('text-', 'bg-')} rounded-full`}
                  />
                </div>
                <div className={`w-12 text-right ${getSkillColor(skill.level)}`}>{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Details Popup */}
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-darkTheme 
                     p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700'
          >
            <h3 className={`text-lg font-semibold ${getSkillColor(hoveredSkill.level)}`}>
              {hoveredSkill.name}
            </h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Proficiency Level: {hoveredSkill.level}%
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default SkillsRadar 