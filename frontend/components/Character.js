import React from 'react'

function Character({ peopleData, planetData }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'> {peopleData.name}</h3>
    </div>
  )
}

export default Character
