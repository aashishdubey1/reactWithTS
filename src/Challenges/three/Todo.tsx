import React, { useState } from 'react'


type TodoInfo = {
    id:number;
    title:string;
    completed:boolean;
}


const Todo = () => {
    const [todo,setTodo] = useState<TodoInfo[]>([])


  function handleSubmit (title:string){
    const newTodo :TodoInfo = {
      id:todo.length+1,
      title,
      completed:false
    }
    setTodo([...todo,newTodo])
  }

  return (
    <div>
        <div>
            <h1>Todo App</h1>
            <input type="text" placeholder='Task Title'/>
            <button onClick={()=>handleSubmit("NewTodo")  }>Add Task</button>
        </div>
        {todo.map(todo=><li>{todo.title}</li>)}
    </div>
  )
}

export default Todo