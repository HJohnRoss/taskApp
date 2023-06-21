import { useState } from "react";
import Task from "../Utility/Task";

const board = {
    title: "First Board",
    tasks: [
        {
            Title: "Do this",
            Status: "Done",
            "Due Date": "7/28/2023",
            Description: "Doing something",
        },
        {
            Title: "Do this",
            Status: "Working on",
            "Due Date": "7/28/2023",
            Description: "Doing something",
        },
        {
            Title: "Do this",
            Status: "Stuck",
            "Due Date": "7/28/2023",
            Description: "Doing something",
        },
    ],

}

function TaskBoardTable() {

    const [selectAllTasks, setSelectAllTasks] = useState(false)
    const [boardState, setBoardState] = useState(true)

    const handleClick = (e) => {
        setSelectAllTasks(!selectAllTasks)
    }

    const switchBoardState = () => {
        setBoardState(!boardState)
    }

    return (
        <div>
            <div className="task-board__table--header">
                {
                    boardState ?
                        <i className={`fa-solid fa-angle-down`} onClick={switchBoardState}></i>
                        :
                        <i class="fa-solid fa-angle-right" onClick={switchBoardState}></i>
                }
                <div>
                    <h3 className='task-board__title'>{board.title}</h3>
                    {!boardState &&
                        <h5>
                            {board.tasks.length} Tasks
                        </h5>
                    }
                </div>
            </div>
            <table className='table task-board__table'>
                <thead>
                    <tr className='task-board__table--row'>
                        <th className='task-board__table--row--header'><input className='form-check-input' type="checkbox" checked={selectAllTasks} onChange={(e) => handleClick(e)} /></th>
                        {Object.keys(board.tasks[0]).map((task, i) => (
                            <th key={i} className='task-board__table--row--header'>{task}</th>
                        ))}
                    </tr>
                </thead>
                {boardState &&
                    <tbody>
                        {board.tasks.map((task, i) => (
                            <Task
                                key={i}
                                title={task.Title}
                                status={task.Status}
                                date={task.Date}
                                description={task.Description}
                                selectAllTasks={selectAllTasks}
                            />
                        ))}
                        <tr className='task-board__table--row'>
                            <td className='task-board__table--row--data'>
                                <input className='form-check-input' type="checkbox" disabled />
                            </td>
                            <td className='task-board__table--row--data' style={{ border: "none" }}>
                                <input className='form-input task-board__table--row--data--newTask' name="newTask" placeholder="+ Add Task" />
                            </td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}

export default TaskBoardTable;