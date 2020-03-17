import React, { Component } from 'react';
import ClassContext from './ClassContext';
import HookContext from './HookContext';

class RandomClass extends Component {
  render() {
    return (
      <div>
        <ClassContext />
        <h2>Values from useContext Hook</h2>
        <HookContext />
      </div>
    )
  }
}

export default RandomClass;
