import React, { useState } from 'react'

export const ObjectUseState = () => {

    const initState = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // person.fname = 'Clark'
        // person.lname = 'Kent'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'Kent'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render')

  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
