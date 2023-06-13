import Dashboard from "./views/Dashboard";
import Login from "./views/users/Login";
import Register from "./views/users/Register";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/boards/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;