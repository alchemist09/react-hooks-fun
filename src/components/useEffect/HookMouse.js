import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect......mousemove event handled");
    window.addEventListener('mousemove', handleMouseMove);
  })

  return (
    <div>
      <p>X - {x} &nbsp;&nbsp; Y - {y} </p>
    </div>
  )
}

export default HookMouse;
