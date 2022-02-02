import React from 'react';

const Item = props => {
  return(
    <div className='item'>
      <h3>{props.item.name}</h3>
      <h3>{props.item.price}</h3>
      <button> Buy </button>
    </div>
  )
}

export default Item;