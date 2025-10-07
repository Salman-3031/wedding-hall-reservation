import React from 'react'
import Title from '../Title/Title'
import { LuTarget } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { IoShieldSharp } from "react-icons/io5";



const OurValuesData = [
    { icon: LuTarget, title: "Excellence", description: "We strive for the highest standards in education and personal development." },
    { icon: FaHeart, title: 'Compassion', description: "Creating a supportive environment where every student feels valued and understood." },
    { icon: FaLightbulb, title: 'Innovation', description: "Embracing new technologies and methodologies to enhance learning experiences." },
    { icon: IoShieldSharp, title: 'Integrity', description: "Building character through honest, ethical, and transparent practices" },
]


const AboutOurValues = () => {
    return (
        <div className='bg-bglight dark:bg-bgdark'>
            <div className="container  pb-10">
            <div className="text-center">
                    <p className='px-2 py-px rounded-full bg-lightpara dark:bg-darkpara text-darkpara dark:text-lightpara text-sm mb-2 inline-block align-middle'>Our Values</p>
            </div>

                <Title title="What Drives Us Forward" description={"Our core values shape every decision we make and guide our commitment to educational excellence"} topdownpadding="py-0"/>

                <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-10 mt-10">
                    {
                        OurValuesData.map((data, index) => (
                            <div key={index} className='p-3 shadow-sm shadow-darkpara dark:shadow-lightpara flex justify-center flex-col items-center'>
                                <span className='text-2xl text-black dark:text-white mb-2 p-3 rounded-full  shadow-inner shadow-black dark:shadow-white'><data.icon /></span>
                                <h4 className='font-medium text-black dark:text-white'>{data.title}</h4>
                                <p className='dark:text-lightpara text-darkpara text-center'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutOurValues