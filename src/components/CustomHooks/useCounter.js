import { useState } from "react";

function useCounter(initialState) {
  const [count, setCount] = useState(initialState)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return [count, increment, decrement, reset];
}

export default useCounter