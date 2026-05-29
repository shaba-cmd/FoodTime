import { Link } from 'react-router-dom'
import { SButton } from './Button.styled'

const Button = ({ style, link, text, children }) => {
  return (
    <SButton $type={style}>
      <Link to={link}>
          {text}
          {children}
      </Link>
    </SButton>
  )
}

export default Button