import TopNav from "../components/navbars/TopNav";
import SideNav from "../components/navbars/SideNav";
import CalendarBoard from "../components/boards/CalendarBoard";

const Dashboard = () => {
  return (
    <>
      <TopNav />
      <main className="dashboard-content-wrapper">
        <SideNav />
        <CalendarBoard />
      </main>
    </>
  );
};

export default Dashboard;
