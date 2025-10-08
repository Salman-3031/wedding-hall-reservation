import React from 'react'
import { Star, Heart, Handshake, CalendarCheck } from "lucide-react";
import Title from '../Title/Title'

const servicesData = [
    {
        title: "Premium Quality",
        icon: Star,
        description: "Experience world-class amenities and flawless arrangements designed to make your wedding truly unforgettable.",
    },
    {
        title: "Trusted Service",
        icon: Handshake,
        description: "With years of experience and countless happy couples, we pride ourselves on reliability and excellence.",
    },
    {
        title: "Personal Touch",
        icon: Heart,
        description: "We tailor every detail — from décor to menu — to match your unique vision and create a celebration that feels like you.",
    },
    {
        title: "Easy Booking",
        icon: CalendarCheck,
        description: "Our seamless online booking process ensures a stress-free start to your event planning journey.",
    },
];
const HomeServices = () => {
    return (
        <section className="pb-10">
            <Title topheading="Why Choose Us" title="Exceptional Features for Your Special Day" description="Every detail matters when it comes to your wedding. Here's what makes us special."/>

                <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-background rounded-2xl shadow-sm hover:shadow-lg shadow-shadow transition-all duration-300 p-5 text-center"> 
                        <span className="flex justify-center mb-4 "><service.icon className='w-10 h-10 text-secondary'/></span>
                            <h3 className="text-xl font-semibold text-primary mb-2"> {service.title} </h3>
                            <p className="text-para text-sm leading-relaxed line-clamp-4"> {service.description} </p>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default HomeServices