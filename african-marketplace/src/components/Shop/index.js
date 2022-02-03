import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Item from './Item';

const dummyData = [
  {
    id: 1,
    name:'garbanzo',
    price:'$1.20'
  },
  {
    id: 2,
    name:'garbanzo I',
    price:'$1.20'
  },
  {
    id: 3,
    name:'garbanzo II',
    price:'$1.20'
  },
  {
    id: 4,
    name:'garbanzo III',
    price:'$1.20'
  },
  {
    id: 5,
    name:'sprouts',
    price:'$2.20'
  },
  {
    id: 6,
    name:'greens',
    price:'$1.25'
  },
]

const Shop = () => {
  return(
    <div>
      <div className='addItem-button'>
        <Button to='/shop/add-item' >Add Item </Button>
      </div>
      <h1>List of Items</h1>
			{dummyData.map(item => (
        <Item
          key={item.id}
          item={item} />
      ))}
    </div>
  )
}

export default Shop;

const Button = styled(Link)`
  background: #256ce1;
  color: white;
  padding: 2% 4%;
  border-radius: 10px;
  text-decoration: none;
  &:hover{
    cursor:pointer;
    background: #fff; //#d4d977 Vomit Green
    color: #010606;
  }
`