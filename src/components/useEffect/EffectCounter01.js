import React, { useState, useEffect } from 'react';

function EffectCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = "You clicked " + count + " times";
  })

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={ e => setName(e.target.value) }
      />
      <button onClick={() => { setCount(prevState => prevState + 1) }}>Count {count} times</button>
    </div>
  )
}

export default EffectCounterOne;
