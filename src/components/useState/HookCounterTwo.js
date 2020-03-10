import React, { useState } from 'react';

function HookCounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
    <div>
      <p>Count {count}</p>
      <button onClick={ () => setCount(initialState) }>Reset</button>
      <button onClick={ () => setCount(prevState => prevState + 1) }>Increment</button>
      <button onClick={ () => setCount(prevState => prevState - 1) }>Decrement</button>
    </div>
  );
}

export default HookCounterTwo;
