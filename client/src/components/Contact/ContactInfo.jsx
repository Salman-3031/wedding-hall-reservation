import React from 'react'
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";


const contactInfoData = [
    {
        icon: IoLocation,
        title: 'Visit Us',
        detail1:'123 Education Boulevard',
        detail2: 'Academic District, Knowledge City'
    },
    {
        icon: IoMdCall,
        title: 'Call Us',
        detail1:'Main: +1 (555) 123-4567',
        detail2: 'Admissions: +1 (555) 123-4568'
    },
    {
        icon: IoMdMail,
        title: 'Email Us',
        detail1:'info@pinnacleacademy.edu',
        detail2: 'admissions@pinnacleacademy.edu'
    },
    {
        icon: IoTimeSharp,
        title: 'Office Hours',
        detail1:'Monday - Friday: 8:00 AM - 6:00 PM',
        detail2: 'Sunday closed'
    },
]

const ContactInfo = () => {
  return (
    <div className='bg-bglight dark:bg-bgdark'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 py-20 ">
        {contactInfoData.map((data, index)=>(
            <div className='p-5 flex flex-col items-center rounded-sm shadow dark:shadow-[#ffffff28] shadow-[#0000004c]'
             key={index}>
                <span className='text-3xl mb-3 dark:text-white'><data.icon/></span>
                <h4 className='text-lg dark:text-white'>{data.title}</h4>
                <p className='text-darkpara dark:text-lightpara text-center'>{data.detail1}</p>
                <p className='text-darkpara dark:text-lightpara text-center'>{data.detail2}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default ContactInfo