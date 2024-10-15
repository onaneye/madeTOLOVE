import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaIcons = ({icon, name, link}) => {
  return (
    <div className=' bg-white flex justify-center items-center w-10 h-10 rounded-full p-3 hover:bg-purple-500 hover:text-white cursor-pointer'>
    <a href={link} className='text-purple-500 text-lg hover:text-white'><FontAwesomeIcon icon={icon} /></a>
    </div>
  )
}

export default SocialMediaIcons