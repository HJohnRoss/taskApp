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
        <div className='calendar-board-table__row--data--container'>
            <span>
                7
            </span>
            <div className='task-container'>
                <div className='task-container__item'>
                    {tasks.map(task =>
                    (
                        <div>
                            {task}
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}


function Week() {
    return (
        <tr className='calendar-board-table__row'>
            <th className='calendar-board-table__row--data' >
                <TaskContainer date={"1"} tasks={["yesssssssssss", "yesssssssssssssssss22wswwwwwwwwwwwww", "", "no"]} />
            </th>
            <th className='calendar-board-table__row--data' >
                <TaskContainer date={"2"} tasks={["yes", "yes", "", "no"]} />
            </th>
            <th className='calendar-board-table__row--data' >
                <TaskContainer date={"3"} tasks={["yes", "yes", "", "no"]} />
            </th>
            <th className='calendar-board-table__row--data' >
                <TaskContainer date={"4"} tasks={["yes", "yes", "", "no"]} />
            </th>
            <th className='calendar-board-table__row--data'>
                <TaskContainer date={"5"} tasks={["yes", "yes", "", "no"]} />
            </th>
            <th className='calendar-board-table__row--data'>
                <TaskContainer date={"6"} tasks={["yes", "yes", "", "no"]} />
            </th>
            <th className='calendar-board-table__row--data' >
                <TaskContainer date={"7"} tasks={["yes", "yes", "99", "no"]} />
            </th>
        </tr>
    )
}

function CalendarBoard() {
    return (
        <div className='board'>
            <h1>Calendar Board</h1>
            <table className='table calendar-board-table'>
                <tr className='calendar-board-table__row'>
                    <th className='calendar-board-table__row--head' >Sun</th>
                    <th className='calendar-board-table__row--head' >Mon</th>
                    <th className='calendar-board-table__row--head' >Tue</th>
                    <th className='calendar-board-table__row--head' >wed</th>
                    <th className='calendar-board-table__row--head' >Thu</th>
                    <th className='calendar-board-table__row--head' >Fri</th>
                    <th className='calendar-board-table__row--head' >Sat</th>
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