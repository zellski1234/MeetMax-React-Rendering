import React, { useState } from 'react'
import { MemorizedChild2 } from './Child2'


function Parent2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vishwas")

    console.log('Parent2 Render')

  return (
    <div>
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Count: {count}</button>
        <button onClick={()=> setName('Codevolution')}>Change name</button>
        <MemorizedChild2 name={name}/>
    </div>
  )
}

export default Parent2