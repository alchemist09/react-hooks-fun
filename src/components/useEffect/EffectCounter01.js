import React, { useState, useEffect } from 'react';

function EffectCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You clicked " + count + " times";
  })

  return (
    <div>
      <button onClick={() => { setCount(prevState => prevState + 1) }}>Count {count} times</button>
    </div>
  )
}

export default EffectCounterOne;
