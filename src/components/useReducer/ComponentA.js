import React, { useContext } from 'react'
import { CounterContext } from '../../App'

function ComponentA() {
  const { counterDispatch } = useContext(CounterContext)

  return (
    <div>
      <span>Component A</span>
      <button onClick={ () => counterDispatch('increment') }>Increment</button>
      <button onClick={ () => counterDispatch('decrement') }>Decrement</button>
      <button onClick={ () => counterDispatch('reset') }>Reset</button>
    </div>
  )
}

export default ComponentA
