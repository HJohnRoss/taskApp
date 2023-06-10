import { useState } from "react";
import Task from "../Utility/Task";

const board = {
    title: "First Board",
    tasks: [
        {
            title: "Do this",
            description: "Doing something",
            date: "7/28/2023",
            status: "Done",
            peopleWorkingOn: [],

        },
        {
            title: "Do this",
            description: "Doing something",
            date: "7/28/2023",
            status: "Working on",
            peopleWorkingOn: [],

        },
        {
            title: "Do this",
            description: "Doing something",
            date: "7/28/2023",
            status: "Need help",
            peopleWorkingOn: [],

        },
    ],

}

function TaskBoardTable() {

    const [selectAllTasks, setSelectAllTasks] = useState(false)


    const handleClick = (e) => {
        setSelectAllTasks(!selectAllTasks)
    }

    return (
        <div>
            <h1 className='task-board__title'>{board.title}</h1>
            <table className='table task-board__table'>
                <thead>
                <tr className='task-board__table--row'>
                    <th className='task-board__table--row--header'><input className='form-check-input' type="checkbox" checked={selectAllTasks} onChange={(e)=> handleClick(e)}/></th>
                    <th className='task-board__table--row--header'>Task Name</th>
                    <th className='task-board__table--row--header'>Status</th>
                    <th className='task-board__table--row--header'>Date</th>
                </tr>
                </thead>
                <tbody>
                    {board.tasks.map((task, i) => (
                        <Task
                            key={i}
                            title={task.title}
                            status={task.status}
                            date={task.date}
                            selectAllTasks={selectAllTasks}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskBoardTable;