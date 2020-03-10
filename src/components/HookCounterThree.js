import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstname: '', lastname: '' });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={e => setName({ firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={e => setName({ lastname: e.target.value })}
        />
      </form>
      <p>First Name: {name.firstname}</p>
      <p>Last Name: {name.lastname}</p>
    </div>
  )
}

export default HookCounterThree;
