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

function MultipleReducers() {
  const [counterOne, dispatch] = useReducer(reducer, initialState)
  const [counterTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div style={{ width: '70%', margin: '20px auto 60px' }}>
      <p>Counter One: {counterOne}</p>
      <button onClick={ () => dispatch('increment') }>Increment Counter One</button>
      <button onClick={ () => dispatch('decrement') }>Decrement Counter One</button>
      <button onClick={ () => dispatch('reset') }>Reset</button>
      <p>Counter Two: {counterTwo}</p>
      <button onClick={ () => dispatchTwo('increment') }>Increment Counter Two</button>
      <button onClick={ () => dispatchTwo('decrement') }>Decrement Counter Two</button>
      <button onClick={ () => dispatchTwo('reset') }>Reset</button>
    </div>
  )
}

export default MultipleReducers
