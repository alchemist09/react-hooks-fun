import React, { useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
  const [age, setAge] = useState(18)
  const [salary, setSalary] = useState(10000)

  const incrementAge = () => setAge(age + 1)

  const incrementSalary = () => setSalary(salary + 1280)
  
  return (
    <div style={{ width: '60%', margin: '20px auto' }}>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
