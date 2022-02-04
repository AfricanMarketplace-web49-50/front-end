import React from "react";
import { ItemCard, ItemName, ItemPrice, BuyButton } from "./ShopElements";

const Item = (props) => {
  return (
    <ItemCard>
      <ItemName>{props.item.name}</ItemName>
      <ItemPrice>{props.item.price}</ItemPrice>
      <BuyButton> Buy </BuyButton>
    </ItemCard>
  );
};

export default Item;
