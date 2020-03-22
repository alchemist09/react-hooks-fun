import React, { useState, useEffect, useRef } from 'react'

function HookInterval() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1200)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div style={{ width: '50%', margin: '0.4em auto 4em'}}>
      <p>
        Hook Timer: {timer}
        <button onClick={ () => { clearInterval(intervalRef.current)} }>Clear Hook Timer</button>
      </p>
    </div>
  )
}

export default HookInterval
