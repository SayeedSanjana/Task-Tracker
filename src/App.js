import Header from "./components/Header";
import Tasks from "./components/Tasks";
import  AddTask from "./components/AddTask";
import {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 1:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        reminder:false
    },
])

//Delete Task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

//Toggle Reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>
    task.id===id ? {...task, reminder:!task.reminder } : task
  ))
 
}

//Add Task
const addTask=(task)=>{
  console.log(task)
}
  // const name='Brad'
  return (
    <div className="container">
      {/* <h1>Hello {name}</h1> */}
      <Header title='Baloo'/>
      <AddTask onAdd={addTask} />
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
