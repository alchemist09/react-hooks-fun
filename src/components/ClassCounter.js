import React, { Component } from 'react'

class ClassCounter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.title = "You clicked " + this.state.count + " times";
  }

  componentDidUpdate() {
    document.title = "You clicked " + this.state.count + " times";
  }}

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default ClassCounter;
