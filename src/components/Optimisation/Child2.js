import React from 'react'

export const Child2 = () => {
    console.log('Child2 Render')
  return (
    <div>Child2 Component</div>
  )
}

export const MemorizedChild2 = React.memo(Child2)