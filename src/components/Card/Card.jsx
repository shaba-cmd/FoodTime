import { CardContainer, ImgBox, TextBox, Title, Text, PriceBox } from "./Card.styled"

const Card = ({ setCartCounter, img, title, text, price }) => {
  return (
    <CardContainer>
      <ImgBox>
        <img src={img} alt={title} />
      </ImgBox>
      <TextBox>
        <div>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
        <PriceBox>
          <p>Price: ${price}</p>
          <button onClick={() => {
            setCartCounter(e => e + 1)
          }}>Order</button>
        </PriceBox>
      </TextBox>
    </CardContainer>
  )
}

export default Card