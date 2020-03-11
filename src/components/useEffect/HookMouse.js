import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (evt) => {
    console.log("handleMouseMove() called....")
    setX(evt.clientX);
    setY(evt.clientY);
  }

  useEffect(() => {
    console.log("useEffect......called");
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return (
    <div>
      <p>X - {x} &nbsp;&nbsp; Y - {y} </p>
    </div>
  )
}

export default HookMouse;
