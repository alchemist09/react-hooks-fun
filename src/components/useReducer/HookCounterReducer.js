import React, { useReducer } from 'react'

const initialState = 0

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

function HookCounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ width: '70%', margin: '20px auto 60px' }}>
      <p>{state}</p>
      <button onClick={ () => dispatch('increment') }>Increment</button>
      <button onClick={ () => dispatch('decrement') }>Decrement</button>
      <button onClick={ () => dispatch('reset') }>Reset</button>
    </div>
  )
}

export default HookCounterReducer
