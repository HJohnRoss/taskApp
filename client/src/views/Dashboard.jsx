import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/navbars/TopNav";
import SideNav from "../components/navbars/SideNav";
import BoardHolder from "../components/boards/BoardHolder";

import BoardService from "../components/services/BoardService";
import NewBoardForm from "../components/boards/NewBoardForm";

const Dashboard = () => {

  const [newBoardState, setNewBoardState] = useState(false)

  return (
    <>
      <TopNav />
      <main className="dashboard-content-wrapper" style={{ height: "90%" }}>
        {newBoardState &&
          <NewBoardForm newBoardState={newBoardState} setNewBoardState={setNewBoardState} />
        }
        <SideNav newBoardState={newBoardState} setNewBoardState={setNewBoardState} />
        <BoardHolder />
      </main>
    </>
  );
};

export default Dashboard;
