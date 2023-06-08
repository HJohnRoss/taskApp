import React, { useState, useRef, useEffect } from 'react';
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
        description: ""
    })

    const formRef = useRef(null);

    const handleTaskClick = (e) => {
        e.stopPropagation();
        // setFormDate(prev => !prev)
        console.log(fullDate)
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
        console.log(formData)

        setSelectedTask(null)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                // Clear the form data when clicking outside the form
                setSelectedTask(null)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const displayTaskInfo = (task) => {
        console.log(task)
        alert("Editing Tasks")
    }

    return (
        <div className='calendar-board__table--row--data--container' onClick={handleTaskClick}>
            <div className='calendar-board__table--row--data--container--date'>
                {day}
            </div>
            <div className='task-container' >
                <div className='task-container__tasks' >
                    {tasks &&
                        tasks.map((task, i) =>
                            <div key={i} className='task-container__tasks--item'  onClick={() => displayTaskInfo(task)}>
                                {task.title}
                            </div>
                        )}
                </div>
                <div className='task-container__newTasks' onClick={onClick}>

                </div>
            </div>
            {selectedTask == index && (
                <div className='calendar-board__table--row--data--container--forms'>
                    <div>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
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