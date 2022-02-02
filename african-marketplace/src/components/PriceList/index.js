import React from 'react';

import Prices from './prices';

const dummyData = [
  {
    id: 1,
    category: 'beans',
    name: 'beans test name',
    price: 'beans test price'
  },
  {
    id: 2,
    category: 'beans',
    name: 'beans test name',
    price: 'beans test price'
  },
  {
    id: 3,
    category: 'vegetables',
    name: 'vegetables test name',
    price: 'vegetables test price'
  },
  {
    id: 4,
    category: 'vegetables',
    name: 'vegetables test name',
    price: 'vegetables test price'
  },
  {
    id: 5,
    category: 'fruits',
    name: 'fruits test name',
    price: 'fruits test price'
  },
  {
    id: 6,
    category: 'fruits',
    name: 'fruits test name',
    price: 'fruits test price'
  },
]


class PriceList extends React.Component {
  state = {
    category: '',
  }

  handleSelect = e => {
    this.setState({
      ...this.state,
      category: e.target.value
    })
  }

  render() {
    return(
    <div>
      <h2>Please Select a Category</h2>
      <select onChange={this.handleSelect}>
        <option value='none'></option>
        <option value='beans'>beans</option>
        <option value='vegetables'>vegetables</option>
        <option value='fruits'>fruits</option>
      </select>

      {
        (this.state.category !== '') && <Prices category={this.state.category} data={dummyData} />
        }

    </div>
  )}
}

export default PriceList;