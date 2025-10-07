import React from 'react'
import "./AboutHero.css"

const AboutHero = () => {
    return (
        <div className='bg-bglight dark:bg-bgdark'>
            <div className="container pt-[80px] md:pt-[100px] min-h-screen  grid justify-center items-center grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">

                {/* <div className="info"> */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-left  relative z-10 order-2 sm:order-1">
                    <div className='flex gap-2 items-center px-4 py-1 rounded-full bg-black dark:bg-gray-100 w-max '>
                        <p className=" font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Established in 2015
                        </p>
                    </div>
                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-3xl sm:text-4xl lg:text-7xl font-bold text-black dark:text-white'>TechnoSphereX Academy</h1>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm text-darkpara dark:text-lightpara" >
                        {/* {image.description} */} At TechnoSphereX Academy, we believe that education is more than just learning—it’s about growth, confidence, and opportunities. Our mission is to provide quality education and training that prepares students to excel academically, professionally, and personally
                    </p>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                    >
                    </div>
                </div>


                <div className="aboutImg place-self-center rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden bg-white dark:bg-bgdark order-1 sm:order-2">
                    <img className=' h-96 max-w-96 object-cover' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default AboutHero