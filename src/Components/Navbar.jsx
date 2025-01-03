// import { useState } from 'react';
import { logo2 } from '../images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import {navLinks} from '../Components/constant';
import { useState } from 'react';

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState("Home")
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  const toggleNav = (label)=>{
    setNavbarActive(label)
  }

 
  return (
    <div className='py-2 fixed bg-white z-50 w-full shadow-lg'>
      <nav className="width-container  flex justify-between items-center border-b-2 ">
        {/* Logo */}
        <div className='logo-container ml-5'>
          <img src={logo2} alt="logo" className=''/> {/* Full width with automatic height */}
        </div>

        {/* Navigation Links */}
        <ul className='hidden lg:flex items-center justify-between gap-8'>
          {navLinks.map((item) => (
            <li key={item.id} className={`text-purple-500 font-helvetica text-[16px] hover:bg-purple-500 hover:text-white p-2 rounded-full ${navbarActive === item.label ? "bg-purple-500 text-white": ""}`}
              onClick={()=> toggleNav(item.label)}
            >
              <a href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button 
         className='hidden lg:block px-8 py-2 text-white bg-purple-500 font-bold rounded-full font-helvetica text-sm cursor-pointer'
        
        >
          <a href="tel:+2347040085037">
           <FontAwesomeIcon icon={faPhone}/>  Call Us
           </a>
        </button>

        <div className='lg:hidden mt-4 mx-6'  onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} className='text-purple-500 text-xl cursor-pointer'/>
        </div>
        <ul className={`${isMobileMenuOpen? "block": "hidden"} z-10 absolute top-[5.9rem] bg-purple-500 p-0 w-full text-start  shadow-xl`}>
          {navLinks.map((item) => (
            <li key={item.id} className={`font-helvetica text-[18px] mb-2 py-4 px-2 hover:bg-white hover:text-purple-500 ${item.active ? "bg-white text-purple-500": "text-white"}`}>
              <a href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;
