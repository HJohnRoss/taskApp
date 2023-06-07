import React from 'react'
import TaskBoard from './TaskBoard/TaskBoard';
import CalendarBoard from './CalendarBoard/CalendarBoard'
import { useParams } from 'react-router-dom';
import BoardService from '../services/BoardService';

function BoardHolder() {

    const { id } = useParams();

    let service = BoardService.getOne(id)
    console.log(service)

    return (
        <div className='board'>
            <CalendarBoard />
            { }
        </div>
    )
}

export default BoardHolder;