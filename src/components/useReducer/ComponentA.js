import React, { useContext } from 'react'
import { CounterContext } from '../../App'

function ComponentA() {
  const { count, counterDispatch } = useContext(CounterContext)

  return (
    <div>
      <span>Component A &nbsp; {count}</span>
      <button onClick={ () => counterDispatch('increment') }>Increment</button>
      <button onClick={ () => counterDispatch('decrement') }>Decrement</button>
      <button onClick={ () => counterDispatch('reset') }>Reset</button>
    </div>
  )
}

export default ComponentA
