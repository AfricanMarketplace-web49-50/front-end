import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListOfItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  width: 80%;
`;
export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5853f;
  border: 1px solid black;
  border-radius: 15px;
  width: 75%;
  justify-content: space-around;
  padding: 2%;
  margin-bottom: 2%;
  align-items: center;
`;

export const ItemHeader = styled.h1`
  /* padding: 2%; */
  font-size: 3rem;
`;

export const Button = styled(Link)`
  display: flex;
  border: none;
  outline: 1px solid black;
  box-shadow: 2px 2px 5px black;
  background: #256ce1;
  white-space: nowrap;
  color: white;
  padding: 2% 4%;
  border-radius: 15px;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: #fff; //#d4d977 Vomit Green
    color: #010606;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  border: none;
  outline: 1px solid black;
  box-shadow: 2px 2px 5px black;
  background: #256ce1;
  white-space: nowrap;
  color: white;
  padding: 2% 4%;
  border-radius: 15px;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: #fff; //#d4d977 Vomit Green
    color: #010606;
  }
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid blue;
  width: 65%;
  justify-content: space-around;
  padding: 2%;
  margin: 2%;
`;

export const ItemName = styled.h2`
  font-size: 2.5rem;
`;

export const ItemPrice = styled.p`
  font-size: 2rem;
`;
