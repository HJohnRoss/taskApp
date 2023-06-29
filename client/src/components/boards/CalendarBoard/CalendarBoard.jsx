import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

import Month from './Utility/Month';
import CalendarNav from './Utility/CalendarNav';

import { ThemeContext } from '../../../context/ThemeContext';

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

const monthToNum = {
    "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12",
}

const numToMonth = {
    "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
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

function CalendarBoard({ board, tasks, updateBoard, setUpdateBoard, setTasks }) {

    const [today, setToday] = useState()

    const [currDate, setCurrDate] = useState({
        currMonth: monthToNum[Date().slice(4, 7)],
        currDay: Date().slice(8, 10),
        currYear: Date().slice(11, 15)
    })

    useEffect(() => {
        setToday(Date().slice(0, 3))
    }, [currDate])

    const [activeTaskIndex, setActiveTaskIndex] = useState();

    const handleClick = () => {
        setActiveTaskIndex(false)
    }

    const toggleDate = () => {
        setCurrDate((prevCurrDate) => ({
            ...prevCurrDate,
            currMonth: prevCurrDate.currMonth++
        }));
        console.log(currDate.currMonth)
    };

    const {them, toggleTheme} = useContext(ThemeContext)

    return (
        <div className='calendar-board' onClick={handleClick}>
            <CalendarNav currDate={currDate} setCurrDate={setCurrDate} setTasks={setTasks} tasks={tasks}/>
            <div className='calendar-board__title'>
                <h1>{board}</h1>
                {/* {currDate.currYear} */}
                {currDate && <h2>{fullMonName[numToMonth[currDate.currMonth].toLowerCase()]}</h2>}
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
                <Month
                    date={today}
                    tasks={tasks}
                    setActiveTaskIndex={setActiveTaskIndex}
                    activeTaskIndex={activeTaskIndex}
                    currDate={currDate}
                    setUpdateBoard={setUpdateBoard}
                    updateBoard={updateBoard}
                />
            </table>
        </div>
    )
}

export default CalendarBoard;