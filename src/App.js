import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import Home from "./components/Home/Home";
import List from "./components/List/List";
import AddProduct from "./components/addProduct/AddProduct";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>

  );
}

export default App;
