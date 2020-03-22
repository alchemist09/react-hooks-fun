import React, { useState, useEffect } from 'react'

function HookInterval() {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1200)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div style={{ width: '50%', margin: '0.4em auto 4em'}}>
      <p>Hook Timer: {timer}</p>
    </div>
  )
}

export default HookInterval
