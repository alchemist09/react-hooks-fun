import React, { useState } from 'react'

function UserForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  return (
    <div style={{ width: '60%', margin: '1em auto 4em' }}>
      <form>
        <p>
          <label>First Name</label>
          <input type="text" value={firstname} onClick={ e => setFirstname(e.target.value) } />
        </p>
        <p>
          <label>Last Name</label>
          <input type="text"  value={lastname} onClick={ e => setLastname(e.target.value) } />
        </p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
