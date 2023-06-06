import React from 'react'
import TaskBoard from './TaskBoard'
import CalendarBoard from './CalendarBoard'

function BoardHolder() {
    return (
        <div className='board'>
            <CalendarBoard/>
        </div>
    )
}

export default BoardHolder;