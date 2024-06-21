import React from 'react';
import "antd/dist/reset.css"
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import {Toaster} from 'react-hot-toast';
import Home from './pages/home.js';

function App() {
  return (
   <BrowserRouter>
   <Toaster position = "top-center" reverseOrder={false} />
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
