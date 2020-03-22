import React from 'react'

function UserForm() {
  return (
    <div style={{ width: '60%', margin: '1em auto 4em' }}>
      <form>
        <p>
          <label>First Name</label>
          <input type="text" />
        </p>
        <p>
          <label>Last Name</label>
          <input type="text" />
        </p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
