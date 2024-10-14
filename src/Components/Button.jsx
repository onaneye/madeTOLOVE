import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({text, styles, icon}) => {
  return (
    <div className="my-4 flex justify-center lg:justify-start">
        <button className={`${styles} flex justify-center items-center gap-3`}>
                {text}
                <FontAwesomeIcon icon={icon} className="text-lg" />
        </button>
    </div>
  )
}

export default Button