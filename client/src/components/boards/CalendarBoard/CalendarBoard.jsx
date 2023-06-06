import React, { useEffect, useState } from 'react';
import axios from "axios";

import Month from './Utility/Month';

const monthDays = {
    "jan": 31, "feb": 28, "mar": 31, "apr": 30, "may": 31, "jun": 30, "jul": 31, "aug": 31, "sep": 30, "oct": 31, "nov": 30, "dec": 31,
}

const fullMonName = {
    "jan": "January", "feb": "February", "mar": "March", "apr": "April", "may": "May", "jun": "June", "jul": "July", "aug": "August", "sep": "September", "oct": "October", "nov": "November", "dec": "December",
}

const numToWeekDay = {
    1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat", 7: "Sun"
}

const weekDayToNum = {
    "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6, "Sun": 7
}

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

function CalendarBoard() {

    const [today, setToday] = useState()


    useEffect(() => {
        setToday(Date().slice(0, 3))
    }, [])

    return (
        <div className='calendar-board'>
            <div className='calendar-board__title'>
                <h1>Calendar Board</h1>
                <h2>{fullMonName[Date().slice(4,7).toLowerCase()]}</h2>
            </div>
            <table className='calendar-board__table'>
                <thead className='calendar-board__table--row'>
                    <tr>
                        <th className='calendar-board__table--row--head' >{weekDayToNum[today] > 7 ? numToWeekDay[weekDayToNum[today] - 7] : numToWeekDay[weekDayToNum[today]]}</th>
                        <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 1 > 7 ? numToWeekDay[weekDayToNum[today] + 1 - 7] : numToWeekDay[weekDayToNum[today] + 1]}</th>
                        <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 2 > 7 ? numToWeekDay[weekDayToNum[today] + 2 - 7] : numToWeekDay[weekDayToNum[today] + 2]}</th>
                        <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 3 > 7 ? numToWeekDay[weekDayToNum[today] + 3 - 7] : numToWeekDay[weekDayToNum[today] + 3]}</th>
                        <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 4 > 7 ? numToWeekDay[weekDayToNum[today] + 4 - 7] : numToWeekDay[weekDayToNum[today] + 4]}</th>
                        <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 5 > 7 ? numToWeekDay[weekDayToNum[today] + 5 - 7] : numToWeekDay[weekDayToNum[today] + 5]}</th>
                        <th className='calendar-board__table--row--head' >{weekDayToNum[today] + 6 > 7 ? numToWeekDay[weekDayToNum[today] + 6 - 7] : numToWeekDay[weekDayToNum[today] + 6]}</th>
                    </tr>
                </thead>
                <Month date={today} />
            </table>
        </div>
    )
}

export default CalendarBoard;