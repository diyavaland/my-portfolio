import { assets, serviceData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image';


const Skills = () => {
  // State to track which index is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // collapse if already expanded
    } else {
      setExpandedIndex(index); // expand selected
    }
  };

  return (
    <div id="skills" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What Skills I have</h4>
      <h2 className='text-center text-5xl font-Ovo'>Skills</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
        I bring a diverse skill set in both front-end and back-end development, with hands-on experience in building responsive web applications using React, JavaScript, HTML, and CSS. I’m also proficient in backend technologies like Node.js, Python, and SQL, with a solid foundation in database management using MongoDB and MySQL. My understanding of Agile methodologies, API integration, and version control with Git enables me to work efficiently in collaborative environments and deliver scalable, maintainable code.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, moreDetails}, index) => (
          <div
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-lime-100 hover:shadow-[8px_0_1px_rgba(0,0,0,0.6)]'
          >
            <Image src={icon} alt='' className='w-10'/>
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>
              {/* Show short description or expanded detail */}
              {expandedIndex === index ? moreDetails || description : description}
            </p>

            <button
              onClick={() => toggleExpand(index)}
              className='flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline'
            >
              {expandedIndex === index ? 'Show Less' : 'Read More'}
              <Image alt='' src={assets.right_arrow} className='w-4'/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
