import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({text, styles, icon, link}) => {
  return (
    <div className="my-4 flex justify-center lg:justify-start">
      <a href={link}>
        <button className={`${styles} flex justify-center items-center gap-3`}>
                {text}
                <FontAwesomeIcon icon={icon} className="text-lg" />
        </button>
      </a>
    </div>
  )
}

export default Button