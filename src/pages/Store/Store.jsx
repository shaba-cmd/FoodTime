import { StoreContainer, Title, CardBox } from "./Store.styled"
import { useEffect, useState } from "react";
import { getProducts } from "../../api";
import Card from "../../components/Card/Card"

const Store = ({ setCartCounter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <StoreContainer className="container">
      <Title>Store</Title>
      <CardBox>
        {products.map((el) => {
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