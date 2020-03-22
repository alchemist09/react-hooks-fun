import React, { Component } from 'react'

class ClassInterval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
  }

  render() {
    return (
      <div style={{ width: '50%', margin: '2em auto 4em'}}>
        <p>Class Timer: {this.state.timer}</p>
      </div>
    )
  }
}

export default ClassInterval
