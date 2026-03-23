import { useState } from 'react'

const TaskInput = ({ handletask }) => {
  const [task, setTask] = useState('')

  const handleinputValue = (e) => {
    setTask(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()

    if (task.trim() === '') return

   handletask(task)   // send to App
    setTask('')     // clear input
  }

  return (
    <form className='inputField' onSubmit={handleAddTask}>
      <input
        type='text'
        placeholder='Add Task'
        value={task}
        onChange={handleinputValue}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskInput








// import React from 'react'
// import { useState } from 'react'

// const TaskInput = ({addTask}) => {
//     const [task,setTask] = useState('')
//     console.log(task)

//     const handleinputValue = (event) => {
//      setTask(event.target.value)
//     }
//     const handleAddTask = (event) => {
//         event.preventDefault()
//          if(task.trim()=== '') return
//      Addtask (task)
//      setTask('')
//     }
   
//   return (
//     <form className='inputField' onSubmit={handleAddTask}> 
//         <input type='text' placeholder='Add Task' value={task} onChange={handleinputValue}/>
//         <button>+</button>
//     </form>
//   )
// }

// export default TaskInput
