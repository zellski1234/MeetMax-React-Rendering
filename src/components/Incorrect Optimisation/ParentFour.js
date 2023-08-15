import React, { useState, useMemo, useCallback } from 'react'
import { MemorizedChildFive } from './ChildFive'


function ParentFour() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vishwas")

    console.log('ParentFour Render')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memorizedPerson = useMemo(() => person, [])

    const handleClick = () => {}
    
    const mermorizedHandleClick = useCallback(handleClick, [])

  return (
    <div>
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Count: {count}</button>
        <button onClick={()=> setName('Codevolution')}>Change name</button>
        {/* <MemorizedChildFive name={name} person={memorizedPerson} /> */}
        <MemorizedChildFive name={name} handleClick={mermorizedHandleClick}/>
    </div>
  )
}

export default ParentFour