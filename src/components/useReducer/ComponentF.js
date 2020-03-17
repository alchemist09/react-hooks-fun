import React, { useContext } from 'react'
import { CounterContext } from '../../App'

function ComponentF() {
  const { count, counterDispatch } = useContext(CounterContext)

  return (
    <div>
      <span>Component F &nbsp; {count}</span>
      <button onClick={ () => counterDispatch('increment') }>Increment</button>
      <button onClick={ () => counterDispatch('decrement') }>Decrement</button>
      <button onClick={ () => counterDispatch('reset') }>Reset</button>
    </div>
  )
}

export default ComponentF
