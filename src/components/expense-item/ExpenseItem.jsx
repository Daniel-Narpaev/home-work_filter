import styled from "styled-components";

export const ExpenseItem = ({ date, title, price }) => {
  return (
      <ItemBox>
        <TitleDateBox>
          <DateBox>{date.toString()}</DateBox>
          <Title>{title}</Title>
        </TitleDateBox>

        <PriceBox>{price} som</PriceBox>
      </ItemBox>
  );
};

const ItemBox = styled.div`
  width: 100%;
  background-color: #3f3f3f;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px 16px;
  margin-top: 30px;
`
const Title = styled.p`
  color: white;
  margin-left: 20px;
`
const PriceBox = styled.p`
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 20px;
  color: white;
`
const DateBox = styled.p`
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 8px 10px;
`
const TitleDateBox = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
