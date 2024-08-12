import React from 'react'

const Users = (props) => {
  return (
    <div>
      <h1>Hello Users</h1>
      
      <button onClick={()=>props.data()} >click me...</button>
    </div>
  )
}
console.log("baig");
      debugger
export default Users
