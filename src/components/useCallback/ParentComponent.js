import React, { useState } from 'react'

function ParentComponent() {
  const [age, setAge] = useState(18)
  const [salary, setSalary] = useState(10000)

  setAge = () => age + 1

  setSalary = () => salary + 1280
  
  return (
    <div>
      
    </div>
  )
}

export default ParentComponent
