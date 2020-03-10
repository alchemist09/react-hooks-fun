import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  increment = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      })
    );
  }

  render() {
    return (
      <button onClick={this.increment}>Count {this.state.count}</button>
    )
  }
}

export default Counter;