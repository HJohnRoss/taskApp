import React, { useState, useRef, useEffect } from 'react';
import BoardService from '../../../services/BoardService';
import TaskService from '../../../services/TaskService';
import { useParams } from 'react-router-dom';


const numToMonth = {
    "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
}



function TaskContainer(
    { day, tasks, currDate,
        fullDate, onClick, selectedTask, index,
        setSelectedTask, setUpdateBoard, point, updateBoard }) {

    const {id} = useParams();

    const [formData, setFormData] = useState({
        title: "",
        date: fullDate,
        description: "",
        boardIdd : id
    })

    const [formSubmit, setFormSubmit] = useState(false)

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
        TaskService.create(formData)
            .then(res => {
                console.log(res)
                setFormData({
                    date: fullDate,
                    boardIdd : id,
                })
            })
            .catch(err => console.error(err))
        setSelectedTask(null)
        setUpdateBoard(!updateBoard)
    }


    const displayTaskInfo = (index, task) => {
        setDisplayTaskInfoIndex(index)
        setSelectedTask(task)
        setFormSubmit(!formSubmit)
    }

    const [displayTaskInfoIndex, setDisplayTaskInfoIndex] = useState()

    const deleteTaskItem = (id) => {
        setDisplayTaskInfoIndex(null)
        TaskService.delete(id)
            .then(res => console.log(res))
            .catch(err => console.error(err))
        setUpdateBoard(!updateBoard)
    }

    const editTaskItem = (index, task) => {
        setSelectedTask(index)
        setDisplayTaskInfoIndex(null)
        setFormData({
            id: task.id,
            title: task.title,
            date: fullDate,
            description: task.description
        })
        setUpdateBoard(!updateBoard)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                // Clear the form data when clicking outside the form
                setSelectedTask(null)
                setDisplayTaskInfoIndex(null)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [displayTaskInfoIndex]);

    return (
        <div className='calendar-board__table--row--data--container' onClick={handleTaskClick}>
            <div className='calendar-board__table--row--data--container--date'>
                {day}
            </div>
            <div className='task-container'>
                <div className='task-container__tasks' >
                    {tasks &&
                        tasks.map((task, i) => (
                            <div key={task.id} className='task-container__tasks--holder'>
                                <div className='task-container__tasks--item' onClick={() => displayTaskInfo(task.id, task)}>
                                    {task.title}
                                </div>
                                {displayTaskInfoIndex == task.id &&
                                    <div className={`task-info ${point ? "to-right" : "to-left"}`} ref={formRef}>
                                        <div className='icon-holder'>
                                            <div className='icon-holder__right'>
                                                <i className="fa-solid fa-trash-can" onClick={() => deleteTaskItem(task.id)}></i>
                                                <i className="fa-solid fa-pen" onClick={() => editTaskItem(index, task)} ></i>
                                            </div>
                                            <i className="fa-solid fa-xmark" onClick={() => deleteTaskItem(task.id)}></i>
                                        </div>
                                        <div className='task-info--container'>
                                            <h4 className='task-info--container--header'>{task.title}</h4>
                                            <div className='task-info--container--info'>
                                                <i className="fa-regular fa-clock"></i>
                                                <p>{`${numToMonth[fullDate.slice(5, 7)]} ${fullDate.slice(-2)} ${fullDate.slice(0, 4)} `}</p>
                                            </div>
                                            <div className='task-info--container--info'>
                                                <i className="fa-regular fa-note-sticky"></i>
                                                <p>{task.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                </div>
                <div className='task-container__newTasks' onClick={onClick}>

                </div>
            </div>
            {selectedTask == index && (
                <div className={`calendar-board__table--row--data--container--forms ${point ? "to-right-form" : "to-left-form"} ${index < 16 ? "to-down-form": "to-up-form"}`}>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className='calendar-board__table--row--data--container--forms--header'>
                            <i className="fa-solid fa-xmark" onClick={() => setSelectedTask(null)}></i>
                        </div>
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
            { }
        </div>
    );
}

export default TaskContainer;