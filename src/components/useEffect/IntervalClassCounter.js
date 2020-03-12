import React, { Component } from 'react';

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div style={{ width: '70%', textAlign: 'center' }}>
        <h2>{count}</h2>
      </div>
    )
  }
}

export default IntervalClassCounter;
