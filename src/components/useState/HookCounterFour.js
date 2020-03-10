import React, { useState } from 'react';

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {
          items.map(currItem => <li key={currItem.id}>{currItem.value}</li>)
        }
      </ul>
    </div>
  )
}

export default HookCounterFour;
