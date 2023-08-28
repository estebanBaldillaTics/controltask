import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const task = ({id, text, complete, taskComplete, deleteTask}) => {
  return (
    <div className={`task-container ${complete ? 'complete' : ''}`.trimEnd()}>
      <div className="task-text" onClick={() => taskComplete(id)}>
        {text}
      </div>
      <div className="task-icon-container" onClick={()=> deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon"/>
      </div>
    </div>
  );
};

export default task;