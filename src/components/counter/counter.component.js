import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCounter = () => this.setState(prevState => ({count: prevState.count + 1,}));
  decrementCounter = () => this.setState(prevState => ({count: prevState.count - 1,}));
  resetCounter = () => this.setState({count: 0,});


  render() {
    return (
      <div className="counter">
        <div>
        Counter: {this.state.count}
        </div>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
        <button onClick={this.resetCounter}>RESET</button>
      </div>
    )
  }
}

export default Counter;
