import React from 'react'

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

function Task({ title, description, status, date }) {

    let bStyle = ""

    if (status.toLowerCase() == "done") {
        bStyle = "#00CC00"
        console.log(bStyle)
    } else if (status.toLowerCase() == "working on") {
        bStyle = "#FFD700"
    }else {
        bStyle = "#FF3333"
    }

    return (
        <tr className='task-board-table__row'>
            <td className='task-board-table__row--data'>
                <input className='btn' type="checkbox" />
            </td>
            <td className='task-board-table__row--data'>
                {title}
            </td>
            <td className='task-board-table__row--data' style={{ backgroundColor: bStyle, color: "white" }}>
                {status}
            </td>
            <td className='task-board-table__row--data'>
                {date}
            </td>
        </tr >
    )
}

function TableBoard() {
    return (
        <div className='board'>
            <h1>{board.title}</h1>
            <table className='table task-board-table'>
                <tr className='task-board-table__row'>
                    <th className='task-board-table__row--header'><input className='btn' type="checkbox" /></th>
                    <th className='task-board-table__row--header'>Task Name</th>
                    <th className='task-board-table__row--header'>Status</th>
                    <th className='task-board-table__row--header'>Date</th>
                </tr>
                {board.tasks.map(task => (
                    <Task
                        title={task.title}
                        status={task.status}
                        date={task.date}
                    />
                ))}
            </table>
        </div>
    )
}

export default TableBoard;
