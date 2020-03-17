import React, { useReducer } from 'react';
import ComponentA from './components/useReducer/ComponentA';
import ComponentB from './components/useReducer/ComponentB';
import ComponentC from './components/useReducer/ComponentC';

export const CounterContext = React.createContext();

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
  const [countValue, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <CounterContext.Provider value={{ count: countValue, counterDispatch: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
