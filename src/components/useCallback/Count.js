import React from 'react'

function Count({ text, count }) {
  console.log(`Rendering Count - ${text}`)
  return (
    <div>
      <p>Rendering {text} : {count}</p>
    </div>
  )
}

export default Count