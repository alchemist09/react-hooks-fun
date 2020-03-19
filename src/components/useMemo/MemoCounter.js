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

  const isPrime = num => {
    let k=0
    while(k < 2000000000) k++
    if(num < 1) {
      return false
    } else {
      for(let i=2; i <= num/2; i++) {
        if(num % i === 0) {
          return false
        } 
      }
      return true
    }
  }

  return (
    <div style={{ width: '60%', margin: '2em auto' }}>
      <p>
        <button onClick={incrementOne}>Counter One: {counterOne}</button>
        <span>{ isPrime(counterOne) ? 'Prime' : 'Note Prime'}</span>
      </p>
      <p>
        <button onClick={incrementTwo}>Counter Two: {counterTwo}</button>
      </p>
    </div>
  )
}

export default MemoCounter
