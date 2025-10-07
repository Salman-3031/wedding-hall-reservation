import React from 'react'

const AboutStory = () => {
    return (
        <div className='bg-bglight dark:bg-bgdark'>
            <div className="container sm:py-10">
                <p className='px-2 py-px rounded-full bg-lightpara dark:bg-darkpara text-darkpara dark:text-lightpara text-sm inline-block mb-2 align-middle'>Our Story</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10">
                    <div>
                        <h1 class=" sm:text-4xl text-3xl mb-1 font-medium text-black dark:text-white">Building TechnoSphereX Since 2015
                        </h1>
                        <div class="mb-8 leading-relaxed text-darkpara dark:text-lightpara space-y-2">
                            <p>Founded with a vision to democratize quality education, Pinnacle Academy has grown from a small institution with 200 students to a prestigious academy serving over 15,000 learners worldwide.</p>
                            <p>
                                Our journey began when visionary educator Dr. Robert Thompson recognized the need for an institution that combined academic rigor with practical application. Today, we continue that legacy by preparing students for the challenges of tomorrow.</p>

                            <p>Through five decades of innovation, we've maintained our commitment to excellence while evolving our methods to meet the changing needs of our global community.</p>

                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AboutStory