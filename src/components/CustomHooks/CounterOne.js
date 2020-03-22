import React, { useState } from 'react'

function CounterOne() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width: '60%', margin: '1em auto 4em'}}>
        <p>Counter One - {count}</p>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
    </div>
  )
}

export default CounterOne
