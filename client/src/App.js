import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product/index";
import Register from "./components/Register";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      <div className="flex">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Product /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
