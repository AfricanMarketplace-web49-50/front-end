import React from 'react';
import axios from 'axios';

import Prices from './prices';
import { PListHeader, ListWrapper, Wrapper, PLOption, PLSelect, PLHeadline } from './PriceListElements';

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
    id: 11,
    category: 'beans',
    name: 'beans test name',
    price: 'beans test price'
  },
  {
    id: 22,
    category: 'beans',
    name: 'beans test name',
    price: 'beans test price'
  },
  {
    id: 111,
    category: 'beans',
    name: 'beans test name',
    price: 'beans test price'
  },
  {
    id: 222,
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
    id: 33,
    category: 'vegetables',
    name: 'vegetables test name',
    price: 'vegetables test price'
  },
  {
    id: 44,
    category: 'vegetables',
    name: 'vegetables test name',
    price: 'vegetables test price'
  },
  {
    id: 333,
    category: 'vegetables',
    name: 'vegetables test name',
    price: 'vegetables test price'
  },
  {
    id: 444,
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
  {
    id: 55,
    category: 'fruits',
    name: 'fruits test name',
    price: 'fruits test price'
  },
  {
    id: 66,
    category: 'fruits',
    name: 'fruits test name',
    price: 'fruits test price'
  },
  {
    id: 555,
    category: 'fruits',
    name: 'fruits test name',
    price: 'fruits test price'
  },
  {
    id: 666,
    category: 'fruits',
    name: 'fruits test name',
    price: 'fruits test price'
  },
  
]


class PriceList extends React.Component {
  state = {
    category: '',
  }

  // componentDidMount() {
  //   axios.get('https://african-marketplace-web-49-50.herokuapp.com/api/items')
  //     .then(resp => {
  //       console.log(resp)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  handleSelect = e => {
    this.setState({
      ...this.state,
      category: e.target.value
    })
  }

  render() {
    return(
    <Wrapper>
      <PListHeader>
        <PLHeadline>Please Select a Category</PLHeadline>
        <PLSelect onChange={this.handleSelect}>
          <PLOption value=''></PLOption>
          <PLOption value='beans'>beans</PLOption>
          <PLOption value='vegetables'>vegetables</PLOption>
          <PLOption value='fruits'>fruits</PLOption>
        </PLSelect>
      </PListHeader>

      <ListWrapper>
      {
        (this.state.category !== '') && <Prices category={this.state.category} data={dummyData} />
        }
      </ListWrapper>

    </Wrapper>
  )}
}

export default PriceList;