import React, { useState } from 'react'

export const ArrayUseState = () => {

    const initState = ['Bruce', 'Wayne']
    const [persons, setPersons] = useState(initState)
    
    const handleClick = () => {
        // persons.push('Clark')
        // persons.push('Kent')
        // setPersons(persons)
        // This does not re render the component
        const newPersons = [...persons]
        newPersons.push('Clark')
        newPersons.push('Kent')
        setPersons(newPersons)

    }
    console.log('ArrayUseState Render')
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            persons.map(person => (
                <div key={person}>{person}</div>
            ))
        }
    </div>
  )
}
