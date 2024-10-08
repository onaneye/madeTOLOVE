// import { useState } from 'react';
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {navLinks} from '../Components/constant'

const Navbar = () => {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(prev => !prev);
  // };

  return (
    <div className='py-2'>
      <nav className="width-container  flex justify-between items-center border-b-2 shadow-xl">
        {/* Logo */}
        <div className='logo-container mx-3'>
          <img src={logo} alt="logo" className=''/> {/* Full width with automatic height */}
        </div>

        {/* Navigation Links */}
        <ul className='hidden md:flex items-center justify-between gap-8'>
          {navLinks.map((item) => (
            <li key={item.id} className='text-white font-helvetica text-[16px]'>
              <a href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className='hidden md:block px-6 py-2 text-purple-500 bg-white rounded-full font-helvetica text-sm cursor-pointer'>
          Contact
        </button>

        <div className='md:hidden mt-4 mx-6'>
        <FontAwesomeIcon icon={faBars} className='text-white text-xl cursor-pointer'/>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
