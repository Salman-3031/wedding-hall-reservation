import React from 'react'
// import { BiSolidContact } from "react-icons/bi";

const Innovationhero = () => {
    return (
        <div className="  bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,100,0.6)),url('https://s44650.pcdn.co/wp-content/uploads/2024/06/best-financial-innovations-2024-scaled.jpg')] 
  bg-cover bg-center">
            <div
                className="container pt-[80px] md:pt-[100px] min-h-screen h-full w-full 
 flex justify-center items-center flex-col"
            >
                <div className='flex gap-2 items-center px-4 py-1 rounded-full bg-black dark:bg-gray-100 w-max'>
                    {/* <BiSolidContact className='text-white dark:text-black size-5' /> */}
                    <p className=" font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Innovative Hub
                    </p>
                </div>
                <h3 className='text-3xl sm:text-4xl md:text-5xl text-white font-medium my-2'>Pioneering Tomorrow's Solutions</h3>
                <p className='text-lightpara text-center'>At TechnoSphereX Academy, we're not just teaching the future—we're creating it. Our innovation lab develops cutting-edge technologies that solve real-world problems.</p>
            </div>


        </div>
    )
}

export default Innovationhero
