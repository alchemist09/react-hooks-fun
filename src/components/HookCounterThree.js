import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstname: '', lastname: '' });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
        />
        <input
          type="text"
          value={name.lastname}
        />
      </form>
      <p>First Name: {name.firstname}</p>
      <p>Last Name: {name.lastname}</p>
    </div>
  )
}

export default HookCounterThree;
