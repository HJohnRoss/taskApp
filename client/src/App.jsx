import Dashboard from "./views/Dashboard";
import Login from "./views/users/Login";
import Register from "./views/users/Register";
import { Routes, Route } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div style={{ height: "100vh" }} id={theme}>
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