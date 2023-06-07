import CalendarBoard from './CalendarBoard/CalendarBoard'
import TaskBoard from './TaskBoard/TaskBoard'

function BoardHolder() {

  // const { id } = useParams();

  // let service = BoardService.getOne(id)
  // console.log(service)

  return (
    <div className='board'>
      <CalendarBoard />
      {/* <CalendarBoard/> */}
      <TaskBoard />
    </div>
  )
}

export default BoardHolder;