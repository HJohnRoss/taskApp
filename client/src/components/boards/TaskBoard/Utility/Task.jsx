function Task({ title, description, status, date }) {

    let bStyle = ""

    if (status.toLowerCase() == "done") {
        bStyle = "#00CC00"
    } else if (status.toLowerCase() == "working on") {
        bStyle = "#FFD700"
    } else {
        bStyle = "#FF3333"
    }

    return (
        <tr className='task-board__table--row'>
            <td className='task-board__table--row--data'>
                <input className='btn' type="checkbox" />
            </td>
            <td className='task-board__table--row--data'>
                {title}
            </td>
            <td className='task-board__table--row--data' style={{ backgroundColor: bStyle, color: "white" }}>
                {status}
            </td>
            <td className='task-board__table--row--data'>
                {date}
            </td>
        </tr >
    )
}

export default Task;