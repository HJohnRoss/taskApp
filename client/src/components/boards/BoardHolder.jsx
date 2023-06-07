import CalendarBoard from './CalendarBoard/CalendarBoard'
import TaskBoard from './TaskBoard/TaskBoard'
import BoardService from "../services/BoardService";
import {useParams} from "react-router-dom"

function BoardHolder() {

  const { id } = useParams();

  let service = BoardService.getOne(id)
  console.log(service)

  return (
    <div className='board'>
      <CalendarBoard />

    </div>
  )
}

export default BoardHolder;