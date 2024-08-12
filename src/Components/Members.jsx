import React from 'react'

const Members = (props) => {
  return (
    <div>
      <h1>Hello Members</h1>
      <button onClick={()=>props.data()} >click here...</button>
    </div>
  )
}

export default Members
