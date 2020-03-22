import React from 'react'
import useInput from './useInput'

function UserForm() {
  const [firstname, bindFirstName, resetFirstname] = useInput('')
  const [lastname, bindLastName, resetLastname] = useInput('')

  const handleSubmit = evt => {
    evt.preventDefault()
    alert(`First Name: ${firstname} - Last Name: ${lastname}`)
    resetFirstname('')
    resetLastname('')
  }

  return (
    <div style={{ width: '60%', margin: '1em auto 4em' }}>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </p>
        <p>
          <label>Last Name</label>
          <input type="text"  {...bindLastName} />
        </p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
