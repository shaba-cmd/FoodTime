import { SItem, Title, Text } from './Item.styled.js'

const Item = ({ isActive, children, title, text, onClick }) => {
  return (
    <SItem $type={isActive} onClick={onClick}>
        <div>
          {children}
        </div>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </SItem>
  )
}

export default Item