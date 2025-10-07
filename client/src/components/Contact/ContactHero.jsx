import React from 'react'
// import { BiSolidContact } from "react-icons/bi";

const ContactHero = () => {
    return (
       <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,100,0.6)),url('https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.jpg?s=612x612&w=0&k=20&c=LgVzLcd_cxNDQrolZFFqg7AIQnTd_xBrvdWfr-eVoK8=')] 
      bg-cover bg-center">
         <div
            className="container pt-[80px] md:pt-[100px] min-h-screen h-full w-full 
       flex justify-center items-center flex-col"
        >
            <div className='flex gap-2 items-center px-4 py-1 rounded-full bg-black dark:bg-gray-100 w-max '>
                {/* <BiSolidContact className='text-white dark:text-black size-5' /> */}
                <p className=" font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Get In Touch
                </p>
            </div>
            <h3 className='text-3xl sm:text-4xl md:text-5xl text-white font-medium my-2'>Contact Us</h3>
            <p className='text-lightpara'>We're here to help you with any questions about our programs, admissions, or campus life</p>
        </div>

        
       </div>
    )
}

export default ContactHero
