import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import Users from "./pages/UsersPage";
import SideBar from "./components/NavBar/SideBar";
import { Donations } from "./pages/DonationsPage";
import { TopBar } from "./components/NavBar/TopBar";
import "./styles/Index.css";
import { UserFormPage } from "./pages/UserFormPage";
import { UserDetailPage } from "./pages/UserDetailPage";
const App = () => {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/add-user" element={<UserFormPage title = "Add User"/>} />
            <Route path='/user-detail/:id' element={< UserDetailPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
