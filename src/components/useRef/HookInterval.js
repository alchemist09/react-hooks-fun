import React, { useState } from 'react'

function HookInterval() {
  const [timer, setTimer] = useState(0)

  return (
    <div style={{ width: '50%', margin: '0.4em auto 4em'}}>
      <p>Hook Timer: {timer}</p>
    </div>
  )
}

export default HookInterval
