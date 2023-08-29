import React from "react";
import Listask from '../components/ListTask';
import Logo from '../components/logo';
import '../stylesheets/task.css';

const taskComponent = () => {
    return(
    <div className="app-tasklist">
        <div className="logo-container">
            <Logo />
        </div>
        <div className="app-tasks-list">
        <h1 className="head-task">Mis tareas</h1>
            <Listask/>
        </div>
    </div>
    )
};

export default taskComponent;