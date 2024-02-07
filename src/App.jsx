import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Header from "./Components/Common/Header";
import AdminLogin from "./Components/Pages/AdminLogin";
import UserManagement from "./Components/Pages/UserManagement";
import UserEntryForm from "./Components/Pages/UserEntryForm";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>     
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
          <Route path="/usermanage" element={<UserManagement />}></Route>
          <Route path="/userentryform" element={<UserEntryForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
