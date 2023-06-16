import React, { useEffect, useState } from 'react';
import TaskContainer from "./TaskContainer";

const monthDays = {
    "jan": 31, "feb": 28, "mar": 31, "apr": 30, "may": 31, "jun": 30, "jul": 31, "aug": 31, "sep": 30, "oct": 31, "nov": 30, "dec": 31,
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

function Month({ tasks, setActiveTaskIndex, activeTaskIndex, currDate, setUpdateBoard, updateBoard }) {
    const [daysOfTheMonth, setDaysOfTheMonth] = useState([]);
    const [todaysDate, setTodaysDate] = useState(`${Date().slice(11, 15)}-${monthToNum[Date().slice(4, 7)]}-${Date().slice(8, 10)}`)


    const [toggleItem, setToggleItem] = useState(false)

    useEffect(() => {
        const addTasks = () => {
            let days = [];

            for (let i = currDate.currDay.length < 1 ? currDate.currDay[1] : currDate.currDay; i < monthDays[numToMonth[currDate.currMonth].toLowerCase()] + 1; i++) {
                days.push(i)
            }

            let month = [];
            let j = 0;
            let remainder = 1;

            let position = 1
            let turningPoint = 0;
            let direction = true;

            for (let week = 0; week < 5; week++) {
                let thisWeek = [];
                for (let day = 0; day < 7; day++) {
                    if (turningPoint < 2) {
                        direction = true
                    } else if (turningPoint > 2) {
                        direction = false
                    }
                    turningPoint++

                    if (turningPoint == 7) {
                        turningPoint = 0
                    }
                    
                    let dayTasks = [];
                    position++
                    if (days[j]) {
                        if (tasks) {
                            for (let i of tasks) {
                                if (i.date == `${currDate.currYear}-${currDate.currMonth}-${days[j]}`) {
                                    dayTasks.push(i)
                                }
                            }
                        }
                        thisWeek.push({
                            position: position,
                            tasks: dayTasks,
                            day: days[j] < 10 ? `0${days[j]}` : days[j],
                            date: `${currDate.currYear}-${currDate.currMonth}-${days[j] < 10 ? `0${days[j]}` : days[j]}`,
                            point: direction,
                        });
                    } else {
                        let thisMonth = parseInt(currDate.currMonth) + 1
                        if (parseInt(thisMonth) < 10) {
                            thisMonth = `0${thisMonth}`
                        }
                        if (remainder < 10) {
                            remainder = `0${remainder}`
                        }
                        if (tasks) {
                            for (let i of tasks) {
                                if (i.date == `${currDate.currYear}-${thisMonth}-${remainder}`) {
                                    dayTasks.push(i)
                                }
                            }
                        }
                        thisWeek.push({
                            position: position,
                            day: numToMonth[thisMonth] + " " + remainder,
                            date: `${currDate.currYear}-${thisMonth}-${remainder}`,
                            point: direction,
                            tasks: dayTasks
                        });
                        remainder++;
                    }
                    j++;
                }
                month.push(thisWeek);
            }
            setDaysOfTheMonth(month);
        };

        addTasks();
    }, [tasks, currDate, toggleItem, updateBoard]);

    const handleTaskClick = (index) => {
        setActiveTaskIndex(index);
    };

    return (
        <tbody>
            {daysOfTheMonth.map((week, i) => (
                <tr className="calendar-board__table--row" key={i}>
                    {week.map((day, j) => (
                        <td key={j} className="calendar-board__table--row--data">
                            <TaskContainer
                                key={j}
                                day={day.day}
                                fullDate={day.date}
                                tasks={day.tasks}
                                currDate={currDate}
                                onClick={() => handleTaskClick(day.position)}
                                selectedTask={activeTaskIndex}
                                index={day.position}
                                setSelectedTask={setActiveTaskIndex}
                                setToggleItem={setToggleItem}
                                point={day.point}
                                setUpdateBoard={setUpdateBoard}
                                updateBoard={updateBoard}
                            />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default Month;
