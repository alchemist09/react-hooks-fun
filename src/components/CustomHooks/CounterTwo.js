import React, { useState } from 'react'

function CounterTwo() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div style={{ width: '60%', margin: '1em auto 4em'}}>
        <p>Counter One - {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
