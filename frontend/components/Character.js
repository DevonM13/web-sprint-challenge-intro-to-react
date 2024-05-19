import React, { useState } from 'react';

function Character({ person }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const [toggleOn, setToggleOn] = useState(false);

const toggle = () => {
  if (toggleOn) {
    setToggleOn(false) 
  } else if (!toggleOn) {
    setToggleOn(true);
  }
};


  return (
    <div className='character-card' onClick={() => toggle()}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'> {person.name}</h3>
      {toggleOn && <p>Planet: <span color='black' className='character-planet'>{person.homeworld}</span></p>}
    </div>
  )
}

export default Character
