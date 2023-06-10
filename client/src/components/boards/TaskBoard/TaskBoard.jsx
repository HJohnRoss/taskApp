import React from 'react';
import TaskBoardTable from './Utility/TaskBoardTable';

function TaskBoard() {
    return (
        <div className='task-board'>
            <TaskBoardTable />
            <TaskBoardTable />
            <TaskBoardTable />
            <TaskBoardTable />
            <TaskBoardTable />
        </div>
    )
}


export default TaskBoard;
