import styled from "styled-components";

export const PListHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5853f;
  width: 70%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 1%;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-around;
  padding: 2%;
  margin-bottom: 2%;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  padding: 2%;
  margin-bottom: 2%;
  align-items: center;
`;

export const PLSelect = styled.select`
  width: 40%;
  border-radius: 5px;

`;

export const PLOption = styled.option`
  font-size: 1.5rem;
`;


export const PLHeadline = styled.h2`
  font-size: 2rem;
`;

export const ItemHeadline = styled.h2`
  font-size: 4rem;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  justify-content: space-around;
  padding: 2%;
  margin: 2%;
`;

export const ItemCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 40%;
  justify-content: space-around;
  padding: 2%;
  margin: 2%;
`;

export const ItemName = styled.h2`
  font-size: 1.5rem;
  border-bottom: 1px solid black;
  margin-bottom: 0;
`;

export const ItemPrice = styled.p`
  font-size: 1.25rem;
  margin-top: 0;
`;