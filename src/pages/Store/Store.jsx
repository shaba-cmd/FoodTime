import { StoreContainer, Title, CardBox } from "./Store.styled"
import { card } from "../../../data"
import Card from "../../components/Card/Card"

const Store = ({ setCartCounter }) => {
  return (
    <StoreContainer className="container">
      <Title>Store</Title>
      <CardBox>
        {card.map((el) => {
          return (
            <Card
              setCartCounter={setCartCounter}
              key={el.id}
              img={el.img}
              title={el.title}
              text={el.text}
              price={el.price}
            />
          )
        })}
      </CardBox>
    </StoreContainer>
  )
}

export default Store