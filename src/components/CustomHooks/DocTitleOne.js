import React, { useState } from 'react'

function DocTitleOne() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width: '50%', margin: '1em auto 4em'}}>
      <p>
        <button>Count - {count}</button>
      </p>
    </div>
  )
}

export default DocTitleOne
