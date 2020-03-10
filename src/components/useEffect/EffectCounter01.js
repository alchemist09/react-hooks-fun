import React, { useState } from 'react';

function EffectCounterOne() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => { setCount(prevState => prevState + 1) }}>Count {count} times</button>
    </div>
  )
}

export default EffectCounterOne;
