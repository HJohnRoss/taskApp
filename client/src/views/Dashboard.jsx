import TopNav from "../components/navbars/TopNav";
import SideNav from "../components/navbars/SideNav";
import BoardHolder from "../components/boards/BoardHolder";

const Dashboard = () => {
  return (
    <>
      <TopNav />
      <main className="dashboard-content-wrapper">
        <SideNav />
        <BoardHolder/>
      </main>
    </>
  );
};

export default Dashboard;
