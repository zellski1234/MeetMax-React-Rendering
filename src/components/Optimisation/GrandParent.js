import React, { useState } from 'react'
import Parent1 from './Parent1'
import { Child1 } from './Child1'

export const GrandParent = () => {

    const [newCount, setNewCount] = useState(0)
  return (
    <div>   
        <button onClick={() => setNewCount(nc => nc + 1)}>
            GrandParent Count: {newCount}
        </button>
        <Parent1 newCount={newCount}> 
            <Child1 />
        </Parent1>
    </div>
  )
}
 