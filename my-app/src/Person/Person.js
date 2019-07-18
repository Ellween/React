import React from 'react'
import Radium from 'radium'

import './Person.css'

const person = (proops) => {
    console.log(proops)

    const style = {
        '@media (min-width: 500px)' : {
            width: '750px'
        }
    }


    return (
        <div className='Person' style = {style}>
            <h1 onClick={proops.click}>This is {proops.name}   Component! I am a {proops.age} years Old , My Hobbies : {proops.children}</h1>
            <input type ='text' onChange={proops.change} />
        </div>
    );
}

export default Radium(person);