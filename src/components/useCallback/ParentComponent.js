import React, { useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
  const [age, setAge] = useState(18)
  const [salary, setSalary] = useState(10000)

  setAge = () => age + 1

  setSalary = () => salary + 1280
  
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={setAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={setSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
