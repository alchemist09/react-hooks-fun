import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleOne() {
  const [count, setCount] = useState(0)

  useDocumentTitle(count)

  return (
    <div style={{ width: '50%', margin: '1em auto 4em'}}>
      <p>
        <button onClick={ () => setCount(prevCount => prevCount + 1) }>Count - {count}</button>
      </p>
    </div>
  )
}

export default DocTitleOne
