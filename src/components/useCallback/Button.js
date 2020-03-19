import React from 'react'

function Button({ handleClick, children }) {
  console.log(`Renders Button - ${children}`)
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default Button