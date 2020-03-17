import React, { useReducer } from 'react'

const initialState = {
  slowCounter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { slowCounter: state.slowCounter + action.value }
    case 'decrement':
      return { slowCounter: state.slowCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function HookCounterReducerComplex() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ width: '70%', margin: '20px auto 60px' }}>
      <p>Slow Counter: {state.slowCounter}</p>
      <button onClick={ () => dispatch({ type: 'increment', value: 1 }) }>Increment</button>
      <button onClick={ () => dispatch({ type: 'decrement', value: 1 }) }>Decrement</button>
      <button onClick={ () => dispatch({ type: 'reset' }) }>Reset</button>
    </div>
  )
}

export default HookCounterReducerComplex
