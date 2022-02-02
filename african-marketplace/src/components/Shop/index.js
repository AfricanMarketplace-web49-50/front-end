import React from 'react';

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