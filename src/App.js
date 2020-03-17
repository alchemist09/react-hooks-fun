import React from 'react';
import ComponentA from './components/useReducer/ComponentA';
import ComponentB from './components/useReducer/ComponentB';
import ComponentC from './components/useReducer/ComponentC';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
