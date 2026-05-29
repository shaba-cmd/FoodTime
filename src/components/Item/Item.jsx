import { SItem, Title, Text } from './Item.styled.js'

const Item = ({ children, title, text }) => {
  return (
    <SItem>
        <div>
          {children}
        </div>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </SItem>
  )
}

export default Item