// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMediaIcons from './SocialMediaIcons';
import logo from '../logo.png'
import { socials } from './constant';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8 mt-12">
       {/* logo image */}
       <div className='flex justify-start md:justify-center'>
          <img src={logo} className='w-[200px] scale-150' alt="" srcset="" />
        </div>
      <div className="width-container flex  flex-col justify-center">
        <div className="flex flex-wrap justify-between ">         
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 container">
            <h3 className="text-xl font-semibold mb-4 text-white font-poppins-bold">About Us</h3>
            <p className="text-sm leading-relaxed font-Josefin_Sans">
              We are a professional  team dedicated to capturing your special moments with creativity and precision.
            </p>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white font-poppins-bold">Contact Us</h3>
            <ul className="space-y-2 font-Josefin_Sans">
              <li className="text-sm">1234 madetolove St, Photo City, PC 12345</li>
              <li className="text-sm">Phone: (123) 456-7890</li>
              <li className="text-sm">Email: info@madetolove.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white font-poppins">Follow Us</h3>
            <div className='flex justify-start gap-3'>
              {
              socials.map((item)=>(
                <div key={item.id} className=''>
                <SocialMediaIcons {...item}/>
                </div>
              ))
              }
            </div>
              
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-4 text-center text-sm">
          <p className='font-Josefin_Sans'>&copy; {new Date().getFullYear()} Made To Love. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
