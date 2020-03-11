import React, { useState } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div>
      <p>X - {x} &nbsp;&nbsp; Y - {y} </p>
    </div>
  )
}

export default HookMouse;
