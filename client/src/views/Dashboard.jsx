import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/navbars/TopNav";
import SideNav from "../components/navbars/SideNav";
import BoardHolder from "../components/boards/BoardHolder";

import BoardService from "../components/services/BoardService";

const Dashboard = () => {

  return (
    <>
      <TopNav />
      <main className="dashboard-content-wrapper" style={{ height: "90%" }}>
        <SideNav />
        <BoardHolder />
      </main>
    </>
  );
};

export default Dashboard;
