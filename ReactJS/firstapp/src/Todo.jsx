import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState("");
  const [store, setStore] = useState([]);

  function CreateTask() {
    if (task.trim()) { 

      // const add = [...store];
      // add.push(task);
      // setStore(add);
      setStore([...store, task])
      setTask("");
    }

  }
  function deleteTask(index) {
    // store all the task into the deleteTask
    const deleteTask = [...store];
    // then delete the task with the help of splice method
    deleteTask.splice(index, 1);
    // and setStore the updated
    setStore(deleteTask);
    
  }
  return (
    <div className='container'>
      <div className='todo_list'>
        <input
          className='task_input'
          placeholder='Enter Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button 
          className='btn'
          style={{ marginLeft: "10px" }}
          onClick={CreateTask}
        >
          Add Task
        </button>

        
          <br/>
         
          <ul className='list_items'>
          <hr/>
          {store.map((items, index) => (
           
           <li className='list' key={index}>
           <span className='span'>{items}</span>
           <button onClick={()=> deleteTask(index)} className='dlt_btn'>Delete</button>
           </li>
           
          ))}
          </ul>
       
      </div>
    </div>
  );
}

export default Todo;
