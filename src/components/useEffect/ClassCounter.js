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

  componentDidUpdate(prevProps, prevState) {
    document.title = "You clicked " + this.state.count + " times";
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click { this.state.count } times</button>
      </div>
    )
  }
}

export default ClassCounter;
