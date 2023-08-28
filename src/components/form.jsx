import React, { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import '../stylesheets/form.css';

const Taskform = (props) =>{
    const [input, setInput] = useState('');

    const handleChange = change => {
        setInput(change.target.value);

    };

    const handleSend = send =>{
        send.preventDefault();
        const newTask ={
            id: uuidv4(),
            text: input,
            complete: false
        }
        props.onSubmit(newTask);
    };

    return(
        <form className="task-form" onSubmit={handleSend}>
            <input type="text" className="task-input"  placeholder="Write a task" name="task-text" onChange={handleChange}/>
            <button className="task-button">
                Add task
            </button>
        </form>
    );
};

export default Taskform;