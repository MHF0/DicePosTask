import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product/index";
import Register from "./components/Register";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Table from "./components/Table";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="row">
      <div className="container">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Product /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {isLoggedIn && <Table />}
      </div>
    </div>
  );
};

export default App;
