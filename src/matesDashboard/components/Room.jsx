import React from 'react'

const Room = ({showGetRoomsHandler}) => {
  return (
    <div >
      <div className='secR'>
        Are You Looking For Room..?
        <button onClick={showGetRoomsHandler} className='clkMe'>Click me</button>
      </div>
    </div>
  )
}

export default Room