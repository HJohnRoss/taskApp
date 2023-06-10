import { useState } from "react"

function Task({ title, description, status, date, selectAllTasks }) {

    let bStyle = ""

    if (status.toLowerCase() == "done") {
        bStyle = "#00CC00"
    } else if (status.toLowerCase() == "working on") {
        bStyle = "#FFD700"
    } else {
        bStyle = "#FF3333"
    }

    const [taskData,setTaskData] = useState({
        title,
        status,
        date,
        selected: false
    })

    const handleChange = (e) => {
        
        if(e.target.checked){
            setTaskData({
                ...taskData,
                selected: e.target.checked
            })
            console.log(e.target.checked)
        }
    }

    return (
        <tr className='task-board__table--row'>
            <td className='task-board__table--row--data'>
                <input className='form-check-input' type="checkbox" checked={selectAllTasks ? selectAllTasks : taskData.selected} onChange={handleChange}/>
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