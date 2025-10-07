import { useState } from "react";
import Title from '../Title/Title'
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import attaUllah from '../../assets/images/AboutTeam/attaUllah.jpg'
import shakeelAhmad from '../../assets/images/AboutTeam/shakeelAhmad.jpeg'
import team3 from '../../assets/images/AboutTeam/team3.jpg'


const TeamData = [
    {
        image: attaUllah,
        name: 'AttaUllah',
        role: 'Founder & CEO',
        description: 'Leading the academy with vision and dedication.',
        phone: '+92 300 1234567',
        email: 'attaullah@example.com',
        facebook: "https://facebook.com/attaullah",
        twitter: "https://twitter.com/attaullah",
    },
    {
        image: shakeelAhmad,
        name: 'Engr. Shakeel Ahmad',
        role: 'Sr. Network Engineer',
        description: 'A highly qualified networking professional with extensive experience in the field, Engr. Shakeel Ahmad Yousafzai is a certified trainer specializing in CCNA, CCNP, and Cybersecurity. Holding multiple international certifications including CCNA RS, CCNA CyberOps, CCNP, CEH, HCIA RS, HCIP RS, MCSA, MCSE, and MCP, he is passionate about delivering hands-on, industry-relevant training that prepares students for real-world IT environments. ',
        phone: '+92 311 9876543',
        email: 'shakeel@example.com',
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
    },
    {
        image: team3,
        name: 'John',
        role: 'designer',
        description: 'A highly qualified networking professional with extensive experience in the field, Engr. Shakeel Ahmad Yousafzai is a certified trainer specializing in CCNA, CCNP, and Cybersecurity. Holding multiple international certifications including CCNA RS, CCNA CyberOps, CCNP, CEH, HCIA RS, HCIP RS, MCSA, MCSE, and MCP, he is passionate about delivering hands-on, industry-relevant training that prepares students for real-world IT environments. ',
        phone: '+92 311 238974',
        email: 'john@example.com',
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
    }
];

const AboutTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="bg-bglight dark:bg-bgdark">
            <Title
                title={"Meet Our Dedicated Team"}
                description={"Our experienced instructors and staff are committed to guiding students toward academic excellence and personal growth."}
            />

            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 pb-10">
                {TeamData.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedMember(data)}
                        className="group relative rounded-sm h-80 overflow-hidden cursor-pointer"
                    >
                        <img
                            className="h-full w-full object-cover group-hover:blur-sm transition-all"
                            src={data.image}
                            alt="teamImage"
                        />

                        <div className="info-data bg-bgdark dark:bg-bglight p-3 absolute bottom-0 right-0 w-full translate-y-full group-hover:translate-y-0 transition-all duration-[0.4s]">
                            <h3 className="font-medium text-lg dark:text-black text-white ">{data.name}</h3>
                            <p className="dark:text-darkpara text-lightpara">{data.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">
                    <div className=" bg-bglight dark:bg-bgdark text-black dark:text-white p-6 rounded-lg max-w-2xl w-full relative">
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-2 right-2 text-darkpara text-xl"
                        >
                            ✖
                        </button>
                        <img src={selectedMember.image} alt={selectedMember.name} className="w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto mb-4 object-cover" />
                        <h2 className="text-xl sm:text-2xl font-bold text-center">{selectedMember.name}</h2>
                        <p className="text-center text-darkpara dark:text-lightpara mb-2">{selectedMember.role}</p>
                        <p className="text-center text-sm mb-2">{selectedMember.description}</p>
                        <p className="text-center text-sm">📞 {selectedMember.phone}</p>
                        <p className="text-center text-sm">📧 {selectedMember.email}</p>

                        <div className="flex justify-center gap-5 mt-4">
                        <a
                            href={selectedMember.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 text-2xl hover:text-blue-800"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href={selectedMember.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sky-400 text-2xl hover:text-sky-600"
                        >
                            <FaTwitter />
                        </a>
                    </div>


                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default AboutTeam;
