import React, { useState } from 'react'

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  return (
    <div>
      <p>
        <button onClick={incrementOne}>Counter One: {counterOne}</button>
      </p>
      <p>
        <button onClick={incrementTwo}>Counter Two: {counterTwo}</button>
      </p>
    </div>
  )
}

export default MemoCounter
