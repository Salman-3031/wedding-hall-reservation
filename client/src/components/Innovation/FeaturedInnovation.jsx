import React from 'react'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'

export const InnovationData = [
    {
        image: 'https://images.unsplash.com/photo-1718241905696-cb34c2c07bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGtleWJvYXJkJTIwYXNzaXN0aXZlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkzODE0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        status: 'Deployment',
        technology: 'assistie Technologyy',
        title: "Smart Keyboard for Paralysis Patients",
        description: 'Introducing our groundbreaking project, the ‘Smart Keyboard for Paralysis Patients.’ We’re proud to contribute technology that empowers accessibility, allowing individuals with paralysis to communicate effortlessly and enhance their daily lives.',
        about: 'this is about',
        features: ['99.7% accurate eye-tracking technology'
            , 'Multi-modal input (eye tracking, voice, head movements)',
            'AI-powered predictive text and auto-completion'
        ]
    },
    {
        image: 'https://miro.medium.com/1*k3OU519iKbNHycQXdiRraw.jpeg',
        status: 'Production',
        technology: 'educative Technologyy',
        title: "LMS for TechnosphereX Institute",
        description: 'the ‘Smart Keyboard for Paralysis Patients.’ We’re proud to contribute technology that empowers accessibility, allowing individuals with paralysis to communicate effortlessly and enhance their daily lives.',
        about: 'this is about',
        features: ['99.7% accurate eye-tracking technology'
            , 'Multi-modal input (eye tracking, voice, head movements)',
            'AI-powered predictive text and auto-completion'
        ]
    },
]

const FeaturedInnovation = () => {
    return (
        <div className='bg-bglight dark:bg-bgdark'>
            <Title title="Featured Innovations" description="Discover our latest breakthrough technologies that are making a real difference in people's lives" />

            <div className="container  pb-10 ">
                {
                    InnovationData.map((data, index) => (
                        <div key={index} className='space-y-4 overflow-hidden rounded-md shadow shadow-[#0000004b] dark:shadow-[#ffffff40] mb-5 relative'>
                            <div className="image w-full h-60 ">
                                <img className='h-full w-full object-cover' src={data.image} alt="" />
                            </div>
                            <div className='flex justify-between absolute top-0 left-0 right-0 px-3'>
                               {data.technology &&  <button className='bg-white text-black text-sm px-3 py-1 rounded-full'>{data.technology}</button>}
                              {data.status &&   <button className='bg-secondary  text-white text-sm px-3 py-1 rounded-full'>{data.status}</button>}
                            </div>
                            <div className="info p-3">
                                <h4 className='text-black dark:text-white text-2xl font-medium'>{data.title}</h4>
                                <p className='text-darkpara  dark:text-lightpara line-clamp-6'>{data.description}</p>
                                <button
                                    className='bg-primary hover:bg-primary/90 px-5 py-2 rounded-md mt-3 text-white'>
                                        {/* go to featuredInnovation.jsx */}
                                    <Link
                                        to={`/innovation/${index}`}
                                        onClick={()=>window.scrollTo({top:0, behavior: 'smooth'})}
                                    >Read More</Link>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedInnovation