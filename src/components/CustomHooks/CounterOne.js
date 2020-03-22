import React from 'react'
import useCounter from './useCounter'

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0)

  return (
    <div style={{ width: '60%', margin: '1em auto 4em'}}>
        <p>Counter One - {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
