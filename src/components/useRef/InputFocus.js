import React, { useEffect, useRef } from 'react'

function InputFocus() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div style={{ width: '60%', margin: '20px auto 20px 100px'}}>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default InputFocus
