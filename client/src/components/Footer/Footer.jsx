import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { navLinks } from '../Navbar/Navbar';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='bg-[#d7d7d7] dark:bg-slate-900'>
            <div className="container pt-10 pb-24 grid grid-cols-1 sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr] gap-5">

                {/* first col start */}
                <div>
                    <h2
                        onClick={() => { navigate('/'); scrollTo(0, 0) }} className="logo-font text-2xl text-primary cursor-pointer tracking-wide mb-2"><span>Techno</span><span className="text-secondary">Sphere</span><span>X</span></h2>
                    <p className='text-darkpara dark:text-lightpara'>Opposite to SPS College, G.T Road, Rahimabad, Mingora, Swat</p>
                    <a
                        href="mailto:info@technospherex.com"
                        className="block text-primary hover:underline"
                    >
                        info@technospherex.com
                    </a>

                    <a
                        href="tel:+923195544288"
                        className="block text-primary hover:underline"
                    >
                        +92 319 5544288
                    </a>
                    <div className='social icons py-5 flex gap-5 flex-wrap'>

                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className='text-white bg-black dark:bg-bglight dark:text-[#1877F2] p-2 rounded-full transition hover:-translate-y-2'><FaFacebookF /></a>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            className='text-white bg-black dark:bg-bglight dark:text-[#1DA1F2] p-2 rounded-full transition hover:-translate-y-2'><FaTwitter /></a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className='text-white bg-black dark:bg-bglight dark:text-[#0A66C2] p-2 rounded-full transition hover:-translate-y-2'><FaLinkedinIn /></a>
                    </div>
                </div>
                {/* first col end */}

                {/* second col start */}
                <div >
                    <h2 className='text-xl mb-2 dark:text-white font-medium'>Pages</h2>
                    <ul className='flex flex-col gap-1'>
                        {navLinks.map((link, index) => (
                            <li key={index} className='w-max text-darkpara hover:text-black dark:text-lightpara hover:dark:text-secondary'><Link to={link.path}>{link.name}</Link></li>
                        ))}
                    </ul>
                </div>
                {/* second col end */}

                {/* third col start */}
                <div >
                    <h2 className='text-xl mb-2 dark:text-white font-medium'>Recent Post</h2>
                    <ul className='flex flex-col gap-1 list-inside md:list-outside list-disc px-1 sm:px-0'>
                        <li className=' text-darkpara hover:text-black dark:text-white hover:dark:text-lightpara'>Web Development For Your Business</li>
                        <li className=' text-darkpara hover:text-black dark:text-white hover:dark:text-lightpara'>15 ways to enhance your business online presence</li>
                        <li className=' text-darkpara hover:text-black dark:text-white hover:dark:text-lightpara'>test post 1</li>
                    </ul>
                </div>
                {/* third col end */}
            </div>

            <div className='divider h-px bg-gray-400 dark:bg-lightpara container'></div>
            <div className="copyright container py-3 bg-[#d7d7d7] dark:bg-slate-900 ">
                <p className="text-sm text-center dark:text-white">
                    © {new Date().getFullYear()} TechnoSphereX. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer