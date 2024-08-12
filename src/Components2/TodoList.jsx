import React, { useState } from 'react'

const TodoList = () => {
    const [list,setList] = useState([]);
    const [text,setText] = useState ("");
    const handleADD =()=>{
        setList([text,...list])
        setText("")
    }
  return (
 <React.Fragment>
    <h1>Hello TodoList ADD</h1>
    <input type="text" onChange={(e)=>setText(e.target.value)} placeholder='ADD TEXT HERE...' />
    <button onClick={handleADD} >ADD</button>
    {
        list.map((item)=>{
            return(
                <div>
                    <h1>{item}</h1>
                </div>
            )
        })
    }
 </React.Fragment>
  )
}

export default TodoList
