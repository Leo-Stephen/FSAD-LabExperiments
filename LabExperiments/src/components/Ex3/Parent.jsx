import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import '../../css/shared/ExperimentLayout.css'
import '../../css/Parent.css'
import Child from './Child'

function Parent() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')

  function Display() {
    return (
      <div>
        Name: {name}
        <br></br>
        Age: {age}
        <br></br>
        Salary: {salary}
        <br></br>
        Location: {location}
      </div>
    )
  }
  const changeUser = (n, a, s, l) => {
    setName(n)
    setAge(a)
    setSalary(s)
    setLocation(l)
  }

  return (
    <div className="experiment-layout">
      <Navbar />
      <div className="experiment-content">
        <div className="parent-container">
          <div className="input-column">
            <Child changeUser={changeUser} />
          </div>
          <div className="output-column">
            <Display />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parent
