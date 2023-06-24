import Dashboard from "./views/Dashboard";
import Login from "./views/users/Login";
import Register from "./views/users/Register";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/boards/:id" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;