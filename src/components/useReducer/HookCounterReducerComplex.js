import React, { useReducer } from 'react'

const initialState = {
  slowCounter: 0,
  fastCounter: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, slowCounter: state.slowCounter + action.value }
    case 'decrement':
      return { ...state, slowCounter: state.slowCounter - action.value }
    case 'increment_fast':
      return { ...state, fastCounter: state.fastCounter + action.value }
    case 'decrement_fast':
      return { ...state, fastCounter: state.fastCounter - action.value }
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
      <p>Fast Counter: {state.fastCounter}</p>
      <button onClick={ () => dispatch({ type: 'increment', value: 1 }) }>Increment</button>
      <button onClick={ () => dispatch({ type: 'decrement', value: 1 }) }>Decrement</button>
      <button onClick={ () => dispatch({ type: 'increment_fast', value: 5 }) }>Increment Fast</button>
      <button onClick={ () => dispatch({ type: 'decrement_fast', value: 5 }) }>Decrement Fast</button>
      <button onClick={ () => dispatch({ type: 'reset' }) }>Reset</button>
    </div>
  )
}

export default HookCounterReducerComplex
