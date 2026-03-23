// this is also again second time practical
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TaskInput from './Components/TaskInput'

const App = () => {
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    const savedtask = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedtask)
  },[])
  const handletask = (newTask) => {
    const updatedTask = [...tasks,newTask]
    setTasks(updatedTask);
   localStorage.setItem('tasks',JSON.stringify(updatedTask))
  }
  const ClearAll = () => {
    setTasks([])
    localStorage.removeItem('tasks')
  }
  return (
    <>
     <div className='todo-cont'>
      <div className='header'>
        <h2>Daily Task</h2>
        <p>Stay Organized and Productive</p>
       
        <div className="task-input">
  <TaskInput handletask={handletask} />
</div>
      </div>

      <ul className='task-list'>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <div className='footer'>
        <span>{tasks.length} task total</span>
        <button onClick={ClearAll}>Clear Complete</button>
      </div>
    </div>
    </>
  )
}

export default App















// this is real practical
// import React, { useState } from 'react'
// import "./index.css"
// import TaskInput from './Components/TaskInput'
// import { useEffect } from 'react'

// const App = () => {
//   const [tasks, setTasks] = useState([])

//   useEffect(() => {
//   const savedTask = JSON.parse(localStorage.getItem("tasks")) || [];
//   setTasks(savedTask);
// }, []);

//   // useEffect(()=>{
//   //   const savedTask = JSON.parse(localStorage.getItem("tasks")||[]
//   //  setTasks(savedTask)
//   // ),[]} this one is error i closed useEffect eraly
//   const addTask = (newTask) => {
//     //setTasks([...tasks, newTask]) this works without localstarage is not using local stroge
//    const UpdatedTask = [...tasks, newTask]
//     setTasks(UpdatedTask);
//     localStorage.setItem("tasks",JSON.stringify(UpdatedTask))
//   }
//   const ClearAll = () => {
//     setTasks([]) // this reset te list to empty
//     localStorage.removeItem("tasks")
//   }

//   return (
//     <div className='todo-cont'>
//       <div className='header'>
//         <h2>Daily Task</h2>
//         <p>Stay Organized and Productive</p>
       
//         <div className="task-input">
//   <TaskInput addTask={addTask} />
// </div>
//       </div>

//       <ul className='task-list'>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>

//       <div className='footer'>
//         <span>{tasks.length} task total</span>
//         <button onClick={ClearAll}>Clear Complete</button>
//       </div>
//     </div>
//   )
// }

// export default App




































// This is teacher code 
// import React from 'react'
// import "./App.css"
// import TaskInput from './Components/TaskInput'
// import { useState } from 'react'
// import TasksItem from './Components/TasksItem'
// import Stats from './Components/Stats'
// const App = () => {
//   const [toDoList,setToDoList] = useState([])
//   const addTask = (taskname) => {
//     const newtask = {taskname,checked:false}
//     setToDoList([...toDoList,newtask])
//   }
//   const handleDelete = (deletTaskName) => {
//     setToDoList(toDoList.filter(task=>task.taskname !== deletTaskName))
//   }
//   const ToggleCheck = (taskname) => {
//   setToDoList((prevtoDolist) => prevtoDolist.map(task => task.taskname === taskname ?
//     {...task, checked: !task.checked}:task )
//   )
//   }
//    console.log(toDoList)
//   return (
    
//    <>
//    <div className='container'>
//     <h1>Task Manager</h1>
//     <TaskInput addTask={addTask}/>
//     <div className='toDoList'>
//      <span>Todos</span>
//      <ul className="list-items">
//       {toDoList.map((task, key) => (
//   <TasksItem task={task} key={key} 
//   handleDelete={handleDelete} ToggleCheck={ToggleCheck}/>
// ))}
//       {/* {toDoList.map((task,key =><TasksItem task={task} key={key}/>))} */}
//      </ul>
//      {toDoList.length === 0?<p className='notify'>
//       You Are Done!</p> :null
//       }
//     </div>
//    </div>
//    <Stats toDoList={toDoList}/>
//    </>
//   )
// }

// export default App





// import React from 'react'
// import ToggleTheme from './ToggleTheme'

// const App = () => {
//   return (
//     <div>
//       <div className='cont'>
     
//       </div>
//       <ToggleTheme/>
//     </div>
//   )
// }

// export default App
















