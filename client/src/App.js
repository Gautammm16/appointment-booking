import React from "react";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home.js";
import { useSelector } from "react-redux";
import ProtectedRoutes from './components/ProtectedRoutes.js';
import PublicRoutes from "./components/PublicRoutes.js";

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <BrowserRouter>
     {loading &&  (<div className="spinner-parent">
        <div class="spinner-border" role="status">
        </div>
      </div>)}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<ProtectedRoutes>
          <Home/>
        </ProtectedRoutes>}/>

        <Route path="/login" element={<PublicRoutes><Login/></PublicRoutes>}/>
        <Route path="/register" element={<PublicRoutes><Register/></PublicRoutes>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
