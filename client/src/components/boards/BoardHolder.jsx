import React from 'react'
import TaskBoard from './TaskBoard/TaskBoard';
import CalendarBoard from './CalendarBoard/CalendarBoard'

function BoardHolder() {
    return (
        <div className='board'>
            <CalendarBoard/>
        </div>
    )
}

export default BoardHolder;