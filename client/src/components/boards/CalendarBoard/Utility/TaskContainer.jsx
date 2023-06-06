import React, { useEffect, useState } from 'react';

function TaskContainer({ date, tasks }) {

    // const [taskItems, setTaskItems] = useState(tasks) 

    const addTaskItem = () => {

        alert("hello")
    }

    return (
        <div className='calendar-board__table--row--data--container'>
            <div className='calendar-board__table--row--data--container--date'>
                {date}
            </div>
            <div className='task-container' onClick={addTaskItem}>
                {tasks.map((task, i) =>
                (
                    <div key={i}>
                        {task}
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default TaskContainer;