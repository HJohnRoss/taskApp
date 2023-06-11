import Dashboard from "./views/Dashboard";
import Login from "./views/users/Login";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div style={{height: "100vh"}}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/boards/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;