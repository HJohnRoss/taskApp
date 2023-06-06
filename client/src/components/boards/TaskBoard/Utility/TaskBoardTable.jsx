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
    return (
        <div>
            <h1 className='task-board__title'>{board.title}</h1>
            <table className='table task-board__table'>
                <tr className='task-board__table--row'>
                    <th className='task-board__table--row--header'><input className='btn' type="checkbox" /></th>
                    <th className='task-board__table--row--header'>Task Name</th>
                    <th className='task-board__table--row--header'>Status</th>
                    <th className='task-board__table--row--header'>Date</th>
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

export default TaskBoardTable;