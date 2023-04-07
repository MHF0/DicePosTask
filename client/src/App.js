import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigation = useNavigate();
  return (
    <div className="App">
      <div className="flex">
        <Routes>
          <Route path="/" element={!isLoggedIn && <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
