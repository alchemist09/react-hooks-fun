import React from 'react'

const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action) {
    case 'incement':
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
  return (
    <div style={{ width: '70%', margin: '20px auto 60px' }}>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  )
}

export default HookCounterReducer
