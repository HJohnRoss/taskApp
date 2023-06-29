import React, { useState, useEffect } from 'react'
import SearchBar from '../../../utility/SearchBar'

const monthToNum = {
    "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12",
}

function CalendarNav({ currDate, setCurrDate, setTasks, tasks }) {

    const [navState, setNavState] = useState(window.innerWidth > 950 ? true : false)

    const nextMonth = () => {
        if (parseInt(currDate.currMonth) + 1 > 12) {
            setCurrDate({
                ...currDate,
                currMonth: "01",
                currYear: (parseInt(currDate.currYear) + 1).toString()
            })
        } else {
            setCurrDate({
                ...currDate,
                currMonth: `${parseInt(currDate.currMonth) + 1 < 10 ? `0${parseInt(currDate.currMonth) + 1}` : (parseInt(currDate.currMonth) + 1).toString()}`
            })
        }
    }

    const prevMonth = () => {
        if (parseInt(currDate.currMonth) - 1 < 1) {
            setCurrDate({
                ...currDate,
                currMonth: "12",
                currYear: (parseInt(currDate.currYear) - 1).toString()
            })
        } else {
            setCurrDate({
                ...currDate,
                currMonth: `${parseInt(currDate.currMonth) - 1 < 10 ? `0${parseInt(currDate.currMonth) - 1}` : (parseInt(currDate.currMonth) - 1).toString()}`
            })
        }
    }

    const resetDate = () => {
        setCurrDate({
            currMonth: monthToNum[Date().slice(4, 7)],
            currDay: Date().slice(8, 10),
            currYear: Date().slice(11, 15)
        })
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            console.log(window.innerWidth)
            if (window.innerWidth > 950) {
                setNavState(true)
            }else if (window.innerWidth == 950 && navState == true){

            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='calendarNav'>
            <SearchBar setTasks={setTasks} tasks={tasks} placeHolder={"Filter tasks"} />
            {navState &&
                <div className='change-date '>
                    <button onClick={resetDate} className='btn btn-dark btn-sm'>Today</button>
                    <div className='change-date__arrows'>
                        <i className="fa-solid fa-angle-left" onClick={prevMonth}></i>
                        <i className="fa-solid fa-angle-right" onClick={nextMonth}></i>
                    </div>
                    <div>{currDate.currYear}</div>
                    <select className='form-select'>
                        <option value="Month">Month</option>
                        <option value="Week">Week</option>
                        <option value="Day">Day</option>
                    </select>
                </div>
            }{
                screenWidth < 950 &&
                <i style={{ backgroundColor: `${navState ? "#dff0ff" : ""}`, transform: `${navState ? "scale(0.95)" : ""}` }} className="fa-solid fa-arrow-turn-down" onClick={() => setNavState(!navState)} ></i>
            }
        </div>
    )
}

export default CalendarNav