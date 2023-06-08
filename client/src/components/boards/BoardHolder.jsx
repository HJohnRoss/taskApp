import CalendarBoard from './CalendarBoard/CalendarBoard'
import TaskBoard from './TaskBoard/TaskBoard'
import BoardService from "../services/BoardService";
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

function BoardHolder() {

  const { id } = useParams();

  const [board, setBoard] = useState()
  const [tasks, setTasks] = useState()

  useEffect(() => {
    BoardService.getOne(id)
      .then(res => {
        setBoard(res.data)
        setTasks(res.data.tasks)
      })
      .catch(err => console.error(err))
  }, [id])

  return (
    <div className='board'>
      {
        id ? <CalendarBoard board={board} tasks={tasks} /> :
          <TaskBoard />
      }
    </div>
  )
}

export default BoardHolder;