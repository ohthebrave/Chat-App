import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
    </Router>
  )
}

export default App
