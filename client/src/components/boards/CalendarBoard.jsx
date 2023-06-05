import React from 'react'

const board = {
    title: "First Board",
    tasks: [
        {
            description: "Doing something",
            date: "7/28/2023",
            peopleWorkingOn: [],

        },
        {
            description: "Doing something",
            date: "7/28/2023",
            peopleWorkingOn: [],

        },
        {
            description: "Doing something",
            date: "7/28/2023",
            peopleWorkingOn: [],

        },
    ],
}

function TaskContainer({ data, tasks }) {
    return (
        <div className='calendar-board__table--row--data--container'>
            <div className='calendar-board__table--row--data--container--date'>
                7
            </div>
            <div className='task-container'>
                {tasks.map(task =>
                (
                    <div>
                        {task}
                    </div>
                )
                )}
            </div>
        </div>
    )
}


function Week() {
    return (
        <tr className='calendar-board__table--row'>
            <td className='calendar-board__table--row--data' >
                <TaskContainer date={"1"} tasks={["yes", "yessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "", "no"]} />
            </td>
            <td className='calendar-board__table--row--data' >
                <TaskContainer date={"2"} tasks={["yes", "yes", "", "no"]} />
            </td>
            <td className='calendar-board__table--row--data' >
                <TaskContainer date={"3"} tasks={["yes", "yes", "", "no"]} />
            </td>
            <td className='calendar-board__table--row--data' >
                <TaskContainer date={"4"} tasks={["yes", "yes", "", "no"]} />
            </td>
            <td className='calendar-board__table--row--data'>
                <TaskContainer date={"5"} tasks={["yes", "yes", "", "no"]} />
            </td>
            <td className='calendar-board__table--row--data'>
                <TaskContainer date={"6"} tasks={["yes", "yes", "", "no"]} />
            </td>
            <td className='calendar-board__table--row--data' >
                <TaskContainer date={"7"} tasks={["yes", "yes", "", "no"]} />
            </td>
        </tr>
    )
}

function CalendarBoard() {
    return (
        <div className='calendar-board'>
            <h1>Calendar Board</h1>
            <table className='calendar-board__table'>
                <tr className='calendar-board__table--row'>
                    <th className='calendar-board__table--row--head' >Sun</th>
                    <th className='calendar-board__table--row--head' >Mon</th>
                    <th className='calendar-board__table--row--head' >Tue</th>
                    <th className='calendar-board__table--row--head' >wed</th>
                    <th className='calendar-board__table--row--head' >Thu</th>
                    <th className='calendar-board__table--row--head' >Fri</th>
                    <th className='calendar-board__table--row--head' >Sat</th>
                </tr>
                <Week></Week>
                <Week></Week>
                <Week></Week>
                <Week></Week>
            </table>
        </div>
    )
}

export default CalendarBoard