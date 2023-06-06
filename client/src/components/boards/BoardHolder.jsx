import React from 'react'
import TaskBoard from './TaskBoard/TaskBoard';
import CalendarBoard from './CalendarBoard/CalendarBoard'

function BoardHolder() {
    return (
        <div className='board'>
            <TaskBoard/>
        </div>
    )
}

export default BoardHolder;