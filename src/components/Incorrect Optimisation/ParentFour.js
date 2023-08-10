import React, { useState } from 'react'
import { MemorizedChildFive } from './ChildFive'


function ParentFour() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vishwas")

    console.log('ParentFour Render')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const handleClick = () => {}
    

  return (
    <div>
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Count: {count}</button>
        <button onClick={()=> setName('Codevolution')}>Change name</button>
        <MemorizedChildFive name={name} handleClick={handleClick}/>
    </div>
  )
}

export default ParentFour