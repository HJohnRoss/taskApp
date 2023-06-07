import CalendarBoard from './CalendarBoard/CalendarBoard'
import TaskBoard from './TaskBoard/TaskBoard'

function BoardHolder() {

    

    return (
        <div className='board'>
          {/* <CalendarBoard/> */}
          <TaskBoard/>
        </div>
    )
}

export default BoardHolder;