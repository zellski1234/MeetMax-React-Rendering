import React from 'react'

export const ChildFive = ({name, person, handleClick}) => {
    console.log('ChildFive Render')
  return (
    <div>
        Hello {name} 
    </div>
  )
}

export const MemorizedChildFive = React.memo(ChildFive)