import React, { Component } from 'react';

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1700);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  tick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
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
