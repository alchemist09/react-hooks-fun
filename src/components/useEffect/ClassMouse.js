import React, { Component } from 'react'

class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        <p>X - {x} &nbsp;&nbsp; Y - {y} </p>
      </div>
    )
  }
}

export default ClassMouse
