import React, { useEffect, useState } from 'react';

import TaskContainer from "./TaskContainer";

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

function Month() {

    const [daysOfTheMonth, setDaysOfTheMonth] = useState();
    const [todaysDate, setTodaysDate] = useState()


    let days = []

    for (let i = Date().slice(8, 10).length > 1 ? Date().slice(8, 10)[1] : Date().slice(8, 10); i < monthDays[Date().slice(4, 7).toLowerCase()] + 1; i++) {
        days.push(i)
    }

    let month = []
    let j = 0
    let remainder = 1

    for (let week = 0; week < 4; week++) {
        let thisWeek = []
        for (let day = 0; day < 7; day++) {
            if (days[j]) {
                thisWeek.push(days[j])
            }
            else {
                thisWeek.push(remainder)
                remainder++
            }
            j++
        }

        month.push(thisWeek)
    }

    // remainder = 28 - remainder

    // console.log(remainder)

    useEffect(() => {
        setDaysOfTheMonth(month)
    }, [])


    return (
        <tbody>
            {daysOfTheMonth && daysOfTheMonth.map((week, i) => (
                <tr className='calendar-board__table--row' key={i}>
                    {week.map((day, i) => (
                        <td key={i} className='calendar-board__table--row--data' >
                            <TaskContainer key={i} date={day} tasks={["yes", "yess", "", "no"]} />
                        </td>
                    ))}
                </tr>
            ))}

            {/* <tr className='calendar-board__table--row'>
                <td className='calendar-board__table--row--data' >
                    <TaskContainer date={Date().slice(8, 10)} tasks={["yes", "yessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "", "no"]} />
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
            <tr className='calendar-board__table--row'>
                <td className='calendar-board__table--row--data' >
                    <TaskContainer date={Date().slice(8, 10)} tasks={["yes", "yessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "", "no"]} />
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
            <tr className='calendar-board__table--row'>
                <td className='calendar-board__table--row--data' >
                    <TaskContainer date={Date().slice(8, 10)} tasks={["yes", "yessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "", "no"]} />
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
            <tr className='calendar-board__table--row'>
                <td className='calendar-board__table--row--data' >
                    <TaskContainer date={Date().slice(8, 10)} tasks={["yes", "yessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "", "no"]} />
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
            </tr> */}
        </tbody>
    )
}

export default Month;