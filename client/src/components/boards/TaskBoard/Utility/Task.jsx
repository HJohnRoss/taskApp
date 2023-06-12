import { useState } from "react"

function Task(props) {

    const { title, status, date, description, selectAllTasks } = props;

    let bStyle = ""

    if (status.toLowerCase() == "done") {
        bStyle = "#00CC00"
    } else if (status.toLowerCase() == "working on") {
        bStyle = "#FFD700"
    } else {
        bStyle = "#FF3333"
    }

    const [taskData, setTaskData] = useState({
        title,
        status,
        date,
        description,
    })

    const handleCheck = (e) => {

        if (e.target.checked) {
            setTaskData({
                ...taskData,
                selected: e.target.checked
            })
            console.log(e.target.checked)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value
        })
    }

    return (
        <tr className='task-board__table--row'>
            <td className='task-board__table--row--data'>
                <input className='form-check-input' type="checkbox" checked={selectAllTasks || taskData.selected} onChange={handleCheck} />
            </td>

            {props && Object.keys(props).filter(item => item != "selectAllTasks").map((key, i) => (
                <td key={i} className='task-board__table--row--data'>
                    <input className='form-input task-board__table--row--data--input' name={key} value={taskData[key]} onChange={(e) => handleChange(e)} />
                </td>
            ))}

        </tr >

    )
}

export default Task;