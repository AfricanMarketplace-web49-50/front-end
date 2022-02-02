import React from 'react';

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
      <h1>{this.props.category}</h1>
      <div>
        {
          this.state.items.map(item => (
            <>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
              </>
            ))
          }

      </div>
      </>
    )
  }
}

export default Prices;