import React, { useState, useEffect } from 'react'

function DocTitleTwo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count - ${count}`
  }, [count])

  return (
    <div style={{ width: '50%', margin: '1em auto 4em'}}>
      <p>
        <button onClick={ () => setCount(prevCount => prevCount + 1) }>Count - {count}</button>
      </p>
    </div>
  )
}

export default DocTitleTwo
