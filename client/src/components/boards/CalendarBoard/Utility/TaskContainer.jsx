import React, { useState } from 'react';
import BoardService from '../../../services/BoardService';

function TaskContainer(
    { day, tasks, currDate,
        fullDate, onClick, selectedTask, index,
        setSelectedTask, setToggleItem }) {

    const addTaskItem = () => {
        alert("hello");
    };


    const [formData, setFormData] = useState({
        title: "",
        date: fullDate,
        description: "",
        location: ""
    })

    const handleTaskClick = (e) => {
        e.stopPropagation();
        // setFormDate(prev => !prev)
        console.log(fullDate)
    }

    const closeOverlay = () => {
        setSelectedTask(null)
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()



        setSelectedTask(null)
        setToggleItem(prev => !prev)
    }

    return (
        <div className='calendar-board__table--row--data--container' onClick={handleTaskClick}>
            <div className='calendar-board__table--row--data--container--date'>
                {day}
            </div>
            <div className='task-container' onClick={onClick}>
                {tasks &&
                    tasks.map((task, i) =>
                        <div key={i} >
                            {task.description}
                        </div>
                    )}
            </div>
            {/* <div>

            </div> */}
            {selectedTask == index && (
                <div className='calendar-board__table--row--data--container--forms'>
                    <div>
                        <i class="fa-solid fa-xmark" onClick={closeOverlay}></i>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input className='form-group--item form-group--item--title' type='text' name='title' placeholder='Add title and time' value={formData.title} onChange={(e) => handleFormChange(e)} />
                        </div>
                        <div className='form-group'>
                            <input className='form-group--item' type='date' name='date' value={formData.date} onChange={(e) => handleFormChange(e)} />
                        </div>
                        <div className='form-group'>
                            <textarea className='form-group--item form-group--item--description' placeholder='Add description' name='description' value={formData.description} onChange={(e) => handleFormChange(e)} />
                        </div>
                        <div className='btn-holder'>
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default TaskContainer;