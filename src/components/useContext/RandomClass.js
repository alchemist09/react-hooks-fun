import React, { Component } from 'react';
import ClassContext from './ClassContext';
import HookContext from './HookContext';

class RandomClass extends Component {
  render() {
    return (
      <div>
        <h2>Values from Traditional React Context API</h2>
        <ClassContext />
        <h2>Values from useContext Hook</h2>
        <HookContext />
      </div>
    )
  }
}

export default RandomClass;
