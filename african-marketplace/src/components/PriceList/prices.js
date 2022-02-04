import React from 'react';
import { ItemCard, ItemName, ItemPrice, ItemHeadline, ItemCardWrapper } from './PriceListElements';

class Prices extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      items: this.props.data.filter(obj => { return obj.category === this.props.category})
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
      this.setState({
        ...this.state,
        items: this.props.data.filter(obj => { return obj.category === this.props.category})
      })
    }
  }


  render() {
    return (
      <>
      <ItemHeadline>{this.props.category}</ItemHeadline>
      <ItemCard>
        {
          this.state.items.map(item => (
            <ItemCardWrapper>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}</ItemPrice>
              </ItemCardWrapper>
            ))
          }

      </ItemCard>
      </>
    )
  }
}

export default Prices;