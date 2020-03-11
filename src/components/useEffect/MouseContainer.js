import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  
  return (
    <div>
      <button>Toggle Display</button>
      <HookMouse />
    </div>
  )
}

export default MouseContainer;
