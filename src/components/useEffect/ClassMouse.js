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
    console.log('mouse move event happening');
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (evt) => {
    this.setState({
      x: evt.clientX,
      y: evt.clientY
    })
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
