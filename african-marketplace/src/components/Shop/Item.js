import React from "react";
import { ItemCard, ItemName, ItemPrice, Button } from "./ShopElements";

const Item = (props) => {
  return (
    <ItemCard>
      <ItemName>{props.item.name}</ItemName>
      <ItemPrice>{props.item.price}</ItemPrice>
      <button> Buy </button>
    </ItemCard>
  );
};

export default Item;
