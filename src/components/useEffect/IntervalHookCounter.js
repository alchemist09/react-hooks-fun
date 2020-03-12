import React, { useState } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: '70%', textAlign: 'center', color: '#2a23fb' }}>
      <h4>{count}</h4>
    </div>
  )
}

export default IntervalHookCounter;
