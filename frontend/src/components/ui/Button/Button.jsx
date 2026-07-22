import { Link } from 'react-router-dom'
import { SButton } from './Button.styled'

const Button = ({ styles, link, text, onClick, children }) => {
  return (
    <SButton 
      onClick={onClick}
      $type={styles}
    >
      <Link to={link}>
          {text}
          {children}
      </Link>
    </SButton>
  )
}

export default Button