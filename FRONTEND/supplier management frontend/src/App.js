import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Placeorder from "./pages/Placeorder";
import Supplierdetails from "./pages/Supplierdetails";
import Report from "./pages/Report";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regi" element={<Register />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/supdash" element={<Placeorder />} />          
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/supplierdetails" element={<Supplierdetails />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
