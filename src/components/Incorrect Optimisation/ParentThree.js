import React, { useState } from 'react'
// import { MemorizedChildThree } from './ChildThree'
import { MemorizedChildFour } from './ChildFour'


function ParentThree() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vishwas")

    console.log('ParentThree Render')

  return (
    <div>
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Count: {count}</button>
        <button onClick={()=> setName('Codevolution')}>Change name</button>
        <MemorizedChildFour name={name}/>
        {/* <MemorizedChildThree name={name}> 
            <strong> Hello </strong>
        </MemorizedChildThree> */}
    </div>
  )
}

export default ParentThree