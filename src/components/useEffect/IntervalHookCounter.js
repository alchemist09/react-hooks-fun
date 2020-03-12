import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      console.log('tick() called................')
      console.log("count: ", count);
      setCount(count + 1);
    }

    const interval = setInterval(tick, 1500);
    return () => {
      clearInterval(interval);
    }
  }, [count])

  return (
    <div style={{ width: '70%', textAlign: 'center', color: '#2a23fb' }}>
      <h4>{count}</h4>
    </div>
  )
}

export default IntervalHookCounter;
