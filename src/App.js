import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminTable from "./components/Admin/Table";
import Home from "./components/Home/Home";
import List from "./components/List/List";
import AddProduct from "./components/Admin/AddProduct";
import EditProduct from "./components/Admin/EditProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdminRoute from "./components/Admin/AdminRoute";
import { UserContext } from "./contexts/UserContext";
function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/data"
          element={<AdminTable apiUrl={"/data"} title={"Published"} />}
        />
        <Route
          path="/admin/list"
          element={
            <AdminTable apiUrl={"/data/type/suggestion"} title={"Suggestion"} />
          }
        />
        <Route
          path="/admin/data/edit/:id"
          element={
            <AdminRoute>
              <EditProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/add"
          element={
            <AdminRoute>
              <AddProduct apiUrl={"/data"} />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
