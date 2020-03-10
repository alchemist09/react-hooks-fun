import React, { useState } from 'react';

function HookCounterFour() {
  const [items, setItems] = useState([]);
  return (
    <div>
        <ul>
          {
            items.map(currItem => <li key={currItem.id}>{currItem.value}</li>)
          }
        </ul>
    </div>
  )
}

export default HookCounterFour;
