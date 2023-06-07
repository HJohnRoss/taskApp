import TopNav from "../components/navbars/TopNav";
import SideNav from "../components/navbars/SideNav";
import CalendarBoard from "../components/boards/CalendarBoard/CalendarBoard";
import TaskBoard from "../components/boards/TaskBoard/TaskBoard";
import BoardHolder from "../components/boards/BoardHolder";

import BoardService from "../components/services/BoardService";

const Dashboard = () => {

  

  return (
    <>
      <TopNav />
      <main className="dashboard-content-wrapper">
        <SideNav />
        <BoardHolder />
      </main>
    </>
  );
};

export default Dashboard;
