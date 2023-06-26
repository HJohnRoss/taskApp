import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/navbars/TopNav";
import SideNav from "../components/navbars/SideNav";
import BoardHolder from "../components/boards/BoardHolder";

import BoardService from "../components/services/BoardService";
import NewBoardForm from "../components/boards/NewBoardForm";

const Dashboard = () => {

  const [newBoardState, setNewBoardState] = useState(false)

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Clear the form data when clicking outside the form
        setNewBoardState(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

    };
  }, [newBoardState]);

  return (
    <>
      <TopNav />
      <main className="dashboard-content-wrapper" style={{ height: "90%" }}>
        {newBoardState &&
          <div ref={formRef}>
            <NewBoardForm />
          </div>
        }
        <SideNav newBoardState={newBoardState} setNewBoardState={setNewBoardState} />
        <BoardHolder />
      </main>
    </>
  );
};

export default Dashboard;
