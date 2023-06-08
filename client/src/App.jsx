import Dashboard from "./views/Dashboard";
import Login from "./views/users/Login";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/boards/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;