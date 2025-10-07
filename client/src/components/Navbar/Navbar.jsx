import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";

export const navLinks = [
    { name:<FaHome/> ,  path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`z-50 fixed top-0 left-0 w-full bg-transparent ${isScrolled && "shadow-md shadow-para/30 !bg-background"}`}>
            <nav className={`container flex items-center justify-between transition-all duration-500 ${isScrolled ? "py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <div onClick={() => navigate('/')}>
                    <h2
                        className="font-curly font-bold text-2xl text-primary cursor-pointer tracking-wide"><span>Wedding</span><span className="text-secondary">Hall</span></h2>
                </div>

                {/* Desktop Menu */}
                  <ul className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <NavLink to={link.path}
                            key={i}
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className={({ isActive }) => `relative overflow-hidden h-6 group ${isActive ? 'text-secondary' : "text-primary"}`}>
                            <span className={`block group-hover:-translate-y-full transition-transform duration-300`}>{link.name}</span>
                            <span
                                className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{link.name}</span>
                        </NavLink>
                    ))}
                         <button className="bg-secondary text-white rounded-sm px-4 py-1">Login</button>
                </ul>

                    <div className="flex items-center gap-3 md:hidden">
                        <FaBarsStaggered className="text-darkpara  dark:text-lightpara size-5" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>



                {/* Mobile Menu */}
                <ul className={` fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <RxCross2 onClick={() => setIsMenuOpen(false)}
                        className="absolute size-6 top-6 right-4 text-para"
                    />

                    {navLinks.map((link, i) => (
                        <NavLink
                            onClick={() => {setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" })}}
                            to={link.path} key={i} 
                            className={({ isActive }) => `relative overflow-hidden h-6 group ${isActive ? 'text-secondary' : "text-primary"}`}>
                            <span className={`block group-hover:-translate-y-full transition-transform duration-300`}>{link.name}</span>
                            <span
                                className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{link.name}</span>
                        </NavLink>
                    ))}
                       <button className="md:hidden bg-secondary text-white rounded-sm px-4 py-1">Login</button>
                </ul>
               
            </nav>
        </header>
    );
}

export default Navbar