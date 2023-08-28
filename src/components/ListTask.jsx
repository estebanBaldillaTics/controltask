import React, { useState } from "react";
import Taskform from './form';
import Task from './tasks';
import '../stylesheets/ListTask.css';

const Listask = () =>{

    const [tasks, setTask] = useState([]);

    const addTask = task =>{
        console.log(task);
        console.log('tarea agregada');
        console.log(task);
        if(task.text.trim()){
            task.text = task.text.trim();
            const taskUpdated = [task, ...tasks];
            setTask(taskUpdated);
        }
    };

    const deleteTask = id =>{
        const taskUpdated = tasks.filter(task => task.id !== id);
        setTask(taskUpdated);
    };

    const completeTask = id =>{
        const taskUpdated = tasks.map(task =>{
            if(task.id === id){
                task.complete = !task.complete;
            }
            return task;
        });
        setTask(taskUpdated);
    };

    return(
        <>
            <Taskform onSubmit={addTask} />
            <div className="task-list-container">
                <h3 className="list-task-title">LIST TASK</h3>
                {
                  tasks.map((task) =>
                    <Task 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        complete ={task.complete}
                        taskComplete ={completeTask}
                        deleteTask={deleteTask}
                    />
                  ) 
                }
            </div>
        </>
    );
};

export default  Listask;