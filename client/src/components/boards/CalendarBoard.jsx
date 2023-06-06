import React, { useEffect, useState } from 'react';
import axios from "axios";

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

    // const [taskItems, setTaskItems] = useState(tasks) 

    const date = Date()
    useEffect(() => {
        console.log(date.slice(0, 3))
    }, [])


    const addTaskItem = () => {

        alert("hello")
    }

    return (
        <div className='calendar-board__table--row--data--container'>
            <div className='calendar-board__table--row--data--container--date'>
                {date.slice(0, 3)}
            </div>
            <div className='task-container' onClick={addTaskItem}>
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
                <TaskContainer date={"3"} tasks={[]} />
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

const monthDays = {
    "jan": 31,
    "feb": 28,
    "mar": 31,
    "apr": 30,
    "may": 31,
    "jun": 30,
    "jul": 31,
    "aug": 31,
    "sep": 30,
    "oct": 31,
    "nov": 30,
    "dec": 31,
}

const numToWeekDay = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun"
}

const weekDayToNum = {
    "Mon": 1,
    "Tue": 2,
    "Wed": 3,
    "Thu": 4,
    "Fri": 5,
    "Sat": 6,
    "Sun": 7
}

function CalendarBoard() {

    const [today, setToday] = useState()

    // let date = Date().slice(0, 3);
    // date = date.slice(0, date.match(/\d{4}/).index + 4);
    // date = date.slice(0,3)

    useEffect(() => {
        setToday(Date().slice(0, 3))
    },[])

    return (
        <div className='calendar-board'>
            <h1>Calendar Board</h1>
            <table className='calendar-board__table'>
                <tr className='calendar-board__table--row'>
                    <th className='calendar-board__table--row--head' >{weekDayToNum[today] > 7 ? numToWeekDay[weekDayToNum[today] - 7] : numToWeekDay[weekDayToNum[today]]}</th>
                    <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 1 > 7 ? numToWeekDay[weekDayToNum[today] + 1 - 7] : numToWeekDay[weekDayToNum[today]+1]}</th>
                    <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 2 > 7 ? numToWeekDay[weekDayToNum[today] + 2 - 7] : numToWeekDay[weekDayToNum[today]+2]}</th>
                    <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 3 > 7 ? numToWeekDay[weekDayToNum[today] + 3 - 7] : numToWeekDay[weekDayToNum[today]+3]}</th>
                    <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 4 > 7 ? numToWeekDay[weekDayToNum[today] + 4 - 7] : numToWeekDay[weekDayToNum[today]+4]}</th>
                    <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 5 > 7 ? numToWeekDay[weekDayToNum[today] + 5 - 7] : numToWeekDay[weekDayToNum[today]+5]}</th>
                    <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 6 > 7 ? numToWeekDay[weekDayToNum[today] + 6 - 7] : numToWeekDay[weekDayToNum[today]+6]}</th>
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