import React from 'react'
import { LuUsers } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { CiMedal } from "react-icons/ci";


const AboutCardData = [
  { icon: LuUsers, number: "200+", title: "Students Enrolled" },
  { icon: CiMedal, number: '93%', title: "Success Rate" },
  { icon: IoBookOutline, number: '20+', title: "Programs Offered" },
  { icon: CiMedal, number: '8+', title: "Years of Excellence" },
]

const AboutCard = () => {
  return (
  <div className='bg-bglight dark:bg-bgdark'>
      <div className=" container  grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 ">
        {
          AboutCardData.map((data, index)=>(
            <div key={index} className='p-3 bg-lightpara dark:bg-darkpara flex justify-center flex-col items-center'>
                <span className='text-2xl text-black dark:text-white mb-2 p-3 rounded-full  shadow-inner shadow-black dark:shadow-white'><data.icon/></span>
                <h4 className='text-4xl font-medium text-black dark:text-white'>{data.number}</h4>
                <p className='dark:text-lightpara text-darkpara'>{data.title}</p>
            </div>
          ))
        }
    </div>
  </div>
  )
}

export default AboutCard