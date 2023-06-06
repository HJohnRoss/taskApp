import Dashboard from "./views/Dashboard";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/boards/:id" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
