import React, { useRef } from 'react'
import TechCard from './TechCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


import logo1 from '../assets/html logo.png'
import logo2 from '../assets/CSS logo.png'
import logo3 from '../assets/JS logo.png'
import logo4 from '../assets/Mongo Logo.png'
import logo5 from '../assets/Express  Logo.png'
import logo6 from '../assets/React Logo.png'
import logo7 from '../assets/node logo.png'
import logo8 from '../assets/Tailwind logo.png'
import logo9 from '../assets/Python logo.png'
import logo10 from '../assets/Github Logo.png'
import logo11 from '../assets/Docker Logo.png'


const TechStackSection = () => {
    
    const techStack = [
        {
            image: logo1,
            tech: 'Html',
            about: "HTML (HyperText Markup Language) is the foundational language used to structure and display content on the web."
        },
        {
            image: logo2,
            tech: 'Css',
            about: "CSS (Cascading Style Sheets) is used to style and visually design HTML elements on a webpage, controlling layout, colors, fonts, and more."
        },
        {
            image: logo3,
            tech: 'JavaScript',
            about: "JavaScript is a versatile scripting language used to create dynamic and interactive elements on websites."
        },
        {
            image: logo4,
            tech: 'Mongo DB',
            about: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for modern, scalable applications."
        },
        {
            image: logo5,
            tech: 'Express JS',
            about: "Express.js is a fast, minimalist Node.js web framework used to build robust APIs and web applications with ease."
        },
        {
            image: logo6,
            tech: 'React JS',
            about: 'React.js is a powerful JavaScript library for building fast, dynamic user interfaces using reusable components.'
        },
        {
            image: logo7,
            tech: 'Node JS',
            about: "Node.js is a runtime environment that allows you to run JavaScript on the server, enabling fast and scalable backend development."
        },
        {
            image: logo8,
            tech: 'Tailwind Css',
            about: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development by providing low-level classes directly in your HTML or JSX."
        },
        {
            image: logo9,
            tech: 'Python',
            about: "Python is a powerful, easy-to-read language used for web development, automation, and data science."
        },
        {
            image: logo10,
            tech: 'GitHub',
            about: "GitHub is a platform for hosting and collaborating on Git repositories, making code sharing and version control easier."
        },
        {
            image: logo11,
            tech: 'Docker',
            about: "Docker is a tool that packages applications into lightweight, portable containers for consistent deployment across environments."
        }
    ]

    const techStackDiv = useRef();
          useGSAP(()=>{
              gsap.from(techStackDiv.current, {
                  yPercent: 100,
                  opacity: 0,
                  duration: 1,
                  ease: "back.out(1.7)",
                  scrollTrigger: {
                      trigger: techStackDiv.current,
                      start: "top 80%",
                      toggleActions: 'play none none reverse'
                  }
              })
          })
    return (
        <div className='flex relative w-screen columns-3 box box-border flex-wrap gap-y-5 gap-x-5 justify-center px-5 md:px-0 overflow-hidden'>
            {
                techStack.map((tech, ind) => {
                    return <TechCard key={ind} data={tech} />
                })
            }

            <div ref={techStackDiv} className='flex items-center h-40 w-100 relative rounded-lg px-8 py-4 z-10 text-center overflow-hidden'>
                <div className='block box-border top-1/2 left-1/2'>
                    <h1 className='font-bold text-gray-300 font-lg text-center mb-0'>The Stack is Just the Start</h1>
                    <p className='font-normal text-gray-300 text-[12px] mt-0'>From here, the stack only gets smarter, stronger, and more powerful</p>
                </div>
            </div>

        </div>
    )
}

export default TechStackSection
