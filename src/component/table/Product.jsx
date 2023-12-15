import styled from "styled-components";
import { productData } from "../../utils/constans";
import { useContext } from "react";
import { TodosContext } from "../TodoContext";

const Product = () => {
  const { storeProduct, addTodoFunction } = useContext(TodosContext);

  return (
    <Container>
      <Ul>
        {storeProduct.map((el) => (
          <Li key={el.id}>
            <ImgContainer>
              <img src={el.url} alt="" />
            </ImgContainer>
            <DataProductContainer>
              <ProductText>
                {el.productName} - $ {el.staticPrice}
              </ProductText>
              <Button
                onClick={() => addTodoFunction(el.id)}
                disabled={el.quantity > 0}
              >
                Add
              </Button>
            </DataProductContainer>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};
export default Product;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const Li = styled.li`
  list-style: none;
  width: 200px;
  height: 310px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 8px rgba (0, 0, 0.259);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  padding: 10px;
`;

const ImgContainer = styled.div`
  width: 199;
  height: 170px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin-top: 20px;
    object-fit: cover;
  }
`;
const DataProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ProductText = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
`;
const Button = styled.button`
  border-radius: 4px;
  border: none;
  font-size: 1.8rem;
  padding: 10px 36px;
  background: linear-gradient(
    17deg,
    rgba(253, 29, 29, 0.79) 48%,
    rgba(252, 176, 69, 1) 100%
  );

  border: 2px solid #000;
  color: #fff;

  :hover {
    background-color: #000;
    color: yellow;
    border: 2px solid;
  }

  :disabled {
    background: linear-gradient(
      17deg,
      rgba(252, 246, 246, 0.79) 48%,
      #aea9a2 100%
    );
    color: #000;
    :hover {
      /* color: yellow; */
    }
  }
`;
