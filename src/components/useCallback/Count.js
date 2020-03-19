import React from 'react'

function Count({ text, count }) {
  return (
    <div>
      <p>Rendering {text} - Salary: {count}</p>
    </div>
  )
}

export default Count